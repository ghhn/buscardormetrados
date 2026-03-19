export const ESPECIALIDADES_PARTIDA = [
    { nombre: 'TODAS', prefijos: [] },
    { nombre: 'OBRAS PROVICIONALES', prefijos: ['OE.1.1'] },
    { nombre: 'SEGURIDAD', prefijos: ['OE.1.2'] },
    { nombre: 'ARQUEOLOGÍA', prefijos: ['OE.1.3', 'OE.1.4', 'OE.1.5', 'OE.1.6'] },
    { nombre: 'ESTRUCTURAS', prefijos: ['OE.2'] },
    { nombre: 'ARQUITECTURA', prefijos: ['OE.3'] },
    { nombre: 'INSTALACIONES SANITARIAS', prefijos: ['OE.4'] },
    { nombre: 'ELÉCTRICAS', prefijos: ['OE.5', 'OE.5.1', 'OE.5.2', 'OE.5.3', 'OE.5.4', 'OE.5.5'] },
    { nombre: 'ELECTROMECÁNICAS', prefijos: ['OE.5.6', 'OE.5.7', 'OE.6', 'OE.7'] },
    { nombre: 'PLAN DE MANEJO AMBIENTAL', prefijos: ['OE.8'] }
];

export const getEspecialidadPorCodigo = (codigo: string): string => {
    if (!codigo) return 'GENERAL';

    // Normalizar el código para asegurar coincidencia
    const cod = codigo.trim().toUpperCase();

    for (const esp of ESPECIALIDADES_PARTIDA) {
        if (esp.nombre === 'TODAS') continue;
        for (const prefijo of esp.prefijos) {
            if (cod.startsWith(prefijo)) return esp.nombre;
        }
    }

    return 'GENERAL';
};
