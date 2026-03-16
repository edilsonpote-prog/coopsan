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
        <div class="footer-section footer-bottom">
          <p class="copyright">Copyright © 2026 COOPERATIVA S.A.N</p>
        </div>
      </footer>
    `;
    footerContainer.innerHTML = footerHTML;
  }

  // --- 3. CONTROL DE AUDIO DEL VIDEO DE FONDO ---
  const video = document.getElementById('videoFondo');
  const btnAudio = document.getElementById('audioToggle');

  if (video && btnAudio) {
    btnAudio.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        btnAudio.innerHTML = "🔊"; // Cambia icono a encendido
      } else {
        video.muted = true;
        btnAudio.innerHTML = "🔇"; // Cambia icono a silenciado
      }
    });
  }
});
