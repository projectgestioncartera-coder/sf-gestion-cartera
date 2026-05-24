# DEPLOYMENT.md

## 🚢 Guía de Despliegue - SF Gestión de Cartera

### 🚀 Opción 1: Deployar en Vercel (RECOMENDADO)

**Tiempo**: 2-3 minutos

1. **Accede a Vercel**
   - Ve a https://vercel.com
   - Inicia sesión con tu cuenta GitHub

2. **Importa el repositorio**
   - Click en "Add New" → "Project"
   - Busca el repositorio `sf-gestion-cartera`
   - Click en "Import"

3. **Configura el proyecto**
   - Framework: Vite (se detecta automáticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: (opcional)

4. **Deploy**
   - Click en "Deploy"
   - Espera a que compile (1-2 min)
   - ¡Listo! Tu sitio estará en vivo

**URL Final**: `https://sf-gestion-cartera.vercel.app`

### 🚢 Opción 2: Deployar en GitHub Pages

**Tiempo**: 5-10 minutos

1. **Ve a Settings del repositorio**
   - https://github.com/projectgestioncartera-coder/sf-gestion-cartera/settings

2. **Habilita GitHub Pages**
   - En el menú izquierdo: "Pages"
   - Source: "GitHub Actions"

3. **El workflow se ejecutará automáticamente**
   - Espera a que termine (2-5 min)
   - Tu sitio estará en: `https://projectgestioncartera-coder.github.io/sf-gestion-cartera`

### 🚢 Opción 3: Deployar en tu propio servidor

**Compilar localmente**:
```bash
cd sf-gestion-cartera
npm install
npm run build
```

**Subir carpeta `dist/`**:
- Por FTP, SSH o tu plataforma de hosting
- Configurar web server (Nginx, Apache)
- Apuntar raiz a la carpeta `dist/`

---

## ✅ Verificación Posterior al Deploy

Después de deployar, verifica que:

- [ ] La página carga correctamente
- [ ] El modo oscuro/claro funciona
- [ ] El formulario de contacto responde
- [ ] Los links de navegación funcionan
- [ ] La página es responsiva en móvil
- [ ] No hay errores en la consola (F12)

## 🔠 Actualizaciones Automáticas

Cada vez que hagas `git push` a `main`:
1. GitHub Actions compila el proyecto
2. Vercel/GitHub Pages despliega automáticamente
3. Tu sitio se actualiza en 1-2 minutos

---

**Éxito! 🌟 Tu aplicación ya está lista para la web pública.**
