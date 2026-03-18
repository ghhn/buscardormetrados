require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

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

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
    : null;

const TEMPLATE_PATH = path.join(__dirname, '..', 'METRADO_PLANTILLA_3.xlsx');
const STARTING_ROW = 8; // B8 corresponde a Fila 8

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online (Modo Excel Local).');
});

app.get('/api/metrados', async (req, res) => {
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from('metrados')
                .select('*')
                .order('creado_en', { ascending: false })
                .limit(1000);
            if (error) throw error;
            return res.json(data);
        }

        const result = await pool.query('SELECT * FROM metrados ORDER BY creado_en DESC LIMIT 1000');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching metrados', err);
        res.status(500).json({ error: 'Error consultando metrados' });
    }
});

app.get('/api/proyectos', async (req, res) => {
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from('proyectos')
                .select('*')
                .order('id', { ascending: true });
            if (error) throw error;
            return res.json(data);
        }

        const result = await pool.query('SELECT * FROM proyectos ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching proyectos', err);
        res.status(500).json({ error: 'Error consultando proyectos' });
    }
});

app.get('/api/especialidades', async (req, res) => {
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from('especialidades')
                .select('*')
                .order('id', { ascending: true });
            if (error) throw error;
            return res.json(data);
        }

        const result = await pool.query('SELECT * FROM especialidades ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching especialidades', err);
        res.status(500).json({ error: 'Error consultando especialidades' });
    }
});

app.post('/api/metrados', async (req, res) => {
    try {
        const m = req.body;
        if (supabase) {
            const { data, error } = await supabase
                .from('metrados')
                .insert([{
                    fecha: m.fecha,
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
                    jerarquia: m.jerarquia,
                    autor_usuario: m.autor_usuario,
                    proyecto_id: m.proyecto_id,
                    especialidad_id: m.especialidad_id,
                    modificacion: m.modificacion
                }])
                .select();
            if (error) throw error;
            return res.json(data[0]);
        }

        const insertQuery = `
            INSERT INTO metrados (
                fecha, frente, bloque, nivel, cuadrilla, codigo_partida, descripcion_partida,
                elemento, detalle, diametro, cantidad, longitud_area, ancho_empalme, altura_gancho,
                parcial, nro_veces, total, unidad, jerarquia, autor_usuario, proyecto_id, especialidad_id, modificacion
            ) VALUES (
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23
            ) RETURNING *
        `;
        const values = [
            m.fecha, m.frente, m.bloque, m.nivel, m.cuadrilla, m.codigo_partida, m.descripcion_partida,
            m.elemento, m.detalle, m.diametro, m.cantidad, m.longitud_area, m.ancho_empalme, m.altura_gancho,
            m.parcial, m.nro_veces, m.total, m.unidad, m.jerarquia, m.autor_usuario, m.proyecto_id, m.especialidad_id, m.modificacion
        ];
        const result = await pool.query(insertQuery, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error inserting metrado', err);
        res.status(500).json({ error: 'Error guardando metrado' });
    }
});

app.post('/api/register', async (req, res) => {
    const { username, nombre, tipo, password, especialidad_id, especialidad_nombre } = req.body;
    if (!username || !nombre || !tipo || !password) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    try {
        let espId = especialidad_id || null;
        if (!espId && especialidad_nombre) {
            if (supabase) {
                const { data, error } = await supabase
                    .from('especialidades')
                    .select('id')
                    .ilike('nombre', especialidad_nombre)
                    .limit(1);
                if (error) throw error;
                espId = data?.[0]?.id || null;
            } else {
                const espQuery = await pool.query('SELECT id FROM especialidades WHERE UPPER(nombre)=UPPER($1) LIMIT 1', [especialidad_nombre]);
                espId = espQuery.rows[0]?.id || null;
            }
        }

        const hashed = bcrypt.hashSync(password, 10);

        if (supabase) {
            const { data, error } = await supabase
                .from('usuarios')
                .insert([{ username, nombre, tipo, password_hash: hashed, especialidad_id: espId }])
                .select('id, username, nombre, tipo, especialidad_id');
            if (error) {
                if (error.code === '23505' || error.code === 'uniqueness_violation') {
                    return res.status(409).json({ error: 'Usuario ya existe' });
                }
                throw error;
            }
            return res.json({ user: data[0] });
        }

        const result = await pool.query(
            'INSERT INTO usuarios (username, nombre, tipo, password_hash, especialidad_id) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, nombre, tipo, especialidad_id',
            [username, nombre, tipo, hashed, espId]
        );
        const user = result.rows[0];
        res.json({ user });
    } catch (err) {
        console.error('Register error', err);
        if (err.code === '23505' || err.code === 'uniqueness_violation') {
            return res.status(409).json({ error: 'Usuario ya existe' });
        }
        res.status(500).json({ error: 'Error registrando usuario' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Falta usuario o contraseña' });
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from('usuarios')
                .select('id, username, nombre, tipo, password_hash, especialidad_id')
                .eq('username', username)
                .limit(1);
            if (error) throw error;
            if (!data || data.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });
            const user = data[0];
            const valid = bcrypt.compareSync(password, user.password_hash);
            if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });
            return res.json({ id: user.id, username: user.username, nombre: user.nombre, tipo: user.tipo, especialidad_id: user.especialidad_id });
        }

        const result = await pool.query('SELECT id, username, nombre, tipo, password_hash, especialidad_id FROM usuarios WHERE username = $1', [username]);
        if (result.rows.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });
        const user = result.rows[0];
        const valid = bcrypt.compareSync(password, user.password_hash);
        if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });
        res.json({ id: user.id, username: user.username, nombre: user.nombre, tipo: user.tipo, especialidad_id: user.especialidad_id });
    } catch (err) {
        console.error('Login error', err);
        res.status(500).json({ error: 'Error en login' });
    }
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
