#!/usr/bin/env node
/**
 * generar_contingencia.cjs
 * Genera mockDB_contingencia.ts con SOLO los datos del Excel MODIF3 (hoja Contingencia).
 * Sin mezcla con Hospital. Limpio e independiente.
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL = path.join(__dirname, '../Base_datos_MODIF3.xlsx');
const OUTPUT = path.join(__dirname, '../src/data/mockDB_contingencia.ts');

const calcNivel = cod => cod.split('.').length - 1;
const calcParentId = cod => { const l = cod.lastIndexOf('.'); return l === -1 ? '' : cod.substring(0, l); };
const isMod = val => /^(PN|MM|DD)\d+$/i.test(String(val || '').trim());

const wb = XLSX.readFile(EXCEL);
console.log('Hojas:', wb.SheetNames);

// Usar la primera hoja que contenga 'contingencia' o simplemente la primera
const sheetName = wb.SheetNames.find(n => n.toLowerCase().includes('contingencia')) ?? wb.SheetNames[0];
console.log('Procesando hoja:', sheetName);

const ws = wb.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
console.log('Total filas brutas:', rows.length);

// Mapa para breadcrumbs
const codigoMap = new Map();
const partidas = [];
let id = 1;

rows.forEach(row => {
    const codigo = String(row[0] || '').trim();
    // Solo filas con código WBS válido (contiene punto y empieza con OE u otro prefijo)
    if (!codigo || !codigo.includes('.')) return;

    const descripcion = String(row[1] || '').trim();
    const unidad = String(row[2] || '').trim();

    // Modificadores en cols D..U (índices 3..20)  
    const mods = [];
    for (let col = 3; col <= 20; col++) {
        const v = String(row[col] || '').trim();
        if (isMod(v)) mods.push(v.toUpperCase());
    }

    // Sin unidad → título intermedio (nodo no terminal)
    const es_titulo = (unidad === '');

    codigoMap.set(codigo, `${codigo} ${descripcion}`);

    partidas.push({
        id: String(id++),
        codigo,
        descripcion,
        unidad,
        es_titulo,
        parent_id: calcParentId(codigo),
        nivel_jerarquia: calcNivel(codigo),
        jerarquia: [],       // Se reconstruye abajo
        especialidad: 'contingencia',
        modificacion: mods.length ? mods.join('-') : undefined,
        apu: null
    });
});

console.log('Partidas extraídas:', partidas.length);
console.log('Títulos:', partidas.filter(p => p.es_titulo).length);
console.log('Terminales:', partidas.filter(p => !p.es_titulo).length);
console.log('Con modificadores:', partidas.filter(p => p.modificacion).length);

// Reconstruir breadcrumbs
const fixed = partidas.map(p => {
    if (p.es_titulo) return { ...p, jerarquia: [] };
    const jerarquia = [];
    let cur = p.parent_id;
    const vis = new Set();
    while (cur && codigoMap.has(cur) && !vis.has(cur)) {
        vis.add(cur);
        jerarquia.unshift(codigoMap.get(cur));
        cur = calcParentId(cur);
    }
    return { ...p, jerarquia };
});

const out = `// @ts-nocheck
import type { Partida } from "../types";

// Generado por scripts/generar_contingencia.cjs desde Base_datos_MODIF3.xlsx
// Especialidad: contingencia | Partidas: ${fixed.length}
// Fuente única: Excel MODIF3, hoja "${sheetName}"

export const mockPartidasContingencia: Partida[] = ${JSON.stringify(fixed, null, 4)};
`;

fs.writeFileSync(OUTPUT, out, 'utf-8');
console.log('✅ Generado:', OUTPUT);
