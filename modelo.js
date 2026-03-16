document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MENU MOBILE ---
  const header = document.querySelector("header");
  const nav = document.querySelector(".nav-links");
  
  if (header) {
    const toggle = document.createElement("button");
    toggle.innerHTML = "☰"; 
    toggle.classList.add("menu-toggle");
    header.prepend(toggle);

    toggle.addEventListener("click", () => {
      if (nav) nav.classList.toggle("active");
    });
  }

  // --- 2. GENERADOR DE FOOTER DINÁMICO ---
  const footerContainer = document.getElementById('footer-container');

  if (footerContainer) {
    const footerHTML = `
      <footer class="footer-coop">
        <div class="footer-section footer-top">
          <div class="logo-and-slogan">
            <img src="logo-coop.png" alt="COOP S.A.N Logo" onerror="this.style.display='none'">
            <p>Conectando vidas, kilómetros y destinos</p>
          </div>

          <div class="footer-links-container">
            <div class="links-group">
              <h3>INSTITUCIONAL</h3>
              <ul>
                <li><a href="#">Misión</a></li>
                <li><a href="#">Visión</a></li>
                <li><a href="#">Historia</a></li>
              </ul>
            </div>
            <div class="links-group">
              <h3>SERVICIOS</h3>
              <ul>
                <li><a href="#">Encomiendas</a></li>
                <li><a href="#">Rutas y Horarios</a></li>
                <li><a href="#">Atención al Cliente</a></li>
              </ul>
            </div>
          </div>

          <div class="contact-info">
            <h3>CONTACTO</h3>
            <div class="contact-details">
              <div class="contact-column">
                <p>📍 Terminal Terrestre Naranjal</p>
                <p>❓ FAQ</p>
              </div>
              <div class="contact-column">
                <p>📞 (04) 2XXX-XXX</p>
                <p>📧 info@coopsan.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-section footer-middle">
          <p>Panamericana Sur s/n</p>
          <p>NARANJAL - ECUADOR</p>
        </div>

        <div class="footer-section footer-bottom">
          <p class="copyright">Copyright © 2026 COOPERATIVA S.A.N</p>
          <div class="social-icons">
            <a href="#" target="_blank">FB</a>
            <a href="#" target="_blank">IG</a>
            <a href="#" target="_blank">YT</a>
          </div>
        </div>
      </footer>
    `;
    footerContainer.innerHTML = footerHTML;
  }

  // --- 3. CONTROL DE VIDEO Y AUDIO (NUEVO) ---
  const video = document.getElementById('videoFondo');
  const btnAudio = document.getElementById('audioToggle');

  if (video && btnAudio) {
    // El video inicia silenciado para que el navegador permita el Autoplay
    video.muted = true;

    btnAudio.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        btnAudio.innerHTML = "🔊"; // Icono cuando hay sonido
        btnAudio.style.backgroundColor = "rgba(255, 113, 30, 0.8)"; // Cambia a naranja al activar
      } else {
        video.muted = true;
        btnAudio.innerHTML = "🔇"; // Icono cuando está silenciado
        btnAudio.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Vuelve a negro
      }
    });
  }
});
