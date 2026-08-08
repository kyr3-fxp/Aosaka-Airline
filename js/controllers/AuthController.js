/**
 * AOSAKA AIRLINES - AUTH CONTROLLER (AuthController.js)
 */
import UserModel from '../models/UserModel.js';
import AuthView from '../views/AuthView.js';
import NavbarView from '../views/NavbarView.js';
import ToastView from '../views/ToastView.js';
import RouterService from '../services/RouterService.js';

class AuthController {
  constructor() {
    this.isRegisterMode = false;
  }

  init() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = AuthView.render();
    this.bindEvents();
  }

  bindEvents() {
    const form = document.getElementById('auth-form');
    const toggleBtn = document.getElementById('auth-toggle-btn');
    const title = document.getElementById('auth-title');
    const nombreGroup = document.getElementById('nombre-group');
    const submitBtn = document.getElementById('auth-submit-btn');
    const toggleMsg = document.getElementById('auth-toggle-msg');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.isRegisterMode = !this.isRegisterMode;

        if (this.isRegisterMode) {
          title.innerText = 'Registrarse en Aosaka';
          nombreGroup.style.display = 'block';
          submitBtn.innerText = 'Crear Cuenta';
          toggleMsg.innerText = '¿Ya tienes una cuenta?';
          toggleBtn.innerText = 'Inicia sesión aquí';
        } else {
          title.innerText = 'Iniciar Sesión';
          nombreGroup.style.display = 'none';
          submitBtn.innerText = 'Entrar';
          toggleMsg.innerText = '¿No tienes cuenta aún?';
          toggleBtn.innerText = 'Regístrate aquí';
        }
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value.trim();
        const pass = document.getElementById('auth-password').value.trim();

        if (this.isRegisterMode) {
          const nombre = document.getElementById('auth-nombre').value.trim();
          const result = UserModel.register(nombre, email, pass);
          if (result.success) {
            ToastView.show(`¡Cuenta creada con éxito! Bienvenido, ${nombre}`, '🎉');
            NavbarView.render();
            RouterService.navigateTo('home');
          } else {
            ToastView.show(result.message, '⚠️');
          }
        } else {
          const result = UserModel.login(email, pass);
          if (result.success) {
            ToastView.show(`¡Bienvenido de nuevo, ${result.user.nombre}!`, '✅');
            NavbarView.render();
            RouterService.navigateTo('home');
          } else {
            ToastView.show(result.message, '❌');
          }
        }
      });
    }
  }
}

export default new AuthController();
