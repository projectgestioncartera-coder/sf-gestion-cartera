// src/services/appService.js
// Servicios principales de la aplicación

export function initializeApp(config) {
  console.log('Inicializando aplicación con config:', config)
  setupTheme()
  setupOnlineStatus()
}

function setupTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)
}

function setupOnlineStatus() {
  window.addEventListener('online', () => {
    console.log('✅ Conectado a internet')
  })

  window.addEventListener('offline', () => {
    console.log('⚠️ Sin conexión a internet')
  })
}

export { setupTheme, setupOnlineStatus }
