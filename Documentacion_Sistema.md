# Documentación Global: Ecosistema de Gestión de Metrados Belempampa

## 1. Visión General del Programa
Este programa representa una solución integral para la gestión de presupuestos y metrados en ingeniería civil. El objetivo es eliminar la entrada manual propensa a errores, centralizar el análisis de costos unitarios (APU) y proporcionar una interfaz de alta velocidad para el registro de mediciones en obra.

## 2. Evolución Arquitectónica
El sistema ha evolucionado a través de dos grandes etapas, pasando de un entorno puramente de escritorio a una plataforma web moderna:

### Etapa 1: Ecosistema Excel (Automatización)
- **V1-V4**: Herramientas basadas en Python (`win32com`) y VBA para automatizar la creación de libros Excel y la inserción de registros.
- **V5**: Implementación de un buscador booleano tokenizado (estilo Google) dentro de Excel mediante macros avanzadas, superando las limitaciones de búsqueda nativas de Office.

### Etapa 2: Plataforma Web (Actual)
- **V1-V2 (React)**: Migración a una Single Page App (SPA) para maximizar la velocidad de respuesta y mejorar la experiencia de usuario (Glassmorphism).
- **V3 (Jerarquía WBS)**: Implementación de un Data Grid jerárquico que permite visualizar las partidas dentro de su contexto estructural (WBS), emulando la comodidad de Excel pero con la potencia de una base de datos relacional.

## 3. Estructura del Proyecto (Entregables)

El programa se organiza en módulos especializados:

### 📁 0_DATA_BASE
Contiene los archivos maestros de Excel (`DATOS_LIMPIOS_PROCESAR.xlsx`, etc.) que sirven como la "Fuente de la Verdad" para el presupuesto y los análisis de costos.

### 📁 1_Buscador_APUS_Presupuestos
Herramientas iniciales enfocadas en la consulta rápida de precios unitarios e insumos.

### 📁 2_Insertador_de_metrados_autom
Scripts de Python diseñados para interactuar con la planilla de metrados de Excel, permitiendo la inserción automática de registros desde fuentes externas.

### 📁 3_web_buscador_de_metrados (Componente Principal)
La plataforma web actual desarrollada en React + Vite + TypeScript. Es el centro operativo donde el usuario registra metrados y visualiza la planilla dinámica.
- **Pipeline**: Utiliza `procesar_apus.py` para convertir datos de Excel en una base de datos TS (`mockDB.ts`) de alto rendimiento.

### 📁 4_excel_python
Utilidades y scripts de puente para la manipulación avanzada de archivos `.xlsx` y `.xlsm` mediante librerías como `pandas`, `openpyxl` y `win32com`.

## 4. Datos Estructurales y Lógica de Negocio
- **Jerarquía WBS (Work Breakdown Structure)**: El sistema descompone el código de partida (ej: `OE.2.3.1.01`) para identificar niveles superiores de forma automática.
- **Algoritmo de Búsqueda "Estilo Google"**: Implementa un motor de búsqueda **Booleano Tokenizado**. Divide la entrada del usuario en palabras (tokens) y busca la intersección total de estas en cualquier orden, garantizando precisión máxima en bases de datos de +10,000 registros.
- **Lógica de Vacíos (Failsafe)**: El motor de cálculo asume factores de `1` para dimensiones vacías (Alto/Ancho) para mantener la integridad de las fórmulas de metrado, evitando errores de "división por cero" o "totales nulos".
- **Modelo Relacional JSON (3D Data)**: A diferencia de una tabla plana de Excel (2D), el sistema maneja objetos anidados donde cada partida contiene su propio árbol de recursos, cálculos de parciales y metrados históricos.

## 5. Mantenimiento y Actualización
Para actualizar la base de datos maestra (`mockDB.ts`), el flujo es:
1.  Actualizar el archivo `DATOS_LIMPIOS_PROCESAR.xlsx` en la raíz.
2.  Ejecutar el script `python procesar_apus.py`.
3.  El script valida automáticamente la integridad de las jerarquías y limpia caracteres especiales antes de generar la base de datos para el frontend.

## 6. Roadmap y Próximos Pasos
- [ ] **Contexto Breadcrumbs**: Implementación de navegación superior para ver el camino jerárquico (Estructuras > Vigas > ...) durante el registro.
- [ ] **Sincronización Bidireccional**: Capacidad de guardar cambios desde la web directamente hacia archivos Excel locales (`.xlsm`) mediante WebSockets o scripts de puente.
- [ ] **Análisis de Rendimientos**: Gráficos comparativos entre el rendimiento previsto en el APU y el rendimiento real ejecutado en obra.

## 7. Tecnologías Clave
- **Backend-Data**: Python (Pandas, Re, JSON, win32com).
- **Frontend**: React 18, TypeScript, TailwindCSS V4 (Design Tokens).
- **Visualización**: Data Grid Jerárquico con renderizado condicional por tipo de fila (`es_titulo`).

---
*Documentación Actualizada - Marzo 2026*
