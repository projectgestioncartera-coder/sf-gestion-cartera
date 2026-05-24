// src/components/Header.js
// Componente Header/Navegación

export function setupHeader() {
  const header = document.querySelector('header') || createHeader()
  setupHeaderEvents(header)
  return header
}

function createHeader() {
  const header = document.createElement('header')
  header.className = 'header'
  header.innerHTML = `
    <div class="header-container">
      <div class="header-logo">
        <h1>SF Gestión de Cartera</h1>
      </div>
      <nav class="header-nav">
        <ul>
          <li><a href="#inicio" class="nav-link">Inicio</a></li>
          <li><a href="#cartera" class="nav-link">Cartera</a></li>
          <li><a href="#contacto" class="nav-link">Contacto</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <button class="btn-theme-toggle" id="themeToggle" title="Cambiar tema">🌙</button>
      </div>
    </div>
  `
  document.body.insertBefore(header, document.body.firstChild)
  return header
}

function setupHeaderEvents(header) {
  const themeToggle = header.querySelector('#themeToggle')
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme)
  }

  const navLinks = header.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = link.getAttribute('href')
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  const newTheme = isDark ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  updateThemeButton()
}

function updateThemeButton() {
  const button = document.querySelector('#themeToggle')
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  if (button) {
    button.textContent = isDark ? '☀️' : '🌙'
  }
}

export { toggleTheme, updateThemeButton }
