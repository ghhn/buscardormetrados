# Análisis de Estructura de Datos (V5.1)

## Objetivo
Documentar exhaustivamente la estructura de la base de datos (Catálogo y Metrados) para facilitar la limpieza y migración de nueva información desde archivos Excel.

## Componentes del Sistema de Datos

### 1. El Catálogo (Partidas Master)
El archivo `src/data/mockDB.ts` contiene el listado de todas las partidas posibles. Para subir nueva data de Excel, se debe respetar este esquema:

| Campo | Tipo | Ejemplo | Descripción |
| :--- | :--- | :--- | :--- |
| `id` | String | "123" | ID único incremental. |
| `codigo` | String | "OE.2.3.1" | Código WBS / Item. |
| `descripcion` | String | "Concreto f'c=210" | Nombre oficial de la partida. |
| `unidad` | String | "m3" | Unidad de medida (vacio para títulos). |
| `es_titulo` | Boolean | `true`/`false` | Define si es un nodo de agrupación o una partida metrable. |
| `parent_id` | String | "OE.2.3" | Código del padre inmediato. |
| `nivel_jerarquia`| Number | 3 | Nivel de profundidad (1=Raíz). |
| `jerarquia` | Array | `["Raíz", "Padre"]` | Listado de nombres de los ancestros. |
| `apu` | Object | `{...}` | Análisis de Precios Unitarios (opcional). |

#### Estructura Interna del APU (Análisis de Precios Unitarios)
Si se desea importar costos, cada partida con `es_titulo: false` debería tener:
- `rendimiento_diario`: (Número) Avance por jornada.
- `jornada_horas`: (Número, default 8).
- `recursos`: Lista de objetos con:
    - `tipo`: "Mano de Obra" | "Materiales" | "Equipos".
    - `descripcion`: Nombre del insumo.
    - `unidad`: hh, hm, kg, m3, etc.
    - `cuadrilla`: Cantidad de personas/máquinas.
    - `cantidad`: Factor de aporte unitario.
    - `precio_unitario`: Costo del recurso.
    - `parcial`: Resultado pre-calculado.

---

### 2. Transacciones (Metrados Activos)
Lo que el usuario registra en la app. Al migrar data histórica de Excel a la Web, estas son las columnas necesarias:

| Columna Core | Columna Excel (Mapping) | Descripción |
| :--- | :--- | :--- |
| `fecha` | FECHA | Fecha del registro. |
| `frente` | FRENTE | Sector o zona. |
| `bloque` | BLOQUE | Edificio o etapa. |
| `nivel` | NIVEL (PISO) | Piso o altura. |
| `cuadrilla` | CUADRILLA | Grupo de trabajo. |
| `codigo_partida`| PARTIDA (Código) | Link al catálogo. |
| `elemento` | DESCRIPCION (Item) | Agrupador lógico. |
| `detalle` | DESCRIPCION (Detalle)| Detalle específico. |
| `diametro` | ACERO (Ø) | Para partidas 'kg' de acero. |
| `cantidad` | CANTIDAD | Veces o unidades. |
| `longitud_area` | LONGITUD/AREA | Dimensión 1. |
| `ancho_empalme` | ANCHO/EMPAME | Dimensión 2. |
| `altura_gancho` | ALTURA/GANCHO | Dimensión 3. |
| `nro_veces` | N° VECES | Multiplicador final. |

---

## Reglas de Limpieza para Nuevos Datos (ETL)

1. **Unificación de Códigos**: Los códigos `OE.X.X` en el archivo de Metrados deben existir idénticos en el archivo de Catálogo. Si el código no coincide, el sistema no podrá sumar (Roll-up) los totales.
2. **Normalización de Unidades**: Usar siempre minúsculas y sin puntos (ej: `m3` en vez de `M3.` o `Metros Cúbicos`). El acero **obligatoriamente** debe tener unidad `kg` para activar el motor de diámetros.
3. **Jerarquía Automática**: Para generar el JSON final, el script debe inferir el `parent_id` cortando el último segmento del `codigo` (ej: el padre de `OE.1.2` es `OE.1`).
4. **Tratamiento de Títulos**: Las filas que no tienen metrado en el presupuesto base deben marcarse como `es_titulo: true`.
