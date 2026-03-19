# 🏗️ SISTEMA DE CONTROL DE METRADOS V5.1 - MASTER CONTEXT 2 (CHECKLIST & DATA FLOW) 🏛️

Este documento es una extensión detallada y minuciosa del ADN técnico del software. Su objetivo es proporcionar un **Checklist Maestro** de todos los campos, lógicas y requisitos necesarios para la ejecución total del sistema, desde la entrada de datos en la web hasta la exportación final en Excel.

---

## 1. ✅ CHECKLIST FUNCIONAL DE CAMPOS (FRONTEND -> EXCEL)

A continuación se detalla cada campo que debe estar presente para que la forma del software se considere completa y funcional.

### 📍 A. Contexto de Ubicación (Obligatorios para Agrupación)
- [ ] **Fecha**: `string` (ISO/Local). Captura el momento del metrado.
- [ ] **Especialidad**: `string`. Se deriva del código de partida (OE.X).
- [ ] **Frente**: `string`. Macro-zona de obra (F1, F2).
- [ ] **Bloque**: `string`. Módulo o edificio (Bloque A, Sótano).
- [ ] **Nivel**: `string`. Piso o altura relativa (Piso 1, N+5.00).
- [ ] **Cuadrilla**: `string`. Grupo responsable de la ejecución.

### 🧩 B. Identificación de Tarea (WBS)
- [ ] **Código Partida**: `string` (PK). Link indisoluble al catálogo maestro.
- [ ] **Descripción Partida**: `string`. Nombre oficial de la tarea en el presupuesto.
- [ ] **Elemento**: `string`. Agrupador lógico (Ej: "Columnas Eje 1-1").
- [ ] **Detalle**: `string`. Minucia del elemento (Ej: "Acero de refuerzo").

### 📏 C. Motor de Dimensionamiento (Variables Numéricas)
- [ ] **Cantidad**: `number`. Veces que se repite el área o volumen.
- [ ] **Largo / Área**: `number`. Dimensión longitudinal o superficial (P).
- [ ] **Ancho / Empalme**: `number`. Dimensión transversal (Q). *Se anula en partidas de acero*.
- [ ] **Alto / Gancho**: `number`. Dimensión vertical o gancho de acero (R).
- [ ] **N° Veces**: `number`. Multiplicador multiplicativo final (T).

### ⚙️ D. Campos Calculados y Matriz de Acero
- [ ] **Diámetro (Ø)**: `string` (Dropdown). 1/4", 3/8", 1/2", 5/8", 3/4", 1".
- [ ] **Parcial**: `number`. Resultado de (Cant * L * A * H).
- [ ] **Total**: `number`. Resultado de (Parcial * Veces). *En acero aplica peso nominal*.

---

## 2. 🗺️ DATA FLOW MAP (MAPPING TÉCNICO)

| UI Field | Store Attribute | Data Type | Excel Column | Logic / Note |
| :--- | :--- | :--- | :--- | :--- |
| Nivel Jerarquía | `nivelJerarquia` | Number | **B** | Nivel de profundidad WBS. |
| Fecha | `fecha` | String | **C** | Capturado en `useMetradosForm`. |
| Especialidad | `especialidad` | String | **D** | Inferencia por código OE. |
| Frente | `frente` | String | **E** | Contexto global de sesión. |
| Bloque | `bloque` | String | **F** | Contexto global de sesión. |
| Nivel | `nivel` | String | **G** | Contexto global de sesión. |
| Cuadrilla | `cuadrilla` | String | **H** | Contexto global de sesión. |
| Grado 1-4 | `jerarquia` | Array | **I, J, K, L**| Roll-up jerárquico del código. |
| Partida | `codigo_partida` | String | **M** | Concatenado con descripción. |
| Descrip. | `elemento/detalle`| String | **N** | Concatenación "Elem / Det". |
| Cantidad | `cantidad` | Number | **O** | Default 1 si está vacío. |
| Largo | `longitud_area` | Number | **P** | Dimensión primaria. |
| Ancho | `ancho_empalme` | Number | **Q** | Desactivado para acero `kg`. |
| Alto | `altura_gancho` | Number | **R** | Usado para Gancho en acero. |
| Parcial | `parcial` | Number | **S** | Cálculo automático. |
| Veces | `nro_veces` | Number | **T** | Multiplicador de línea. |
| Diámetro | `diametro` | String | **U** | Solo partidas `kg`. |
| Total | `total` | Number | **V** | Persistencia final. |
| Total 2 | `partidaTotals` | Number | **W** | Suma acumulada de la partida. |
| Unidad | `unidad` | String | **X** | Validado contra catálogo. |
| Modif. | `modificacion` | String | **Y** | Estado de versión (SM, PN6). |

---

## 3. 🛠️ REQUISITOS DE EJECUCIÓN (STACK REQUIREMENTS)

Para que el software ejecute la forma completa hasta el Excel, se requiere:

1.  **Frontend (UI)**: React 18 activo en puerto 5173 (Vite).
2.  **Store (Zustand)**: Persistencia en `localStorage` activa para evitar pérdida de datos en el cliente.
3.  **Backend (Node/Express)**: Servidor local en puerto 3001 con librería `exceljs`.
4.  **Template Document**: Existencia física del archivo `METRADO_PLANTILLA_5.xlsx` en el directorio servidor.
5.  **Data Source**: Catálogo cargado en `src/data/mockDB_1.ts`.

---

## 🚦 LOGIC CHECKLIST (CRITICAL CONTROLS)
- [ ] **Failsafe Vacíos**: El motor de cálculo debe tratar `""` como `1.0` en multiplicaciones, excepto en `parcial = 0` si todos los campos están vacíos.
- [ ] **Factor Acero**: Al detectar `unidad === 'kg'`, el cálculo debe mutar de `(C*L*A*H)` a `(C * (LongR + AltoG) * PesoNominal)`.
- [ ] **WBS Padding**: El ordenamiento debe usar el algoritmo de padding con ceros para asegurar que `OE.1.2` venga antes de `OE.1.10`.
- [ ] **Cero Mouse**: El foco del cursor debe saltar automáticamente de `Cantidad -> Largo -> Ancho -> Alto -> Veces -> Enter` para maximizar velocidad.

> **Nota:** Este documento se alimentará incrementalmente con cada actualización del sistema para asegurar la trazabilidad absoluta del desarrollo.
