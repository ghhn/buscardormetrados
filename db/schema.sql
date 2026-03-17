-- PostgreSQL relational schema for Buscador Metrados
-- Run with: psql -d your_db -f db/schema.sql

-- 1) Enums
CREATE TYPE proyecto_tipo AS ENUM ('hospital', 'contingencia');
CREATE TYPE usuario_tipo AS ENUM ('especialidad', 'jefe_area', 'residente');
CREATE TYPE recurso_tipo AS ENUM ('Mano de Obra', 'Materiales', 'Equipos', 'Subcontratos');

-- 2) Catalogos
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL UNIQUE,
    descripcion TEXT
);

CREATE TABLE especialidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL UNIQUE,
    codigo_prefijos TEXT[] DEFAULT ARRAY[]::text[]
);

CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL UNIQUE,
    tipo proyecto_tipo NOT NULL
);

-- 3) Usuarios (login)
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL UNIQUE,
    nombre VARCHAR(160) NOT NULL,
    tipo usuario_tipo NOT NULL,
    password_hash TEXT NOT NULL,
    especialidad_id INT NULL REFERENCES especialidades(id) ON DELETE SET NULL,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT now(),
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4) Partidas maestras
CREATE TABLE partidas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    jerarquia TEXT[],
    es_titulo BOOLEAN NOT NULL DEFAULT FALSE,
    parent_id UUID NULL REFERENCES partidas(id) ON DELETE SET NULL,
    nivel_jerarquia SMALLINT,
    modificacion TEXT,
    proyecto_id INT REFERENCES proyectos(id) ON DELETE SET NULL,
    especialidad_id INT REFERENCES especialidades(id) ON DELETE SET NULL
);

-- 5) Metrados
CREATE TABLE metrados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fecha DATE NOT NULL,
    frente VARCHAR(80),
    bloque VARCHAR(80),
    nivel VARCHAR(80),
    cuadrilla VARCHAR(80),
    codigo_partida VARCHAR(100) NOT NULL,
    descripcion_partida TEXT NOT NULL,
    elemento TEXT,
    detalle TEXT,
    diametro VARCHAR(40),
    cantidad NUMERIC,
    longitud_area NUMERIC,
    ancho_empalme NUMERIC,
    altura_gancho NUMERIC,
    parcial NUMERIC,
    nro_veces NUMERIC,
    total NUMERIC,
    unidad VARCHAR(80),
    jerarquia TEXT[],
    autor_usuario UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT now(),
    es_titulo BOOLEAN DEFAULT FALSE,
    parent_id UUID REFERENCES metrados(id) ON DELETE SET NULL,
    nivel_jerarquia SMALLINT,
    modificacion TEXT,
    proyecto_id INT REFERENCES proyectos(id) ON DELETE SET NULL,
    especialidad_id INT REFERENCES especialidades(id) ON DELETE SET NULL
);

-- 6) APU / recursos (opcional para costos desglosados)
CREATE TABLE apu (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partida_id UUID REFERENCES partidas(id) ON DELETE CASCADE,
    rendimiento_diario NUMERIC,
    jornada_horas NUMERIC,
    costo_directo_unitario NUMERIC,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE recurso_apu (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    apu_id UUID REFERENCES apu(id) ON DELETE CASCADE,
    tipo recurso_tipo NOT NULL,
    descripcion TEXT NOT NULL,
    unidad VARCHAR(80) NOT NULL,
    cuadrilla INT,
    cantidad NUMERIC NOT NULL,
    precio_unitario NUMERIC NOT NULL,
    parcial NUMERIC NOT NULL
);

-- 7) Índices para consultas frecuentes
CREATE INDEX idx_metrados_proyecto ON metrados(proyecto_id);
CREATE INDEX idx_metrados_especialidad ON metrados(especialidad_id);
CREATE INDEX idx_partidas_proyecto ON partidas(proyecto_id);
CREATE INDEX idx_partidas_especialidad ON partidas(especialidad_id);

-- 8) Datos iniciales de ejemplo
INSERT INTO roles (nombre, descripcion) VALUES
('admin', 'Administrador del sistema'),
('usuario', 'Usuario normal');

INSERT INTO especialidades (nombre, codigo_prefijos) VALUES
('OBRAS PROVICIONALES', ARRAY['OE.1.1']),
('SEGURIDAD', ARRAY['OE.1.2']),
('ARQUEOLOGÍA', ARRAY['OE.1.3', 'OE.1.4', 'OE.1.5', 'OE.1.6']),
('ESTRUCTURAS', ARRAY['OE.2']),
('ARQUITECTURA', ARRAY['OE.3']),
('INSTALACIONES SANITARIAS', ARRAY['OE.4']),
('ELÉCTRICAS', ARRAY['OE.5', 'OE.5.1', 'OE.5.2', 'OE.5.3', 'OE.5.4', 'OE.5.5']),
('ELECTROMECÁNICAS', ARRAY['OE.5.6', 'OE.5.7', 'OE.6', 'OE.7']),
('PLAN DE MANEJO AMBIENTAL', ARRAY['OE.8']);

INSERT INTO proyectos (nombre, tipo) VALUES
('Hospital', 'hospital'),
('Contingencia', 'contingencia');

-- Usuario ejemplo (hash de 'residente'): reemplaza por bcrypt hash en producción
INSERT INTO usuarios (username, nombre, tipo, password_hash) VALUES
('residente', 'Residente', 'residente', 'password_residente_hash_solo_ejemplo');
