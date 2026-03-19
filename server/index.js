// DEPLOY_FORCE: 2026-03-12 09:38
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', 'src', '.env') });
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const ExcelJS = require('exceljs');
const bcrypt = require('bcryptjs');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

// Inicializar cliente Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Ruta a la plantilla local
const TEMPLATE_PATH = path.join(__dirname, '..', 'METRADO_PLANTILLA_5.xlsx');
const STARTING_ROW = 8; // B8 corresponde a Fila 8

const normalizeSpecialtyName = (value) => {
    if (!value) return null;

    const normalized = value
        .toString()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();

    const specialtyAliases = {
        'OBRAS PROVISIONALES': 'OBRAS PROVICIONALES',
        'SANITARIAS': 'INSTALACIONES SANITARIAS',
        'ELECTRICAS': 'ELECTRICAS',
        'ARQUEOLOGIA': 'ARQUEOLOGIA',
        'MECANICAS': 'ELECTROMECANICAS',
        'MEDIO AMBIENTE': 'PLAN DE MANEJO AMBIENTAL',
        'SSOMA': 'SEGURIDAD',
        'TICS': 'COMUNICACIONES',
        "TIC'S": 'COMUNICACIONES',
    };

    return specialtyAliases[normalized] || normalized;
};

async function buildSpecialtyLookup() {
    const { data, error } = await supabase
        .from('especialidades')
        .select('id, nombre');

    if (error) throw error;

    const lookup = new Map();
    for (const specialty of data || []) {
        lookup.set(normalizeSpecialtyName(specialty.nombre), specialty.id);
    }
    return lookup;
}

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online (Modo Excel Local).');
});

// === ENDPOINTS DE AUTENTICACIÓN ===

/**
 * POST /auth/login
 * DEPRECATED: Usar Supabase Auth directamente desde el frontend
 * Este endpoint se mantiene por compatibilidad
 */
app.post('/auth/login', async (req, res) => {
    return res.status(200).json({ 
        success: false,
        error: 'Usa Supabase Authentication desde el frontend. Ver documentación.'
    });
});

/**
 * GET /auth/usuarios
 * Retorna lista de todos los usuarios disponibles
 */
app.get('/auth/usuarios', async (req, res) => {
    try {
        const { data: usuarios, error } = await supabase
            .from('usuarios')
            .select('id, email, nombre, tipo, especialidad_id');

        if (error) throw error;

        res.json({ 
            success: true, 
            usuarios: usuarios || [] 
        });

    } catch (err) {
        console.error('[AUTH] Error obteniendo usuarios:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Error obteniendo usuarios' 
        });
    }
});

// === ENDPOINTS DE METRADOS ===

/**
 * POST /metrados
 * Guarda un lote de metrados en la BD asociados a un usuario
 * Body: { metrados: [], usuario_id, proyecto, especialidad }
 */
app.post('/metrados', async (req, res) => {
    try {
        const { metrados, usuario_id, proyecto, especialidad } = req.body;

        if (!usuario_id || !Array.isArray(metrados) || metrados.length === 0) {
            return res.status(400).json({ 
                success: false, 
                error: 'usuario_id y metrados[] son requeridos' 
            });
        }

        const specialtyLookup = await buildSpecialtyLookup();

        const metradosPayload = metrados.map(m => {
            const resolvedSpecialtyId =
                m.especialidad_id ??
                specialtyLookup.get(normalizeSpecialtyName(m.especialidad)) ??
                especialidad ??
                null;

            return {
                fecha: m.fecha || new Date().toISOString().split('T')[0],
                frente: m.frente,
                bloque: m.bloque,
                nivel: m.nivel,
                cuadrilla: m.cuadrilla,
                codigo_partida: m.codigo_partida,
                descripcion_partida: m.descripcion_partida,
                elemento: m.elemento,
                detalle: m.detalle,
                diametro: m.diametro,
                cantidad: m.cantidad,
                longitud_area: m.longitud_area,
                ancho_empalme: m.ancho_empalme,
                altura_gancho: m.altura_gancho,
                parcial: m.parcial,
                nro_veces: m.nro_veces,
                total: m.total,
                unidad: m.unidad,
                autor_usuario: usuario_id,
                proyecto_id: proyecto === 'hospital' ? 1 : 2,
                especialidad_id: resolvedSpecialtyId,
                modificacion: m.modificacion
            };
        });

        const missingSpecialty = metradosPayload.find(m => !m.especialidad_id);
        if (missingSpecialty) {
            return res.status(400).json({
                success: false,
                error: `No se pudo resolver la especialidad para la partida ${missingSpecialty.codigo_partida}`
            });
        }

        const { data, error } = await supabase
            .from('metrados')
            .insert(metradosPayload)
            .select();

        if (error) throw error;

        res.json({ 
            success: true, 
            message: `${data.length} metrados guardados exitosamente`,
            saved: data.length
        });

    } catch (err) {
        console.error('[METRADOS] Error guardando:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Error guardando metrados' 
        });
    }
});

/**
 * GET /metrados/usuario/:usuario_id
 * Obtiene todos los metrados de un usuario específico
 */
app.get('/metrados/usuario/:usuario_id', async (req, res) => {
    try {
        const { usuario_id } = req.params;

        const { data: metrados, error } = await supabase
            .from('metrados')
            .select('*')
            .eq('autor_usuario', usuario_id)
            .order('creado_en', { ascending: false });

        if (error) throw error;

        res.json({ 
            success: true, 
            metrados: metrados || [],
            count: metrados?.length || 0
        });

    } catch (err) {
        console.error('[METRADOS] Error obteniendo:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Error obteniendo metrados' 
        });
    }
});

/**
 * GET /metrados/proyecto/:proyecto/especialidad/:especialidad
 * Obtiene metrados por proyecto y especialidad
 */
app.get('/metrados/proyecto/:proyecto/especialidad/:especialidad', async (req, res) => {
    try {
        const { proyecto, especialidad } = req.params;
        const proyectoId = proyecto === 'hospital' ? 1 : 2;

        const { data: metrados, error } = await supabase
            .from('metrados')
            .select('*')
            .eq('proyecto_id', proyectoId)
            .eq('especialidad_id', especialidad)
            .order('creado_en', { ascending: false });

        if (error) throw error;

        res.json({ 
            success: true, 
            metrados: metrados || []
        });

    } catch (err) {
        console.error('[METRADOS] Error obteniendo por filtros:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Error obteniendo metrados' 
        });
    }
});

/**
 * DELETE /metrados/:metrado_id
 * Elimina un metrado específico
 */
app.delete('/metrados/:metrado_id', async (req, res) => {
    try {
        const { metrado_id } = req.params;

        const { error } = await supabase
            .from('metrados')
            .delete()
            .eq('id', metrado_id);

        if (error) throw error;

        res.json({ 
            success: true, 
            message: 'Metrado eliminado' 
        });

    } catch (err) {
        console.error('[METRADOS] Error eliminando:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Error eliminando metrado' 
        });
    }
}

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
        const codigosMap = new Map();

        metrados.forEach(m => {
            if (m.is_template) {
                codigosMap.set(m.codigo, {
                    descripcion: m.descripcion,
                    nivel_jerarquia: m.nivel_jerarquia,
                    unidad: m.unidad
                });
            } else {
                partidaTotals[m.codigo_partida] = (partidaTotals[m.codigo_partida] || 0) + (m.total || 0);
            }
        });

        // Transformar y filtrar filas
        let currentExcelRow = STARTING_ROW;

        metrados.forEach(m => {
            let rowData = null;

            // CASO A: Título de jerarquía (se omite)
            if (m.is_template && m.es_titulo) {
                return;
            }
            // CASO A2: Elemento virtual (se omite)
            else if (m.is_template && m.is_elemento_virtual) {
                return;
            }

            // Calculamos Grados
            const isSumatoria = m.is_template && !m.es_titulo;
            const codigoActual = isSumatoria ? m.codigo : m.codigo_partida;
            const descActual = isSumatoria ? m.descripcion : (m.descripcion_partida || m.codigo_partida || "");

            const grados = ["", "", "", ""];
            let ancestors = [];
            for (let [key, val] of codigosMap.entries()) {
                if (codigoActual === key || codigoActual.startsWith(key + '.')) {
                    ancestors.push({ codigo: key, descripcion: val.descripcion });
                }
            }
            // Ordenar por nivel (longitud del código)
            ancestors.sort((a, b) => a.codigo.length - b.codigo.length);
            for (let i = 0; i < ancestors.length && i < 4; i++) {
                grados[i] = `${ancestors[i].codigo}-${ancestors[i].descripcion}`;
            }

            const colM = `${codigoActual}-${descActual}`;
            const total2 = partidaTotals[codigoActual] || 0;
            const unidadActual = (m.unidad) || (codigosMap.get(codigoActual)?.unidad) || "";

            rowData = new Array(26).fill("");

            if (isSumatoria) {
                const hasMetrados = codesWithMetrados.has(codigoActual);
                rowData[1] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : ""; // B
                rowData[8] = grados[0]; // I: Grado 1
                rowData[9] = grados[1]; // J: Grado 2
                rowData[10] = grados[2]; // K: Grado 3
                rowData[11] = grados[3]; // L: Grado 4
                rowData[12] = colM;     // M
                rowData[22] = hasMetrados ? total2 : ""; // W: Total 2
                rowData[23] = unidadActual; // X: Unidad
                rowData[24] = m.modificacion || "SM"; // Y
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

                rowData[1] = m.nivelJerarquia != null ? String(m.nivelJerarquia) : ""; // B
                rowData[2] = m.fecha || ""; // C
                rowData[3] = m.especialidad || ""; // D
                rowData[4] = m.frente || ""; // E
                rowData[5] = m.bloque || ""; // F
                rowData[6] = m.nivel || ""; // G
                rowData[7] = m.cuadrilla || ""; // H

                rowData[8] = grados[0]; // I: Grado 1
                rowData[9] = grados[1]; // J: Grado 2
                rowData[10] = grados[2]; // K: Grado 3
                rowData[11] = grados[3]; // L: Grado 4

                rowData[12] = colM; // M
                rowData[13] = concatDesc; // N
                rowData[14] = m.cantidad || ""; // O
                rowData[15] = m.longitud_area || ""; // P
                rowData[16] = flagAcero ? "" : (m.ancho_empalme || ""); // Q
                rowData[17] = m.altura_gancho || ""; // R
                rowData[18] = parcial || 0; // S
                rowData[19] = m.nro_veces || ""; // T
                rowData[20] = flagAcero ? (m.diametro || "") : ""; // U
                rowData[21] = m.total || 0; // V: total

                rowData[22] = ""; // W: Total 2 (Solo en cabeceras)
                rowData[23] = unidadActual; // X: Unidad
                rowData[24] = m.modificacion || "SM"; // Y: modificacion
            }

            if (rowData) {
                const row = worksheet.getRow(currentExcelRow);
                rowData.forEach((val, i) => {
                    // Escribimos siempre a partir de Col B (i=1) si el valor no es undefined
                    if (i === 0) return; // Saltamos Col A
                    if (val !== undefined) {
                        const cell = row.getCell(i + 1);
                        cell.value = val;

                        // Limpieza específica para Columna W (Total 2) en registros reales
                        if (i === 22 && !isSumatoria) {
                            cell.value = null;
                            // Quitar color de relleno si existe (para quitar el amarillo residual)
                            cell.fill = {
                                type: 'pattern',
                                pattern: 'none'
                            };
                        }
                    }
                });
                currentExcelRow++;
            }
        });

        // Generar Buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Determinar nombre descriptivo basado en la primera especialidad encontrada
        let especialidadNombre = "MODIF";
        const firstReal = metrados.find(m => !m.is_template && m.especialidad);
        if (firstReal && firstReal.especialidad) {
            especialidadNombre = firstReal.especialidad.toUpperCase();
        }

        const dateStr = new Date().toISOString().split('T')[0];
        const filename = `Metrado_${especialidadNombre}_${dateStr}.xlsx`;

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
