require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const app = express();
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://inkaia.pe',
        'https://www.inkaia.pe',
        'https://3-entregable-web-buscador-de-metrad.vercel.app'
    ],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

// Ruta a la plantilla local
const TEMPLATE_PATH = path.join(__dirname, '..', 'METRADO_PLANTILLA_3.xlsx');
const STARTING_ROW = 8; // B8 corresponde a Fila 8

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online (Modo Excel Local).');
});

// Pesos nominales de acero (kg/m)
const validacionesPesoAcero = {
    "6mm": 0.222,
    "8mm": 0.395,
    "3/8\"": 0.560,
    "12mm": 0.888,
    "1/2\"": 0.994,
    "5/8\"": 1.552,
    "3/4\"": 2.235,
    "1\"": 3.973,
    "1 3/8\"": 7.907
};

// Helper para determinar si una partida es de acero
const esPartidaAcero = (m) =>
    m.unidad && m.unidad.toLowerCase() === 'kg' &&
    m.descripcion_partida &&
    m.descripcion_partida.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes('acero');

app.post('/api/export/metrados', async (req, res) => {
    try {
        const { metrados, proyecto } = req.body;
        console.log(`Iniciando exportación de ${metrados.length} registros para proyecto: ${proyecto}`);
        if (!Array.isArray(metrados) || metrados.length === 0)
            return res.status(400).json({ error: 'Payload vacío.' });

        console.log(`[INKAIA] Export Directo Excel — Filas: ${metrados.length}`);

        // Verificar si existe la plantilla
        if (!fs.existsSync(TEMPLATE_PATH)) {
            throw new Error(`No se encontró la plantilla en: ${TEMPLATE_PATH}`);
        }

        // Cargar libro de trabajo
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(TEMPLATE_PATH);

        // Determinar qué pestaña base usar. Priorizamos 'METRADO' o 'Hospital'/'Contingencia'
        let worksheet = workbook.getWorksheet('METRADO')
            || workbook.getWorksheet(proyecto === 'hospital' ? 'Hospital' : 'Contingencia')
            || workbook.getWorksheet('Metrado Estructuras')
            || workbook.worksheets[0];

        if (!worksheet) throw new Error("No se encontró una pestaña válida en la plantilla.");

        console.log(`[INKAIA] Usando pestaña: "${worksheet.name}"`);

        // OPTIMIZACIÓN O(N): Pre-calcular partidas con metrados
        const codesWithMetrados = new Set(
            metrados.filter(m => !m.is_template).map(m => m.codigo_partida)
        );

        // Pre-calcular sumas por partida para la fila "Total 2"
        const partidaTotals = {};
        metrados.forEach(m => {
            if (!m.is_template) {
                partidaTotals[m.codigo_partida] = (partidaTotals[m.codigo_partida] || 0) + (m.total || 0);
            }
        });

        // Transformar y filtrar filas
        let currentExcelRow = STARTING_ROW;

        metrados.forEach(m => {
            let rowData = null;

            // CASO A: Título
            if (m.is_template && m.es_titulo) {
                rowData = new Array(22).fill("");
                rowData[1] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : ""; // B
                rowData[8] = m.codigo || ""; // I
                rowData[9] = m.descripcion || ""; // J
                rowData[21] = m.modificacion || ""; // V
            }
            // CASO A2: Elemento virtual (se omite)
            else if (m.is_template && m.is_elemento_virtual) {
                return;
            }
            else if (m.is_template && !m.es_titulo) {
                // Si es una fila de cabecera (maestra) y tiene metrados reales, mostramos el total 2 aquí
                const totalSum = partidaTotals[m.codigo] || 0;
                const hasMetrados = codesWithMetrados.has(m.codigo);

                rowData = new Array(22).fill("");
                rowData[1] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : ""; // B
                rowData[8] = m.codigo || ""; // I
                rowData[9] = m.descripcion || ""; // J
                rowData[19] = hasMetrados ? totalSum : ""; // T (Total 2)
                rowData[20] = m.unidad || ""; // U (Unidad)
                rowData[21] = m.modificacion || ""; // V
            }
            // CASO B: Registro Real
            else if (!m.is_template) {
                const flagAcero = esPartidaAcero(m);
                const elemTrim = (m.elemento || '').trim();
                const detalleTrim = (m.detalle || '').trim();
                const concatDesc = elemTrim && detalleTrim ? `${elemTrim} / ${detalleTrim}` : elemTrim || detalleTrim;

                let parcial = m.parcial;
                if (flagAcero) {
                    const peso = validacionesPesoAcero[m.diametro] || 0;
                    if (peso > 0) parcial = (parseFloat(m.cantidad) || 0) * (parseFloat(m.nro_veces) || 1) * ((parseFloat(m.longitud_area) || 0) + (parseFloat(m.altura_gancho) || 0)) * peso;
                }

                rowData = new Array(22).fill("");
                rowData[1] = m.nivelJerarquia != null ? String(m.nivelJerarquia) : ""; // B
                rowData[2] = m.fecha || ""; // C
                rowData[3] = m.especialidad || ""; // D
                rowData[4] = m.frente || ""; // E
                rowData[5] = m.bloque || ""; // F
                rowData[6] = m.nivel || ""; // G
                rowData[7] = m.cuadrilla || ""; // H
                rowData[8] = m.codigo_partida || ""; // I
                rowData[9] = m.descripcion_partida || m.codigo_partida || ""; // J
                rowData[10] = concatDesc; // K
                rowData[11] = m.cantidad || ""; // L
                rowData[12] = m.longitud_area || ""; // M
                rowData[13] = flagAcero ? "" : (m.ancho_empalme || ""); // N
                rowData[14] = m.altura_gancho || ""; // O
                rowData[15] = parcial || 0; // P
                rowData[16] = m.nro_veces || ""; // Q
                rowData[17] = flagAcero ? (m.diametro || "") : ""; // R
                rowData[18] = m.total || 0; // S
                rowData[21] = m.modificacion || ""; // V
            }

            if (rowData) {
                const row = worksheet.getRow(currentExcelRow);
                rowData.forEach((val, i) => {
                    // Escribimos siempre a partir de Col B (i=1) si el valor no es undefined
                    if (i === 0) return; // Saltamos Col A
                    if (val !== undefined) {
                        const cell = row.getCell(i + 1);
                        cell.value = val;
                    }
                });
                currentExcelRow++;
            }
        });

        // Generar Buffer (ExcelJS se encarga de reestructurar el XML)
        const buffer = await workbook.xlsx.writeBuffer();

        const filename = `Export_Excel_Directo_${new Date().toISOString().replace(/[:.]/g, '-')}.xlsx`;
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(buffer);

        console.log(`[INKAIA] ✅ Exportación local completada: ${filename}`);

    } catch (err) {
        console.error(`[INKAIA] ❌ ERROR:`, err);
        res.status(500).json({ error: err.message, detail: err.stack });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[INKAIA] Servidor Local Excel activo en puerto ${PORT}`);
});
