# RESUMEN DE CAMBIOS - Autenticación y Persistencia

## 🎯 Objetivo Completado

Agregar usuarios por especialidad con sesión persistente y guardado de cambios en base de datos.

## 📝 Cambios Realizados

### 1. **Backend (server/index.js)**

**Nuevas Dependencias:**
- `@supabase/supabase-js`: Cliente Supabase
- `bcryptjs`: Verificación de contraseñas

**Nuevos Endpoints:**

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/auth/login` | POST | Autentica usuario con username/password |
| `/auth/usuarios` | GET | Lista usuarios disponibles |
| `/metrados` | POST | Guarda lote de metrados |
| `/metrados/usuario/:id` | GET | Carga metrados del usuario |
| `/metrados/:id` | DELETE | Elimina metrado |
| `/metrados/proyecto/:p/especialidad/:e` | GET | Filtra por proyecto y especialidad |

### 2. **Frontend - Servicios**

#### `src/services/authService.ts` (NUEVO)
Funciones de autenticación:
- `login()`: Autentica con credenciales
- `getAvailableUsers()`: Lista usuarios
- `saveSessionToLocalStorage()`: Persiste sesión
- `getSessionFromLocalStorage()`: Recupera sesión
- `clearSessionFromLocalStorage()`: Limpia sesión
- `isSessionValid()`: Valida sesión activa

#### `src/services/metradosService.ts` (NUEVO)
Funciones de sincronización:
- `saveMetradosToDatabase()`: Guarda metrados
- `loadMetradosByUser()`: Carga historial usuario
- `loadMetradosByProjectAndSpecialty()`: Filtra por criterios
- `deleteMetradoFromDatabase()`: Elimina metrado

### 3. **Frontend - Store (Zustand)**

#### `src/store/useMetradosStore.ts` (ACTUALIZADO)

**Nuevos campos:**
```typescript
currentUser: User | null           // Usuario autenticado
isSyncing: boolean                 // Estado de sincronización
lastSyncTime: string | null        // Timestamp última sincronización
```

**Nuevas acciones:**
```typescript
setCurrentUser()          // Establece usuario
setMetrados()             // Reemplaza todos metrados
setSyncing()              // Actualiza estado sync
updateLastSyncTime()      // Actualiza timestamp
```

### 4. **Frontend - App.tsx (TOTALIZADO)**

**Cambios principales:**

1. **Importaciones nuevas:**
   - Servicios de autenticación y metrados
   - Ícono `Save` de Lucide
   - Tipos de usuario de servicios

2. **Nueva lógica:**
   ```typescript
   // Auto-recuperación de sesión al cargar
   useEffect(() => {
     const savedUser = getSessionFromLocalStorage();
     if (savedUser) setCurrentUser(savedUser);
   }, []);

   // Nuevo manejador de login
   handleLogin()           // Autentica contra backend
   
   // Nuevo manejador logout
   handleLogout()          // Limpia sesión
   
   // Nuevo guardado con sincronización
   handleSaveMetrados()    // Persiste metrados en BD
   ```

3. **Nueva interfaz:**
   - Indicador de estado de sincronización
   - Botón "Guardar Metrados" con estado visual
   - Información de última sincronización
   - Tooltips mejorados

4. **Toast system mejorado:**
   - Tipos de notificación: success, error, info
   - Ícono visual según tipo
   - Colores diferenciados

## 🔄 Flujo de Usuario

### Login
```
Usuario escribe credenciales
    ↓
authService.login() → Backend POST /auth/login
    ↓
Backend valida bcryptjs
    ↓
Retorna { success, user }
    ↓
saveSessionToLocalStorage(user)
    ↓
setCurrentUser(user) en Store
    ↓
Carga metrados con loadUserMetrados()
```

### Guardado de Metrados
```
Usuario hace clic "Guardar Metrados"
    ↓
handleSaveMetrados() comprueba:
  - Usuario autenticado? ✓
  - Hay metrados? ✓
    ↓
setSyncing(true)
    ↓
saveMetradosToDatabase() → Backend POST /metrados
    ↓
Backend inserta en tabla metrados
    ↓
Backend retorna { success, saved }
    ↓
updateLastSyncTime()
    ↓
Toast notification con resultado
    ↓
setSyncing(false)
```

## 🗄️ Cambios en Base de Datos

No se requieren cambios en schema.sql - ya tiene:
- Tabla `usuarios` con especialidades
- Tabla `metrados` con `autor_usuario`
- Tabla `especialidades`

Usuarios iniciales verificables en `db/init_users.sql`:
- 8 especialidades pre-configuradas
- 2 jefes de área
- 1 residente
- Contraseñas con hash bcrypt

## 📊 Estado Persistente

### localStorage
```javascript
// Sesión
metrados_current_user      // Usuario autenticado (JSON)
metrados_session_time      // Timestamp sesión

// Metrados
inkaia-metrados-storage    // Estado Zustand (JSON)
  ├── context              // Frente, bloque, nivel, cuadrilla, proyecto
  ├── metrados[]           // Array de metrados
  ├── customPartidas[]     // Partidas personalizadas
  ├── currentUser          // Usuario autenticado
  ├── isSyncing            // Estado sincronización
  └── lastSyncTime         // Último sync exitoso
```

## 🔐 Seguridad

**Implementado:**
- Verificación bcryptjs de contraseñas
- localStorage para sesión (cliente)
- Usuario en cada petición al backend

**Recomendado para Producción:**
- JWT tokens con expiration
- Refresh tokens
- HTTPS obligatorio
- CORS restrictivo por dominio
- Rate limiting en endpoints
- Validación de permisos por especialidad

## ✅ Testing Manual

Usuarios disponibles para testing:

```
Especialidad Estructuras
  Usuario: especialidad_estructuras
  Contraseña: estructuras123

Residente General
  Usuario: residente
  Contraseña: residente123

Jefe de Área 1
  Usuario: jefe_area_1
  Contraseña: jefe1
```

## 📦 Archivos Modificados

```
✏️ MODIFICADOS:
  - server/index.js                    (+ 200 líneas)
  - server/package.json                (+ 1 dependencia)
  - src/App.tsx                        (refactor completo)
  - src/store/useMetradosStore.ts      (+ 10 campos/acciones)

✨ CREADOS:
  - src/services/authService.ts        (100 líneas)
  - src/services/metradosService.ts    (120 líneas)
  - AUTENTICACION_SISTEMA.md           (Documen este)
  - RESUMEN_CAMBIOS.md                 (Este archivo)
```

## 🚀 Próximos Pasos

1. **Instalar dependencias:**
   ```bash
   cd server && npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   VITE_API_BASE=http://localhost:3001
   ```

3. **Iniciar backend:**
   ```bash
   cd server && npm start
   ```

4. **Iniciar frontend:**
   ```bash
   npm run dev
   ```

5. **Probar login con credenciales de demo**

## 🐛 Errores Comunes y Soluciones

| Error | Causa | Solución |
|-------|-------|----------|
| "Error de conexión" | Backend no corre | `npm start` en servidor |
| "Usuario o contraseña inválida" | Credenciales incorrectas | Ver lista de usuarios |
| "CORS error" | Dominio no permitido | Verificar corsOptions |
| "Metrados no se guardan" | BD inaccesible | Verificar VITE_SUPABASE_URL |

## 📞 Soporte

Para preguntas sobre la implementación:
1. Revisar AUTENTICACION_SISTEMA.md
2. Verificar endpoint en server/index.js
3. Revisar logs de navegador (F12)
4. Revisar logs del servidor

