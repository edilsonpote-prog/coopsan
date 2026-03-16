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

  // --- 2. GENERADOR DE FOOTER DINÁMICO (ELIMINADO) ---
  // Se eliminó esta sección para evitar duplicados con el HTML.

  // --- 3. CONTROL DE AUDIO DEL VIDEO DE FONDO ---
  const video = document.getElementById('videoFondo');
  const btnAudio = document.getElementById('audioToggle');

  if (video && btnAudio) {
    btnAudio.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        btnAudio.innerHTML = "🔊"; // Cambia icono a encendido
        btnAudio.classList.add("active"); // Activa el brillo naranja de tu CSS
      } else {
        video.muted = true;
        btnAudio.innerHTML = "🔇"; // Cambia icono a silenciado
        btnAudio.classList.remove("active");
      }
    });
  }
});
