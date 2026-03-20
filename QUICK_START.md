# QUICK START - Comandos y Testing

## 🚀 Inicio Rápido

### 1. Instalación de Dependencias

```bash
# Backend
cd server
npm install @supabase/supabase-js bcryptjs

# Frontend (ya tiene las dependencias)
npm install
```

### 2. Configuración

#### .env (raíz del proyecto)
```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=eyJ...
VITE_API_BASE=http://localhost:3001
```

#### .env en carpeta server
```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=eyJ...
PORT=3001
```

### 3. Iniciar Servicios

```bash
# Terminal 1: Backend
cd server
npm start
# Output: "[INKAIA] Servidor Local Excel activo en puerto 3001"

# Terminal 2: Frontend
npm run dev
# Output: "Local: http://localhost:5173"
```

## 🧪 Testing Manual

### Test 1: Login Básico

```bash
# Abrir navegador en http://localhost:5173
# Ingresa:
# Usuario: residente
# Contraseña: residente123
# Resultado: Debería entrar al dashboard
```

### Test 2: Login por Especialidad

```bash
# Usuario: especialidad_estructuras
# Contraseña: estructuras123
# Resultado: Debería ver "Especialista" en header
```

### Test 3: Credenciales Inválidas

```bash
# Usuario: specialidad_estructuras (TYPO intencional)
# Contraseña: estructuras123
# Resultado: Debería ver error rojo "Usuario o contraseña inválida"
```

### Test 4: Agregar Metrado

```bash
# 1. Estando autenticado
# 2. Llenar formulario MetradosForm:
#    - Frente: A
#    - Bloque: 1
#    - Nivel: 1
#    - Partida: OE.2.1.1 (Excavación)
#    - Cantidad: 100
# 3. Clic "Guardar"
# Resultado: Metrado aparece en tabla con ✓
```

### Test 5: Sincronizar con BD

```bash
# 1. Agregar 2-3 metrados locales
# 2. Clic botón "Guardar Metrados" (verde)
# 3. Observar:
#    - Botón pasa a "Guardando..."
#    - Toast verde: "3 metrados guardados exitosamente"
#    - Timestamp actualizado
```

### Test 6: Verificar Persistencia

```bash
# 1. Con metrados guardados
# 2. Presionar F5 para recargar página
# Resultado: 
#    - Mantiene sesión (usuario sigue autenticado)
#    - Metrados siguen en tabla
```

## 🔍 Testing de API

### Usando cURL

```bash
# Test 1: Login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"residente","password":"residente123"}'

# Respuesta esperada:
# {"success":true,"user":{"id":"...","username":"residente",...}}

# Test 2: Listar usuarios
curl http://localhost:3001/auth/usuarios

# Respuesta:
# {"success":true,"usuarios":[{id,username,nombre,tipo,...}]}

# Test 3: Guardar metrado
curl -X POST http://localhost:3001/metrados \
  -H "Content-Type: application/json" \
  -d '{
    "metrados":[{
      "fecha":"2026-03-19",
      "codigo_partida":"OE.2.1.1",
      "descripcion_partida":"Excavación",
      "cantidad":100,
      "total":100,
      "unidad":"m³"
    }],
    "usuario_id":"uuid-aqui",
    "proyecto":"hospital",
    "especialidad":1
  }'

# Test 4: Cargar metrados
curl http://localhost:3001/metrados/usuario/uuid-aqui
```

### Usando Postman

1. Crear colección "Buscador Metrados"
2. Agregar requests:

```
POST /auth/login
  Body (JSON): {"username":"residente","password":"residente123"}

GET /auth/usuarios
  (No body)

POST /metrados
  Body (JSON): {metrados, usuario_id, proyecto, especialidad}

GET /metrados/usuario/{{user_id}}
  (No body)
```

## 🐛 Debugging

### Verificar Logs

```bash
# En browser (F12):
console.log(localStorage)  // Ver localStorage
console.log(JSON.parse(localStorage.getItem('metrados_current_user')))

# En servidor:
npm start  # Verá [AUTH], [METRADOS], errores
```

### Verificar Estado Zustand

```javascript
// En consola del navegador:
import { useMetradosStore } from './store/useMetradosStore'
const store = useMetradosStore.getState()
console.log(store.currentUser)
console.log(store.metrados)
console.log(store.isSyncing)
```

### Verificar Base de Datos

```sql
-- En Supabase SQL Editor:

-- Ver usuarios
SELECT id, username, nombre, tipo FROM usuarios;

-- Ver metrados de usuario
SELECT * FROM metrados WHERE autor_usuario = 'uuid-aqui';

-- Ver metrados por especialidad
SELECT COUNT(*) FROM metrados WHERE especialidad_id = 1;

-- Ver última sincronización
SELECT * FROM metrados ORDER BY creado_en DESC LIMIT 5;
```

## 🚨 Solución de Problemas

### Problema: "Error de conexión" en login

```bash
# Verificar:
1. Backend corre? 
   netstat -an | grep 3001  (Windows: netstat -ano | findstr :3001)
   
2. .env.local configurado?
   cat .env.local | grep VITE_API_BASE
   
3. Supabase accesible?
   curl -H "Authorization: Bearer $KEY" https://tu-proyecto.supabase.co/rest/v1/usuarios
```

### Problema: "Usuario o contraseña inválida"

```bash
# Verificar:
1. Usuarios en BD?
   select count(*) from usuarios;
   
2. Contraseña correcta? (Ver db/init_users.sql comentarios)
   residente → residente123
   especialidad_estructuras → estructuras123
   
3. Hash bcrypt guardado?
   select username, password_hash from usuarios limit 1;
```

### Problema: Metrados no se guardan

```bash
# Verificar:
1. Usuario autenticado?
   console.log(useMetradosStore.getState().currentUser)
   
2. Hay metrados?
   console.log(useMetradosStore.getState().metrados.length)
   
3. Red está activa?
   Network tab en DevTools (F12)
   
4. BD Supabase accesible?
   Supabase dashboard → Health
```

## 📊 Queries Útiles SQL

### Estadísticas

```sql
-- Total de metrados por usuario
SELECT u.nombre, COUNT(m.id) as total
FROM metrados m
JOIN usuarios u ON m.autor_usuario = u.id
GROUP BY u.id, u.nombre
ORDER BY total DESC;

-- Metrados por especialidad
SELECT e.nombre, COUNT(m.id) as total, SUM(m.total) as suma
FROM metrados m
JOIN especialidades e ON m.especialidad_id = e.id
GROUP BY e.id, e.nombre
ORDER BY total DESC;

-- Últimas sincronizaciones
SELECT m.creado_en, u.nombre, COUNT(*) as registros
FROM metrados m
JOIN usuarios u ON m.autor_usuario = u.id
WHERE m.creado_en > now() - interval '24 hours'
GROUP BY DATE(m.creado_en), u.nombre
ORDER BY m.creado_en DESC;

-- Auditoría de cambios
SELECT 
  m.creado_en, 
  u.nombre, 
  m.codigo_partida, 
  m.cantidad, 
  m.total
FROM metrados m
JOIN usuarios u ON m.autor_usuario = u.id
WHERE u.tipo = 'especialidad'
ORDER BY m.creado_en DESC
LIMIT 50;
```

### Mantenimiento

```sql
-- Backup de metrados
SELECT * FROM metrados 
WHERE creado_en > now() - interval '7 days'
ORDER BY creado_en DESC;

-- Eliminar metrados de prueba
DELETE FROM metrados 
WHERE autor_usuario = 'uuid-test'
AND proyecto_id = 2;

-- Resetear especialidad
UPDATE usuarios SET especialidad_id = 1 
WHERE tipo = 'especialidad';
```

## 🔧 Comandos Útiles

```bash
# Generar nuevo hash bcrypt
node -e "const b=require('bcryptjs'); console.log(b.hashSync('micontraseña', 10))"

# Ver variables de entorno
echo $VITE_API_BASE  (Linux/Mac)
echo %VITE_API_BASE%  (Windows)

# Reeiniciar servidor
npm start

# Limpiar node_modules
rm -rf node_modules && npm install

# Ver puerto en uso
lsof -i :3001  (Mac/Linux)
netstat -ano | findstr :3001  (Windows)

# Matar proceso en puerto
kill -9 $(lsof -t -i:3001)  (Mac/Linux)
taskkill /IM node.exe /F  (Windows)
```

## 📋 Checklist Pre-Deploy

- [ ] Backend dependencies instaladas (npm install)
- [ ] Variables de entorno configuradas (.env)
- [ ] BD Supabase accesible (test SQL)
- [ ] Usuarios iniciales en BD
- [ ] Login funciona con usuario demo
- [ ] Agregar metrados funciona
- [ ] Sincronización a BD funciona
- [ ] Reload mantiene sesión
- [ ] Logout funciona
- [ ] Toast notifications muestran correctamente
- [ ] No hay console.errors
- [ ] Responsive en mobile

## 🎯 Validación Final

```bash
# Script de validación
#!/bin/bash

echo "🔍 Validando Sistema..."

echo "✓ Backend en puerto 3001?"
curl -s http://localhost:3001/ | grep "✅" && echo "  OK" || echo "  ERROR"

echo "✓ Frontend en puerto 5173?"
curl -s http://localhost:5173/ | grep "DOCTYPE" && echo "  OK" || echo "  ERROR"

echo "✓ Login disponible?"
curl -s http://localhost:3001/auth/usuarios | grep "usuarios" && echo "  OK" || echo "  ERROR"

echo "✓ BD Supabase conectada?"
curl -H "Authorization: Bearer $VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY" \
  https://tu-proyecto.supabase.co/rest/v1/usuarios?limit=1 \
  | grep "id" && echo "  OK" || echo "  ERROR"

echo "✅ Validación completa"
```

