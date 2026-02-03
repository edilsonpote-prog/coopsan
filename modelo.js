document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.createElement("button");
  toggle.textContent = "☰";
  toggle.classList.add("menu-toggle");
  document.querySelector("header").prepend(toggle);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footer-container');

  const footerHTML = `
    <footer class="footer-petrolrios">
      <div class="footer-section footer-top">
        <div class="logo-and-slogan">
          <img src="logo.png" alt="PETROLRIOS Logo">
          <p>Juntos en cada kilómetro</p>
        </div>

        <div class="footer-links-container">
          <div class="links-group">
            <h3></h3>
            <ul>
              <li><a href="#">Misión</a></li>
              <li><a href="#">Visión</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>
          <div class="links-group">
            <h3></h3>
            <ul>
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Activaciones</a></li>
            </ul>
          </div>
        </div>

        <div class="contact-info">
          <h3>SERVICIO AL CLIENTE</h3>
          <div class="contact-details">
            <div class="contact-column">
              <p>Ubicación de la estaciones</p>
              <p>FAQ</p>
            </div>
            <div class="contact-column">
              <p>(02) 00000 info</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-section footer-middle">
        <p>av -----</p>
        <p>NARANJAL - Ecuador</p>
      </div>

      <div class="footer-section footer-bottom">
        <p class="copyright">Copyright © 2025 PETROLRIOS</p>
        <div class="social-icons">
          <a href="#" target="_blank"><img src="facebook-icon.png" alt="Facebook"></a>
          <a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram"></a>
          <a href="#" target="_blank"><img src="youtube-icon.png" alt="YouTube"></a>
        </div>
      </div>
    </footer>
  `;

  footerContainer.innerHTML = footerHTML;
});
