export type TipoRecurso = "Mano de Obra" | "Materiales" | "Equipos" | "Subcontratos" | string;

export interface RecursoAPU {
    tipo: TipoRecurso;
    descripcion: string;
    unidad: string;
    cuadrilla?: number | string | null;
    cantidad: number;
    precio_unitario: number;
    parcial: number;
}

export interface APU {
    rendimiento_diario: number;
    jornada_horas: number;
    costo_directo_unitario: number;
    recursos: RecursoAPU[];
}

export interface Partida {
    id: string;
    codigo: string;
    descripcion: string;
    unidad: string;
    jerarquia?: string[];
    es_titulo?: boolean;
    parent_id?: string;
    nivel_jerarquia?: number;
    modificacion?: string;
    proyecto?: 'hospital' | 'contingencia' | string;
    especialidad?: string;
    apu?: APU | null;
}

export interface Metrado {
    id: string;
    fecha: string;
    frente: string;
    bloque: string;
    nivel: string;
    cuadrilla?: string;
    codigo_partida: string;
    descripcion_partida: string;
    elemento?: string | null;
    detalle: string;
    diametro?: string;
    cantidad: number | "";
    longitud_area: number | "";
    ancho_empalme: number | "";
    altura_gancho: number | "";
    parcial: number;
    nro_veces: number | "";
    total: number;
    unidad: string;
    jerarquia?: string[];
    autor_usuario: string;
    created_at: number;
    es_titulo?: boolean;
    parent_id?: string;
    nivelJerarquia?: number;
    modificacion?: string;
    proyecto?: string;
    especialidad?: string;
}
