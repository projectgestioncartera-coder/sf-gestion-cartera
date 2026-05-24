# 📋 SF Gestión de Cartera

Sistema profesional de gestión de carteras - Aplicación web moderna, responsiva y completamente funcional.

## 🚀 Características

- ✅ **Interfaz moderna y responsiva** - Funciona en todos los dispositivos
- ✅ **Modo oscuro** - Soporte para tema claro y oscuro
- ✅ **Rápido y optimizado** - Carga instantánea con Vite
- ✅ **Offline ready** - Funciona sin conexión
- ✅ **SEO optimizado** - Metaetiquetas completas
- ✅ **Accesible** - Cumple con estándares WCAG
- ✅ **CI/CD automático** - Deploy automático con GitHub Actions

## 📦 Instalación

### Requisitos
- Node.js 16+
- npm o pnpm

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/projectgestioncartera-coder/sf-gestion-cartera.git
cd sf-gestion-cartera
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

4. **Compilar para producción**
```bash
npm run build
```

5. **Ver preview de producción**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
sf-gestion-cartera/
├── index.html                 # HTML principal
├── package.json              # Dependencias del proyecto
├── vite.config.js            # Configuración de Vite
├── .env.example              # Variables de entorno ejemplo
├── .gitignore                # Archivos a ignorar en Git
├── README.md                 # Este archivo
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de GitHub Actions
├── src/
│   ├── main.js               # Punto de entrada
│   ├── App.js                # Componente principal
│   ├── components/
│   │   ├── Header.js         # Componente del encabezado
│   │   ├── Main.js           # Contenido principal
│   │   └── Footer.js         # Pie de página
│   ├── services/
│   │   ├── appService.js     # Servicios de la aplicación
│   │   └── apiService.js     # Cliente HTTP
│   └── styles/
│       └── main.css          # Estilos globales
├── public/                   # Archivos estáticos
├── dist/                     # Build compilado (generado)
└── node_modules/            # Dependencias (generado)
```

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

Personalizar según tus necesidades:

```env
VITE_API_URL=https://tu-api.com
VITE_DEV_MODE=false
VITE_EMAIL_API_KEY=tu_clave_api
VITE_APP_URL=https://tu-dominio.com
```

## 🚢 Despliegue

### En Vercel (Recomendado) ⭐

1. **Conectar repositorio**
   - Ir a https://vercel.com
   - Conectar tu repositorio GitHub
   - Vercel detectará automáticamente Vite

2. **Configurar variables de entorno**
   - En el panel de Vercel
   - Settings → Environment Variables
   - Agregar tus variables desde `.env`

3. **Deploy automático**
   - Cada push a `main` se deploya automáticamente
   - Los PRs generan previews automáticos

🔗 **URL del proyecto**: https://sf-gestion-cartera.vercel.app

### En GitHub Pages

1. **Configurar el repositorio**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/projectgestioncartera-coder/sf-gestion-cartera.git
git push -u origin main
```

2. **Habilitar GitHub Pages**
   - Settings → Pages
   - Source: GitHub Actions
   - El workflow se ejecutará automáticamente

### En tu propio servidor

1. **Compilar**
```bash
npm run build
```

2. **Subir carpeta `dist/`**
   - FTP, SSH o herramienta preferida
   - Configurar web server (Nginx, Apache)

3. **Ejemplo con Nginx**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    
    root /var/www/sf-gestion-cartera/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama feature (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

## 👥 Autores

- **SF** - Equipo de Desarrollo

## 📧 Soporte

Para reportar bugs o sugerencias, abre un [issue](https://github.com/projectgestioncartera-coder/sf-gestion-cartera/issues).

---

**Última actualización**: 2024
**Versión**: 1.0.0
