# Sistema de Autenticación y Persistencia de Metrados

## 📋 Descripción General

Se ha implementado un sistema completo de autenticación de usuarios por especialidad con persistencia de sesión y guardado de cambios en base de datos.

## ✨ Características Implementadas

### 1. **Autenticación de Usuarios**
- Login con username y contraseña
- Verificación contra base de datos PostgreSQL (Supabase)
- Soporte para tres tipos de usuarios:
  - **Especialidad**: Usuarios asignados a un área específica (Estructuras, Arquitectura, etc.)
  - **Jefe de Área**: Supervisores de especialidades
  - **Residente**: Usuarios generales

### 2. **Persistencia de Sesión**
- Sesión guardada en `localStorage`
- Recuperación automática al cargar la aplicación
- Logout limpia la sesión

### 3. **Guardado de Metrados**
- Endpoint POST `/metrados` para guardar lotes de metrados
- Asociación automática con usuario autenticado
- Timestamp de creación automático
- Sincronización en tiempo real

### 4. **Recuperación de Metrados**
- Endpoint GET `/metrados/usuario/:usuario_id` para cargar historial
- Filtrado por proyecto y especialidad
- Carga automática al login

## 🗂️ Estructura de Archivos Nuevos

### Backend (Node.js)
```
server/index.js
  - POST /auth/login          → Autentica usuario
  - GET /auth/usuarios        → Lista usuarios disponibles
  - POST /metrados            → Guarda metrados
  - GET /metrados/usuario/:id → Carga metrados del usuario
  - DELETE /metrados/:id      → Elimina un metrado
```

### Frontend (React)
```
src/services/
  ├── authService.ts         → Funciones de autenticación
  └── metradosService.ts     → Funciones de sincronización

src/store/
  └── useMetradosStore.ts    → Store Zustand actualizado con usuario
```

## 🔧 Configuración

### Variables de Entorno (`.env`)

Asegúrate de tener configuradas:

```bash
VITE_SUPABASE_URL=tu_url_supabase
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=tu_proyecto_key
VITE_API_BASE=http://localhost:3001
```

### Instalación de Dependencias Backend

```bash
cd server
npm install
npm install @supabase/supabase-js bcryptjs
```

## 🚀 Uso

### 1. Iniciar el Backend

```bash
cd server
npm start
# El servidor corre en puerto 3001
```

### 2. Iniciar el Frontend

```bash
npm run dev
# La aplicación se abre en http://localhost:5173
```

### 3. Login

Usuarios de prueba disponibles:
- **especialidad_estructuras** / estructuras123
- **especialidad_arquitectura** / arqui123
- **especialidad_sanitarias** / sanitaria123
- **especialidad_electricas** / electrica123
- **residente** / residente123
- **jefe_area_1** / jefe1

## 📊 Flujo de Datos

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │ Login
       ▼
┌──────────────────┐
│  authService.ts  │
│  POST /auth/   │
└──────┬───────────┘
       │ Token sesión
       ▼
┌──────────────────┐
│  Zustand Store   │  currentUser
│  (localStorage)  │
└──────┬───────────┘
       │
       ├─→ Cargar metrados
       │   GET /metrados/usuario
       │
       └─→ Guardar nuevos
           POST /metrados
```

## 🔐 Seguridad

- Contraseñas se verifican con bcryptjs contra hash en BD
- Sesiones guardadas solo en localStorage (cliente)
- IDs de usuario se envían con cada petición al backend
- Se recomienda agregar JWT tokens en producción

## 📝 Endpoints API

### POST `/auth/login`
```json
{
  "username": "especialidad_estructuras",
  "password": "estructuras123"
}
// Respuesta:
{
  "success": true,
  "user": {
    "id": "uuid...",
    "username": "especialidad_estructuras",
    "nombre": "Especialidad Estructuras",
    "tipo": "especialidad",
    "especialidad_id": 1
  }
}
```

### POST `/metrados`
```json
{
  "metrados": [
    {
      "fecha": "2026-03-19",
      "codigo_partida": "OE.2.1.1",
      "descripcion_partida": "Excavación",
      "cantidad": 100,
      "total": 100,
      "unidad": "m³"
    }
  ],
  "usuario_id": "uuid...",
  "proyecto": "hospital",
  "especialidad": 1
}
```

### GET `/metrados/usuario/:usuario_id`
Retorna todos los metrados guardados por usuario.

## 🔄 Estados y Sincronización

- **isSyncing**: Indica si está en progreso una sincronización
- **lastSyncTime**: Timestamp de última sincronización exitosa
- **currentUser**: Usuario autenticado actual
- Botón "Guardar Metrados" con estado visual

## 💡 Próximas Mejoras

- [ ] Agregar JWT tokens para mayor seguridad
- [ ] Implementar refresh tokens
- [ ] Agregar validación de permisos por especialidad
- [ ] Historial de cambios y auditoría
- [ ] Exportación de metrados guardados a Excel
- [ ] Compartir metrados entre usuarios
- [ ] Sistema de notificaciones en tiempo real

## 🐛 Troubleshooting

**Error: "Error de conexión"**
- Verifica que el backend esté corriendo en puerto 3001
- Comprueba VITE_API_BASE en `.env`

**Error: "Usuario o contraseña inválida"**
- Verifica las credenciales contra `db/init_users.sql`
- Comprueba que la BD tenga los usuarios inicializados

**Metrados no se guardan**
- Verifica que estés autenticado
- Comprueba que la BD Supabase esté accesible
- Revisa la consola del backend para errores

## 📚 Referencias

- [Supabase Docs](https://supabase.com/docs)
- [Zustand Persist](https://github.com/pmndrs/zustand#middleware)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Express.js](https://expressjs.com)
