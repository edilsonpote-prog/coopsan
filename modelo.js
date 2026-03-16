document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MENU MOBILE ---
  const header = document.querySelector("header");
  const nav = document.querySelector(".nav-links");
  
  if (header) {
    // Solo creamos el botón si no existe ya
    if (!document.querySelector(".menu-toggle")) {
      const toggle = document.createElement("button");
      toggle.innerHTML = "☰"; 
      toggle.classList.add("menu-toggle");
      header.prepend(toggle);

      toggle.addEventListener("click", () => {
        if (nav) nav.classList.toggle("active");
      });
    }
  }

  // --- 2. GENERADOR DE FOOTER DINÁMICO ---
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    // AQUÍ ESTABA EL ERROR: Ahora cerramos bien las comillas y añadimos el texto
    const footerHTML = `
      <footer style="background-color: #111; color: #fff; text-align: center; padding: 20px; border-top: 5px solid #ffcc00;">
        <p style="margin: 0;">Copyright &copy; 2026 COOPERATIVA S.A.N</p>
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
        btnAudio.innerHTML = "🔊";
        btnAudio.classList.add("active"); // Para que brille como en tu CSS
      } else {
        video.muted = true;
        btnAudio.innerHTML = "🔇";
        btnAudio.classList.remove("active");
      }
    });
  }
});
