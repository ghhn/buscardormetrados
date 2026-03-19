# Guía de Despliegue en Hostinger (Actualizado: Con Partida Nueva)

He realizado el commit en tu Git local con el mensaje **"con partida nueva"**. Ahora, para subir estos cambios a tu Hosting (Hostinger) y que todo funcione correctamente, sigue estos pasos:

## 1. Generar los archivos finales
Primero, asegúrate de generar la carpeta `dist` actualizada en tu computadora:
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta: `npm run build`
3. Esto creará o actualizará la carpeta `dist/`.

## 2. Preparación en Hostinger (Solución a errores de carpeta)
Hostinger a veces interpreta mal las rutas de Windows. Sigue estos pasos en el **Administrador de Archivos**:

1. **Limpieza Previa:** Dentro de tu carpeta de destino (ej: `public_html`), borra cualquier archivo que empiece con `assets\` (ej: `assets\index-xxxx.js`). Hostinger crea archivos planos por error en lugar de carpetas.
2. **Crear Carpeta Assets:** Haz clic en "New Folder" y crea una carpeta llamada exactamente: `assets`.
3. **Subir Archivos:**
   - Sube el archivo `index.html` directamente a la raíz (ej: `public_html/`).
   - Entra en la carpeta `assets` que creaste y sube **todo el contenido** que está dentro de `dist/assets` de tu computadora.

## 3. Verificación de Estructura Final
Tu servidor debe verse así:
- 📁 **assets/** (Carpeta) -> Contiene archivos `.js` y `.css`.
- 📄 **index.html**
- 📄 **vite.svg**
- 📄 **.htaccess** (Asegúrate de que exista para manejar las rutas).

## 4. Backend de Exportación
No necesitas hacer nada con el backend. La aplicación ya está configurada para conectarse automáticamente a:
`https://inkaia-backend.onrender.com`

---
🚀 **¡Refresca el navegador y todo debería estar operativo con la nueva funcionalidad de partidas!**
