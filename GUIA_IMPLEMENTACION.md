# GUÍA DE IMPLEMENTACIÓN - Sistema de Usuarios y Persistencia

## 📐 Arquitectura del Sistema

```
CLIENTE (React/Vite)
├── App.tsx
│   ├── Login Screen
│   └── Main Dashboard
├── Services
│   ├── authService.ts
│   └── metradosService.ts
└── Store (Zustand)
    └── useMetradosStore
        ├── currentUser
        ├── metrados[]
        └── isSyncing

LOCAL STORAGE
├── metrados_current_user
├── metrados_session_time
└── inkaia-metrados-storage (Zustand)

BACKEND (Node.js/Express)
├── POST /auth/login
├── GET /auth/usuarios
├── POST /metrados
├── GET /metrados/usuario/:id
├── GET /metrados/proyecto/:p/especialidad/:e
└── DELETE /metrados/:id

DATABASE (PostgreSQL/Supabase)
├── usuarios (id, username, password_hash, especialidad_id)
├── metrados (id, autor_usuario, proyecto_id, especialidad_id, ...)
├── especialidades (id, nombre)
└── proyectos (id, nombre, tipo)
```

## 🔄 Casos de Uso

### Caso 1: Usuario Nuevo Abre Aplicación

```
1. App carga (useEffect)
   ↓
2. Busca en localStorage metrados_current_user
   ↓
3. Si existe y es válido:
   - setCurrentUser(user)
   - loadUserMetrados(user.id)
   - Muestra dashboard
   ↓
4. Si no existe:
   - Muestra pantalla de login
```

### Caso 2: Login con Credenciales

```
1. Usuario ingresa username + password
   ↓
2. handleLogin() llama authService.login()
   ↓
3. Petición POST /auth/login
   {username, password}
   ↓
4. Backend:
   - Busca usuario en BD
   - Compara password con bcryptjs
   - Retorna {success, user}
   ↓
5. Frontend:
   - saveSessionToLocalStorage(user)
   - setCurrentUser(user)
   - loadUserMetrados(user.id)
   ↓
6. Muestra dashboard con datos previos
```

### Caso 3: Usuario Agrega Metrados

```
1. Usuario llena formulario MetradosForm
   ↓
2. Hace clic "Guardar" (Metrado Local)
   ↓
3. handleGuardar():
   - Procesa registro
   - addMetrado(nuevoMetrado)
   - Actualiza Store (localStorage)
   ↓
4. Metrado aparece en tabla (sin BD aún)
   ↓
5. Usuario continúa agregando más metrados
```

### Caso 4: Sincronizar Metrados a Base de Datos

```
1. Usuario hace clic "Guardar Metrados"
   ↓
2. handleSaveMetrados():
   - Valida: ¿usuario autenticado?
   - Valida: ¿hay metrados?
   - setSyncing(true)
   ↓
3. saveMetradosToDatabase():
   - Filtra solo metrados reales
   - POST /metrados
   {
     metrados: [...],
     usuario_id: user.id,
     proyecto: 'hospital',
     especialidad: user.especialidad_id
   }
   ↓
4. Backend:
   - Valida usuario_id
   - Inserta en tabla metrados
   - Associations automáticas
   - Retorna {success, saved: N}
   ↓
5. Frontend:
   - updateLastSyncTime()
   - Mostrar toast exitoso
   - setSyncing(false)
   ↓
6. UI muestra última sincronización
```

### Caso 5: Cargar Metrados Previos

```
1. Usuario ya autenticado logout
   ↓
2. Cierra la app
   ↓
3. Abre la app nuevamente
   ↓
4. useEffect detecta sesión guardada
   ↓
5. loadUserMetrados(user.id):
   - GET /metrados/usuario/{id}
   ↓
6. Backend retorna todos los metrados del usuario
   ↓
7. Frontend:
   - setMetrados(metrados)
   - Reconstruye tabla con histórico
```

### Caso 6: Logout

```
1. Usuario hace clic icono LogOut
   ↓
2. handleLogout():
   - clearSessionFromLocalStorage()
   - setCurrentUser(null)
   - Limpia inputs
   ↓
3. App detecta currentUser === null
   ↓
4. Muestra pantalla de login nuevamente
   ↓
5. localStorage sigue con metrados (ej para análisis offline)
```

## 🔐 Flujo de Seguridad

```
CREDENCIALES EN LOGIN
├── Cliente ingresa: username + password
│
├── Petición HTTPS (recomendado)
│
├── Backend recibe:
│   ├── Busca usuario por username
│   ├── Obtiene password_hash de BD
│   ├── Usa bcryptjs.compare()
│   │   password ←→ hash (NO invertible)
│   └── Si coincide → Retorna usuario
│
├── Frontend:
│   ├── Recibe usuario
│   ├── localStorage guardar sesión
│   └── Todas las peticiones incluyen user.id
│
└── En BD todas acciones registran autor_usuario
```

## 📊 Modelo de Datos

### Tabla: usuarios
```sql
id (UUID)                   -- PK gen_random_uuid()
username (VARCHAR 100)      -- UNIQUE
nombre (VARCHAR 160)        -- Nombre completo
tipo (usuario_tipo)         -- 'especialidad' | 'jefe_area' | 'residente'
password_hash (TEXT)        -- bcryptjs hash
especialidad_id (INT FK)    -- Referencias a especialidades
creado_en (TIMESTAMP)       -- Automático
actualizado_en (TIMESTAMP)  -- Automático
```

### Tabla: metrados
```sql
id (UUID)                   -- PK gen_random_uuid()
fecha (DATE)                -- Día del metrado
frente (VARCHAR)            -- Ubicación
codigo_partida (VARCHAR)    -- Código OE.x.x.x
descripcion_partida (TEXT)  -- Descripción
cantidad (NUMERIC)          -- Cantidad
longitud_area (NUMERIC)     -- Longitud o área
total (NUMERIC)             -- Total calculado
autor_usuario (UUID FK)     -- ← Usuario que creó
proyecto_id (INT FK)        -- ← Hospital (1) o Contingencia (2)
especialidad_id (INT FK)    -- ← Tipos de obra
creado_en (TIMESTAMP)       -- Automático cuando se guarda
```

## 🔄 Estados del Store

### Estado de Usuario
```javascript
currentUser = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  username: "especialidad_estructuras",
  nombre: "Especialidad Estructuras",
  tipo: "especialidad",
  especialidad_id: 1
}
```

### Estado de Sincronización
```javascript
isSyncing = false           // true durante POST /metrados
lastSyncTime = "2026-03-19T14:30:45.123Z"
```

### Efectos de Estado
```javascript
// Si currentUser === null
→ Mostrar LoginScreen

// Si currentUser existe
→ Mostrar Dashboard
→ Habilitar GuardarMetradosButton

// Si isSyncing === true
→ Desabilitar botón
→ Mostrar spinner
→ Bloquear modificaciones

// Si lastSyncTime existe
→ Mostrar "Última sincronización..."
```

## 🧪 Escenarios de Testing

### ✅ Test 1: Login Exitoso
```gherkin
Dado que estoy en pantalla de login
Y ingreso usuario "especialidad_estructuras"
Y ingreso contraseña "estructuras123"
Cuando hago clic "Entrar"
Entonces debería ver el dashboard
Y aparecer nombre "Especialidad Estructuras"
Y cargar historial de metrados anteriores
```

### ✅ Test 2: Credenciales Inválidas
```gherkin
Dado que estoy en pantalla de login
Y ingreso usuario "especialidad_estructuras"
Y ingreso contraseña "incorrecta123"
Cuando hago clic "Entrar"
Entonces debería ver mensaje de error
Y permanecer en pantalla de login
```

### ✅ Test 3: Agregar Metrado Local
```gherkin
Dado que estoy autenticado
Y completo el formulario de metrados
Cuando hago clic "Guardar" (local)
Entonces debería aparecer en tabla
Y mostrarse contador de registros
Y persistir en localStorage
```

### ✅ Test 4: Sincronizar con Base de Datos
```gherkin
Dado que tengo 5 metrados en tabla
Y estoy autenticado
Cuando hago clic "Guardar Metrados" (BD)
Entonces debería mostrar "Guardando..."
Y después "5 metrados guardados exitosamente"
Y mostrarse timestamp de sincronización
```

### ✅ Test 5: Persistencia Al Cerrar
```gherkin
Dado que he guardado 10 metrados
Y sincronizado con BD
Cuando cierro la aplicación
Y la vuelvo a abrir
Entonces debería mantener sesión
Y mostrar los 10 metrados guardados
```

### ✅ Test 6: Logout
```gherkin
Dado que estoy autenticado
Cuando hago clic icono LogOut
Entonces debería limpiar sesión
Y volver a pantalla de login
Y metrados deberían estar en localStorage
```

## 📈 Métricas de Implementación

| Aspecto | Antes | Después |
|---------|-------|---------|
| Usuarios | 1 genérico | 11 por especialidad |
| Persistencia | Solo localStorage | localStorage + BD |
| Sesión | Manual | Automática |
| Sincronización | No existe | Automática al click |
| Histórico | Se pierde al reload | Se recupera al login |
| Auditoría | No | Por usuario y timestamp |

## 🎓 Ejemplos de Uso

### Agregar nuevo usuario (SQL)
```sql
-- Generar hash: node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('micontraseña', 10));"

INSERT INTO usuarios (username, nombre, tipo, password_hash, especialidad_id)
VALUES ('mi_usuario', 'Mi Nombre', 'especialidad', '$2a$10$...hash...', 1);
```

### Consultar metrados de usuario (SQL)
```sql
SELECT m.*, u.nombre FROM metrados m
JOIN usuarios u ON m.autor_usuario = u.id
WHERE m.autor_usuario = 'uuid_del_usuario'
ORDER BY m.creado_en DESC;
```

### Estadísticas por especialidad (SQL)
```sql
SELECT 
  e.nombre,
  COUNT(*) as total_metrados,
  SUM(m.total) as suma_total
FROM metrados m
JOIN especialidades e ON m.especialidad_id = e.id
GROUP BY e.nombre
ORDER BY total_metrados DESC;
```

## 🚨 Gestión de Errores

```typescript
// authService.ts
try {
  const response = await login(username, password);
  if (!response.success) {
    throw new Error(response.error);  // ← Usuario/contraseña inválida
  }
} catch (error) {
  setLoginError('Error de conexión');  // ← Red/servidor caído
}

// metradosService.ts
try {
  const response = await saveMetradosToDatabase(...);
  if (!response.success) {
    throw new Error(response.error);  // ← Error en BD
  }
} catch (error) {
  showToast('Error de conexión', 'error');
}
```

## 📋 Checklist de Validación

- [ ] Backend corre en puerto 3001
- [ ] Variables de entorno configuradas
- [ ] Base de datos con tablas creadas
- [ ] Usuarios iniciales insertados en db/init_users.sql
- [ ] bcryptjs instalado en server
- [ ] @supabase/supabase-js instalado en server
- [ ] servicios en src/services/ creados
- [ ] Store actualizado
- [ ] App.tsx refactorizado
- [ ] Login functional
- [ ] Sessionality funciona
- [ ] Guardado en BD funciona
- [ ] Carga desde BD funciona

