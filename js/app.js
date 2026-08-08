/**
 * AOSAKA AIRLINES - MAIN APPLICATION ENTRY POINT (app.js)
 * Architecture: Model-View-Controller (MVC) + 3D Vector Graphic Engine
 */

import RouterService from './services/RouterService.js';
import NavbarView from './views/NavbarView.js';

// Interaction Engines
import Vector3DEngine from './3d/Vector3DEngine.js';
import TiltEffectEngine from './3d/TiltEffect.js';
import ScrollAnimationEngine from './3d/ScrollAnimation.js';

// Controllers
import FlightController from './controllers/FlightController.js';
import CheckInController from './controllers/CheckInController.js';
import FoodController from './controllers/FoodController.js';
import AuthController from './controllers/AuthController.js';
import CheckoutController from './controllers/CheckoutController.js';

// Views
import HomeView from './views/HomeView.js';
import BundleView from './views/BundleView.js';
import PetView from './views/PetView.js';
import ToastView from './views/ToastView.js';

class Application {
  init() {
    this.registerRoutes();
    RouterService.init();
  }

  afterViewRender() {
    Vector3DEngine.init();
    TiltEffectEngine.init();
    ScrollAnimationEngine.initObserver();
  }

  registerRoutes() {
    // 1. Home Route
    RouterService.registerRoute('home', (params) => {
      NavbarView.render('home');
      const appContainer = document.getElementById('app');
      appContainer.innerHTML = HomeView.render();

      this.bindHomeSearch();
      this.bindHomeFAQ();
      this.afterViewRender();
    });

    // 2. Vuelos Route
    RouterService.registerRoute('vuelos', (params) => {
      NavbarView.render('vuelos');
      FlightController.init(params);
      this.afterViewRender();
    });

    // 3. Check-In Route
    RouterService.registerRoute('checkin', (params) => {
      NavbarView.render('checkin');
      CheckInController.init();
      this.afterViewRender();
    });

    // 4. Menú a Bordo Route
    RouterService.registerRoute('comida', (params) => {
      NavbarView.render('comida');
      FoodController.init();
      this.afterViewRender();
    });

    // 5. Hoteles & Autos Route
    RouterService.registerRoute('hoteles', (params) => {
      NavbarView.render('hoteles');
      const appContainer = document.getElementById('app');
      appContainer.innerHTML = BundleView.render();
      this.afterViewRender();
    });

    // 6. Mascotas Route
    RouterService.registerRoute('mascotas', (params) => {
      NavbarView.render('mascotas');
      const appContainer = document.getElementById('app');
      appContainer.innerHTML = PetView.render();
      this.afterViewRender();
    });

    // 7. Auth Login/Register Route
    RouterService.registerRoute('login', (params) => {
      NavbarView.render();
      AuthController.init();
      this.afterViewRender();
    });

    // 8. Pasarela de Pago Route
    RouterService.registerRoute('pago', (params) => {
      NavbarView.render();
      CheckoutController.init();
      this.afterViewRender();
    });
  }

  bindHomeSearch() {
    const form = document.getElementById('home-search-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const origen = document.getElementById('search-origen').value;
      const destino = document.getElementById('search-destino').value;

      ToastView.show(`Buscando vuelos de ${origen}...`, '🔍');
      setTimeout(() => {
        RouterService.navigateTo(`vuelos?origen=${encodeURIComponent(origen)}&destino=${encodeURIComponent(destino)}`);
      }, 600);
    });
  }

  bindHomeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
  app.init();
});
