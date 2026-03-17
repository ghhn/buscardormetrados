# 🏛️ SISTEMA DE CONTROL DE METRADOS V5.0 - MASTER CONTEXT Y ARQUITECTURA PROFUNDA 🏛️

Este documento es el **ADN Técnico Absoluto** y el **Motor Cognitivo** del proyecto. Está redactado con el máximo nivel de detalle algorítmico y estructural para que cualquier Inteligencia Artificial o Arquitecto de Software en el futuro pueda comprender y replicar este ecosistema exacto, sus restricciones y sus mutaciones (hasta V5.0).

---

## 1. 📂 MACRO-ESTRUCTURA Y STACK TECNOLÓGICO
El sistema opera bajo un paradigma Híbrido Cliente-Servidor Desacoplado con Excel como Base de Datos Maestra.

1. **Aplicación Client-Side (SPA)**: Desarrollada en **React 18 + TypeScript + Vite + Tailwind CSS**.
   - Reside en `/src`. Orientada a UI Clínica de Alta Densidad (Financial/Engineering UX), diseñada bajo los principios del "Cero Mouse" y atajos por teclado (flow input).
2. **Servidor Local y Lógica Transaccional**: Scripts en **Python** (Pandas, OpenPyXL, xlwings, uvicorn/fastapi en un futuro).
   - Manipulan directamente la persistencia en `METRADOS_VIVOS.xlsx` (La Base de Datos Maestra) y `Presupuesto_Analitico.xlsx` (El Catálogo de Costos).
3. **Persistencia (La única fuente de la verdad)**: Microsoft Excel. La SPA React es puramente un visor y mutador volátil; todo el estado oficial reside en los `.xlsx`.

---

## 2. 🧬 ARQUITECTURA DEL ÁRBOL JERÁRQUICO (WBS - WORK BREAKDOWN STRUCTURE)

El corazón del proyecto no es lineal, es un **Árbol Abstracto Expandible (WBS)**. Comprender la relación de estos nodos es la base inquebrantable de este software.

Existen 3 tipos biológicos de "Filas" dentro de nuestro universo de datos:

### A. Títulos Estructurales (Los Nodos Padre)
- Corresponden a agrupaciones macro. Ej: `OE.1 OBRAS PROVISIONALES`, `OE.2 ESTRUCTURAS`.
- **Firma en Base de Datos**: `is_template = true` y `es_titulo = true`.
- **Propiedades**: NO tienen unidad, NO se metran directamente, y NO tienen precio. Su única función es organizar y sumarizar (Roll-up) todo lo que cuelga debajo de su rama `OE.X`.

### B. Partidas Master (Las Hojas Ejecutables)
- Corresponden a los ítems costeados con Análisis de Precios Unitarios (APU). Ej: `OE.2.3.9.1 Concreto en Vigas f'c=210 kg/cm2`.
- **Firma en Base de Datos**: `is_template = true` y `es_titulo = false`.
- **Propiedades**: SÍ tienen unidad (`m3`, `kg`, `m2`). Su "Sub-Total" oficial se calcula sumando todos y cada uno de los `Metrados Hijos` atados a su propio código.

### C. Metrados Activos (Los Registros Atómicos - Entradas Transaccionales)
- Son las líneas creadas por el usuario usando el Formulario Frontend. Representan la existencia física de obra.
- **Firma en Base de Datos**: `is_template = false` (Normalmente también `es_titulo = false`).
- **Propiedades**: No tienen un código WBS propio directo en la cadena principal; nacen con un ID UUID (Uniq ID) y un **`codigo_partida`** (Foreign Key). El `codigo_partida` enlaza indisolublemente al Metrado con su "Partida Master" Padre (Ej: Código de Enlace = `OE.2.3.9.1`).

---

## 3. 📐 EL MOTOR DE ORDENAMIENTO (EL ALGORITMO PADDING WBS)

El problema histórico del software de construcción es ordenar `OE.1.2` y `OE.1.10`. El sorting alfanumérico crudo de Javascript o Python colocaría `OE.1.10` ANTES de `OE.1.2` (porque 1 viene antes que 2 en texto puro).

### La Solución Core (Python `clave_jerarquia` y JS Equivalente):
Para asegurar un orden perfecto en el DataGrid y en el Master Excel, inyectamos un Algoritmo de Acolchado Cero (Zero-Padding string algorithm):

1. **Split**: Rompe la cadena por el separador `.` -> `["OE", "1", "10"]` vs `["OE", "1", "2"]`
2. **Type Casting & Zero-Fill**: Si el segmento es un número, se castea a Integer y se formatea con ceros a la izquierda (Ej. tamaño 3 o 4: `%04d`). Si no es numérico, se conserva.
3. **Join**: Vuelve a unir la cadena procesada.
   - `OE.1.2` muta invisiblemente a `OE.0001.0002`
   - `OE.1.10` muta invisiblemente a `OE.0001.0010`
4. **Resultado Lexicográfico**: Ahora `OE.0001.0002` se ordena lógicamente **antes** que `OE.0001.0010`.
5. **Alineación de Metrados Hijos**: A la cadena padded de la Partida Padre, el algoritmo le concatena un timestamp o UUID único al Metrado Hijo (Ej: `OE.0001.0002_1772718100`). Esto fuerza a todos los metrados que entraron ayer o mañana a apilarse secuencialmente DEBAJO de la Partición Master correspondiente. ¡Brillante y resistente a fallos!

---

## 4. 🧠 MODELO DE DATOS Y ANATOMÍA DEL REGISTRO (El Objeto `Metrado`)

Las 5 dimensiones de información inmutables de CADA "Registro Atómico" que entra a la BD:

### Dimensión 1: Metadatos y Foreign Keys
- `id` (string / int autoincremental): Identificador único global inmutable de la fila.
- `fecha` (ISO Date temporal): Cuándo se midió.
- `codigo_partida` (PK Padre): Esencial. Así la fila sabe a dónde sumar (Roll-up).

### Dimensión 2: Topología y Orientación 3D en Obra
- `frente` (string, ej. 'F1', 'F2', 'Azotea'): Macrozona.
- `bloque` (string, ej. 'I', 'V'): Edificación específica.
- `nivel` (string, ej. 'ZZ' zapatas, 'N1' primer nivel, 'N2').

### Dimensión 3: La Arquitectura de Descripción (Doble Nivel)
Se dividió el antiguo `descripcion_especifica` para simular Atomicidad DB sin sacrificar UX:
- **Nivel Superior (`elemento`)**: Categoría agrupador (Ej: "Vigas Eje A-A"). *En Frontend es Sticky State (no se borra post-submit)*.
- **Nivel Inferior (`detalle`)**: Minucia (Ej: "Acero Long. 5/8").

> **Magia de Render UI (Elemento Virtual):**
> En React (`MetradosTable`), la inyección de la fila `is_elemento_virtual` se hace interceptando el iterador. Si el elemento "Vigas Eje A-A" aparece por 8 filas seguidas, React NO DIBUJA la palabra 8 veces. React inyecta 1 sola fila gris en negrita titulada "Vigas Eje A-A" y luego exprime las 8 filas bajo ella identándolas con un icono `↳` y dibujando puramente el `detalle`.
> **CRÍTICO:** Esto es pura ilusión visual Frontend. En el `.xlsx` y en el Estado Redux/Contexto de React, **las 8 filas conservan "Vigas Eje A-A" en la columna Elemento para siempre**. Esto impide corrupción de base de datos SQL o de queries futuras.

### Dimensión 4 y 5: La Ecuación Polimórfica (Lógica Inkaia)

El Motor Matemático tiene bifurcación estricta de 2 caminos, detectada por `if (unidad === 'kg')`:

**Camino Volumétrico Estándar (Las 4 Dimensiones físicas)**:
- Usa `Cantidad`, `Largo` (Longitud), `Ancho`, `Alto` y `Veces`.
- Un vacío `""` o Null dentro del grid vale un neutro matemático (`1`), no cero, evitando que `Parcial = 0` accidentalmente:
  `Parcial = (Cantidad||1) * (Largo||1) * (Ancho||1) * (Alto||1)`
  `Total = Parcial * Veces`
- El DOM renderiza 5 columnas exactas (`CANTIDAD | LARGO | ANCHO | ALTO | VECES`).

**Camino Siderúrgico Acero (`kg`)**:
- Aniquila, extirpa y desmonta (`Unmount`) la columna/propiedad `Ancho` de la existencia UI para devolverle preciado espacio horizontal a los números.
- Mapea las cabeceras semánticamente: `LONG(R)` (Longitud de tramo recto), `ALTO(G)` (Longitud de gancho doble/simple doblado).
- Gatilla y exige interactuar con la **Matriz Nominal** a través del dropdown dinámico `Diámetro (Φ)`:
  - 1/4" = 0.25 kg/m
  - 3/8" = 0.56 kg/m
  - 1/2" = 0.99 kg/m
  - 5/8" = 1.55 kg/m
  - 3/4" = 2.24 kg/m
  - 1"   = 3.97 kg/m
- Ecuación Siderúrgica: Acero se cobra multiplicando la "Cantidad" de varillas por la "Longitud Lineal" por el peso nominal de su grosor.
  `Parcial = ((LongR||0) + (AltoG||0)) * (Cantidad||1) * PESO_NOMINAL[diametro_seleccionado]`
  `Total = Parcial * Veces`

---

## 5. 🧮 EL ÁRBOL RODANTE (ROLL-UP ENGINE) EN EL FRONTEND
Para ver resúmenes macro en el Web Application Client, usamos dos diccionarios hashmap ultrarrápidos, recalculados on-the-fly usando `reduce` (O(N)):

1. **`partidaTotals`**: Suma acumulada atómica. Toma todos los "Registros atómicos" (`is_template:false`) y los apila basándose en el string clave de su `codigo_partida`. Map result = `{ "OE.2.3.9.1": 450.50, "OE.4.1": 15.00 }`.
2. **`titleTotals`**: Roll-Up de Árbol Puro (Aritmética Fractal). Como un Título (`OE.2`) no tiene filas directas asociadas a él (sus filas están asociadas a sus nietos `OE.2.3.X`), el motor barre todas las claves de las partidas calculadas en `partidaTotals`. Si el código WBS de la partida arranca con el código del Sub-título (`String.startsWith()`), su valor numérico se suma al saco del sub-título.
   - Así, el título "ESTRUCTURAS" absorbe recursivamente todos los fierros, concretos y encofrados que anidan debajo de él, arrojando el Cómputo Cima.

---

## 6. 🔮 EL PLAN V5.0 - DIRECTIVAS ARQUITECTÓNICAS FINALES PARA ANTIGRAVITY Y EL EQUIPO DE DESARROLLO

Cualquier esfuerzo de desarrollo futuro debe perseguir estas 4 macro-metas V5.0:

### EJE 1: RECONSTRUCCIÓN DEL DATA GRID (DESKTOP)
- **Eliminación del Input Panel y Modal Binding:** Destruiremos el formulario izquierdo "MetradosForm". La aplicación web muta a **Ancho Completo** (100% viewport).
- Inyectaríamos un Macro-Componente de Data Grid avanzado (Ej: **AG Grid** / **Handsontable**).
- El usuario dará "Doble click" directo a cualquier celda de la tabla (`CANTIDAD`, `LARGO`, etc.) editando variables **Inline**, exactamente como Excel web mode.
- Context Bar en la cima: Barra horizontal Header Fija anclada arriba seleccionando el estado actual (`Frente`, `Bloque`, `Nivel`, `Partida-Lookup`). Cada entrada ("Enter") nueva en el Grid clonará y heredará estos valores contexto ciegamente (eliminando selects masivos repetitivos).
- Cero ratón: Terminas `Veces` -> Tecla Enter -> Grid inyecta la Siguiente Fila Automática debajo, y mueve cursor a campo `Elemento`.

### EJE 2: ARQUITECTURA PWA MÓVIL (SOBREVIVIR AL MODO OFFLINE EN SÓTANOS)
- Para la versión del constructor recorriendo placa de zapatas (Sótano -5 sin WiFi), el Data Grid tabular desaparece, estalla en Responsive a **TARJETAS DE INGRESO (Cards View)**.
- Step-Flow: Pantalla 1 exige Contexto (Ubicación). Pantalla 2 dibuja un Num-Pad táctil GIGANTE con botones limpios en el viewport de un móvil (para uso forzoso y sucio de un solo pulgar).
- **IndexedDB**: Todos los JSON de metrados no viajan por axios a ningún server Python hasta validar internet. El Servidor se apaga, y el ServiceWorker de Vite lanza `Background Sync`. Cuando el ingeniero suba al primer piso y tenga señal de radio, IndexDB vomita el Payload Atómico Offline a la Nube/Python Backend en una transacción masiva (Bulk POST).

### EJE 3: EL MOTOR DE EXPORTACIÓN PÚRPURA Y LA MATRIZ DE ACERO (BACKEND)
- El Cliente final JAMÁS lee el JSON o el Data Grid web: Piden y pagan por Cintas Excel Audibles (`.xlsx`).
- El script Python (`Ejecutar_Exportar`) evolucionará usando librerías formales OpenPyXL:
  1. Debe lograr colorear los 4 niveles de rama base: [ Nivel Títulos Grandes (Rojo), Nivel Subtítulos (Azul), Nivel Partida Costo (Negro Grueso), Nivel Metrado Atómico (Celdas Finas Blancas) ].
  2. **El Pila de Acero Cruzada**: Cuando el motor Python toque imprimir un metrado atómico cuya unidad es `kg` (Fierro Acero), *apagará* las celdas estándar de L / A / H. A la derecha de la planilla debe abrir nuevas columnas estáticas tituladas `1/4" | 3/8" | ... | 1"`, y colocar los kilos exactos bajo su respectiva columna matriz de calibración, sumando las bases finales por grosor de acero (vital para requerimientos logísticos de Almacén de Hierro).
  3. **Trazabilidad Soft-Delete**: En BD nadie borra. El script solo activará columna `.deleted = TRUE`.

> **"Keep the Data Atomic. Trust Contextual Rollups. Protect Horizontal Real Estate. Build Clinical Finances UI."**
> -- Mandato General de Ingeniería (Antigravity V5)
---

## 7. 🏷️ ESTRUCTURA DE DATOS MAESTRA (PARA MIGRACIÓN)

Para cualquier actualización masiva de datos (Limpieza de Excel -> JSON), se debe seguir estrictamente la anatomía definida en [ESTRUCTURA_DATOS_MAESTRA.md](./ESTRUCTURA_DATOS_MAESTRA.md).

### Resumen de Requisitos para Importación:
- **Códigos WBS (OE)**: Deben ser únicos y consistentes.
- **Unidades**: Normalizadas (kg, m3, m2, und).
- **Relaciones**: Todo metrado debe apuntar a un `codigo_partida` existente en el catálogo.
- **Detección de Acero**: Basada en `unidad === 'kg'` para activar cálculos de pesos nominales.

> **Nota:** La base de datos es orientada a objetos JSON planos para maximizar la velocidad de búsqueda en el frontend mediante el uso de `Hashmaps` (O(1)).
