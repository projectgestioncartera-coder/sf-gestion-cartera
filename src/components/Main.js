// src/components/Main.js
// Componente principal del contenido

export function setupMain() {
  const main = document.querySelector('main') || createMain()
  return main
}

function createMain() {
  const main = document.createElement('main')
  main.className = 'main-content'
  main.innerHTML = `
    <section id="inicio" class="section section-hero">
      <div class="container">
        <h2>Bienvenido a SF Gestión de Cartera</h2>
        <p>Gestiona tu cartera de manera eficiente y profesional</p>
        <button class="btn btn-primary" id="ctaButton">Comenzar</button>
      </div>
    </section>

    <section id="cartera" class="section section-cartera">
      <div class="container">
        <h2>Tu Cartera</h2>
        <div id="carteraContainer" class="cartera-grid">
          <p class="loading">Cargando cartera...</p>
        </div>
      </div>
    </section>

    <section id="contacto" class="section section-contact">
      <div class="container">
        <h2>Contacto</h2>
        <form id="contactForm" class="contact-form">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  `
  document.body.insertBefore(main, document.querySelector('footer'))
  setupMainEvents(main)
  return main
}

function setupMainEvents(main) {
  const contactForm = main.querySelector('#contactForm')
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit)
  }

  const ctaButton = main.querySelector('#ctaButton')
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      document.querySelector('#cartera').scrollIntoView({ behavior: 'smooth' })
    })
  }
}

async function handleContactFormSubmit(e) {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  try {
    console.log('Formulario enviado:', data)
    alert('¡Mensaje enviado correctamente!')
    form.reset()
  } catch (error) {
    console.error('Error al enviar formulario:', error)
    alert('Error al enviar el mensaje. Intenta de nuevo.')
  }
}

export { setupMainEvents }
