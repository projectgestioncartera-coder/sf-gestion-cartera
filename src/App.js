// src/App.js
// Componente principal de la aplicación

import { initializeApp } from './services/appService.js'
import { setupHeader } from './components/Header.js'
import { setupMain } from './components/Main.js'
import { setupFooter } from './components/Footer.js'

export class App {
  constructor() {
    this.config = {
      apiUrl: import.meta.env.VITE_API_URL || 'https://api.ejemplo.com',
      appName: 'SF Gestión de Cartera',
      version: '1.0.0'
    }
  }

  init() {
    // Inicializar servicios
    initializeApp(this.config)

    // Montar componentes
    this.mount()

    // Inicializar listeners
    this.setupEventListeners()

    console.log(`✅ ${this.config.appName} v${this.config.version} iniciada`)
  }

  mount() {
    setupHeader()
    setupMain()
    setupFooter()
  }

  setupEventListeners() {
    // Event listeners globales
    document.addEventListener('error', (e) => {
      console.error('Error:', e.error)
    })
  }
}
