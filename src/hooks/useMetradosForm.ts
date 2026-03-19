import { useState, useMemo } from 'react';
import type { Partida, Metrado } from '../types';
import { getEspecialidadPorCodigo } from '../constants/especialidades';
import { useMetradosStore } from '../store/useMetradosStore';

const PESOS_ACERO: Record<string, number> = {
    "1/4": 0.254,
    "3/8": 0.560,
    "1/2": 0.994,
    "5/8": 1.550,
    "3/4": 2.240,
    "1": 3.970
};

export const isAcero = (partida: Partida | null): boolean => {
    if (!partida) return false;
    const isKg = partida.unidad === 'kg';
    const descNormalizada = partida.descripcion
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    return isKg && descNormalizada.includes('acero');
};

export const getHvacCategory = (partida: Partida | null): string | null => {
    if (!partida) return null;
    const codigo = partida.codigo;
    
    // Categoría TEE, REDUCCIONES, CODOS
    if (['OE.5.6.16.5.8', 'OE.5.6.16.5.11.2', 'OE.5.6.16.5.11.5', 'OE.5.6.16.5.12.1'].includes(codigo)) {
        return 'ACCESORIO'; 
    }
    
    // Categoría DUCTO
    if (['OE.5.6.16.5.7', 'OE.5.6.16.5.11.1', 'OE.5.6.16.5.11.5', 'OE.5.6.16.5.12.1'].includes(codigo)) {
        return 'DUCTO';
    }
    
    return null;
};

export const useMetradosForm = () => {
    const { context, setContext, customPartidas, addCustomPartida } = useMetradosStore();

    const getLocalDateString = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [fecha, setFecha] = useState<string>(getLocalDateString());

    // Estos campos ahora son proxies al contexto del store
    const frente = context.frente;
    const bloque = context.bloque;
    const nivel = context.nivel;
    const cuadrilla = context.cuadrilla;

    const [partidaSeleccionada, setPartidaSeleccionada] = useState<Partida | null>(null);
    const [elemento, setElemento] = useState<string>('');
    const [detalle, setDetalle] = useState<string>('');
    const [hvacFactor, setHvacFactor] = useState<number | null>(null);
    const [hvacItemType, setHvacItemType] = useState<string | null>(null); // 'TEE', 'REDUCCION', 'CODO', 'DUCTO'
    const [diametro, setDiametro] = useState<string>('5/8"');

    const [cantidad, setCantidad] = useState<number | "">("");
    const [longitud, setLongitud] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [altura, setAltura] = useState<number | "">("");
    const [nroVeces, setNroVeces] = useState<number | "">("");

    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState<string>('TODAS');

    const parcial = useMemo(() => {
        const flagAcero = isAcero(partidaSeleccionada);

        if (flagAcero) {
            const c = typeof cantidad === 'number' ? cantidad : 0;
            const longitudRecta = typeof longitud === 'number' ? longitud : 0;
            const longitudGancho = typeof altura === 'number' ? altura : 0;

            const factorKg = PESOS_ACERO[diametro.replace('"', '')] || 0;
            const longitudTotal = longitudRecta + longitudGancho;

            if (c === 0 && longitudRecta === 0 && longitudGancho === 0) return 0;
            return c * longitudTotal * factorKg;
        } else if (hvacFactor !== null) {
            // Lógica HVAC
            // El usuario quiere que en CODOS se use Longitud.
            // La fórmula del parcial para HVAC ahora debe contemplar si Longitud está habilitada.
            const c = typeof cantidad === 'number' ? cantidad : 1;
            
            // Si es CODO o DUCTO, consideramos la Longitud en el cálculo si se ingresó
            const l = (hvacItemType === 'CODO' || hvacItemType === 'DUCTO') && typeof longitud === 'number' ? longitud : 1;
            
            // Ancho y Altura están bloqueados para accesorios HVAC, así que usamos 1
            const a = typeof ancho === 'number' ? ancho : 1;
            const h = typeof altura === 'number' ? altura : 1;
            
            return c * l * a * h * hvacFactor;
        } else {
            if (cantidad === "" && longitud === "" && ancho === "" && altura === "") return 0;
            const c = cantidad !== "" ? cantidad : 1;
            const l = longitud !== "" ? longitud : 1;
            const a = ancho !== "" ? ancho : 1;
            const h = altura !== "" ? altura : 1;
            return c * l * a * h;
        }
    }, [cantidad, longitud, ancho, altura, partidaSeleccionada, diametro, hvacFactor, hvacItemType]);

    const hvacConfig = useMemo(() => {
        const category = getHvacCategory(partidaSeleccionada);
        if (!category) return null;

        return {
            category,
            isAccessory: category === 'ACCESORIO',
            isDuct: category === 'DUCTO'
        };
    }, [partidaSeleccionada]);

    const total = useMemo(() => {
        const veces = nroVeces !== "" ? nroVeces : 1;
        return parcial * veces;
    }, [parcial, nroVeces]);

    const limpiarCampos = () => {
        setDetalle('');
        setHvacFactor(null);
        setHvacItemType(null);
    };

    const procesarRegistro = (): Metrado | null => {
        if (!partidaSeleccionada) return null;

        const nuevoMetrado: Metrado = {
            id: Date.now().toString(),
            fecha,
            frente,
            bloque,
            nivel,
            cuadrilla,
            codigo_partida: partidaSeleccionada.codigo,
            descripcion_partida: partidaSeleccionada.descripcion,
            elemento,
            detalle,
            diametro: isAcero(partidaSeleccionada) ? diametro : undefined,
            cantidad,
            longitud_area: longitud,
            ancho_empalme: ancho,
            altura_gancho: altura,
            parcial,
            nro_veces: nroVeces,
            total,
            unidad: partidaSeleccionada.unidad,
            jerarquia: partidaSeleccionada.jerarquia,
            nivelJerarquia: partidaSeleccionada.nivel_jerarquia,
            modificacion: partidaSeleccionada.modificacion,
            especialidad: getEspecialidadPorCodigo(partidaSeleccionada.codigo),
            autor_usuario: "UserWeb",
            created_at: Date.now(),
        };

        limpiarCampos();
        return nuevoMetrado;
    };

    return {
        state: {
            fecha, frente, bloque, nivel, cuadrilla,
            partidaSeleccionada, elemento, detalle, diametro,
            cantidad, longitud, ancho, altura, nroVeces,
            parcial, total, especialidadSeleccionada,
            customPartidas, hvacFactor, hvacConfig, hvacItemType
        },
        actions: {
            setFecha,
            setFrente: (val: string) => setContext({ frente: val }),
            setBloque: (val: string) => setContext({ bloque: val }),
            setNivel: (val: string) => setContext({ nivel: val }),
            setCuadrilla: (val: string) => setContext({ cuadrilla: val }),
            setPartidaSeleccionada, setElemento, setDetalle, setDiametro,
            setCantidad, setLongitud, setAncho, setAltura, setNroVeces,
            setEspecialidadSeleccionada, setHvacFactor,
            limpiarCampos, procesarRegistro,
            addCustomPartida,
            setHvacItemType
        }
    };
};
