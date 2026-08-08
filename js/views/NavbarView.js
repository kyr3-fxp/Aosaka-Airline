/**
 * AOSAKA AIRLINES - NAVBAR VIEW (NavbarView.js)
 */
import UserModel from '../models/UserModel.js';
import FoodModel from '../models/FoodModel.js';

class NavbarView {
  render(currentRoute = 'home') {
    const user = UserModel.getCurrentUser();
    const cartCount = FoodModel.getCartCount();

    const headerHTML = `
      <header class="header-navbar">
        <div class="container header-container">
          <div class="logo-brand">
            <a href="#home"><img src="assest/Group 55.svg" alt="Aosaka Airlines Logo" /></a>
          </div>
          
          <button class="mobile-toggle-btn" id="mobile-toggle" aria-label="Abrir Menú">☰</button>

          <nav>
            <ul class="nav-links" id="nav-links">
              <li><a href="#home" class="nav-link ${currentRoute === 'home' ? 'active' : ''}">Inicio</a></li>
              <li><a href="#vuelos" class="nav-link ${currentRoute === 'vuelos' ? 'active' : ''}">Vuelos</a></li>
              <li><a href="#checkin" class="nav-link ${currentRoute === 'checkin' ? 'active' : ''}">Check-In</a></li>
              <li><a href="#comida" class="nav-link ${currentRoute === 'comida' ? 'active' : ''}">Menú a Bordo</a></li>
              <li><a href="#hoteles" class="nav-link ${currentRoute === 'hoteles' ? 'active' : ''}">Hoteles & Autos</a></li>
              <li><a href="#mascotas" class="nav-link ${currentRoute === 'mascotas' ? 'active' : ''}">Mascotas</a></li>
            </ul>
          </nav>

          <div class="nav-user-actions">
            <button class="cart-badge-btn" id="cart-toggle-btn" title="Ver pedido de comida">
              🛒 <span class="cart-badge-count">${cartCount}</span>
            </button>
            ${user ? `
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:13px; font-weight:600;">👋 ${user.nombre.split(' ')[0]}</span>
                <button class="btn-login" id="btn-logout">Salir</button>
              </div>
            ` : `
              <button class="btn-login" id="btn-open-login">
                <img src="assest/user 1.png" alt="user" style="width:18px; height:18px;" /> Iniciar sesión
              </button>
            `}
          </div>
        </div>
      </header>
    `;

    const container = document.getElementById('navbar-mount');
    if (container) {
      container.innerHTML = headerHTML;
      this.bindEvents();
    }
  }

  bindEvents() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        UserModel.logout();
        window.location.hash = '#home';
        window.location.reload();
      });
    }

    const loginBtn = document.getElementById('btn-open-login');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        window.location.hash = '#login';
      });
    }

    const cartBtn = document.getElementById('cart-toggle-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('cart-sidebar');
        if (sidebar) sidebar.classList.toggle('open');
      });
    }
  }
}

export default new NavbarView();
