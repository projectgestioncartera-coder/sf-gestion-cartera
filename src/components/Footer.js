// src/components/Footer.js
// Componente Footer

export function setupFooter() {
  const footer = document.querySelector('footer') || createFooter()
  return footer
}

function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <p>&copy; 2024 SF Gestión de Cartera. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacidad</a>
          <a href="#" class="footer-link">Términos</a>
          <a href="#" class="footer-link">Contacto</a>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(footer)
  return footer
}

export { createFooter }
