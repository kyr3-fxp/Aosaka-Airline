/**
 * AOSAKA AIRLINES - AUTH VIEW (AuthView.js)
 */
class AuthView {
  render() {
    return `
      <div class="container">
        <div class="checkin-view-box" style="max-width: 440px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="assest/Group 54.jpg" alt="Aosaka Logo" style="height: 50px; margin-bottom: 12px;" />
            <h2 id="auth-title" style="font-size: 24px; font-weight: 700;">Iniciar Sesión</h2>
            <p style="color: var(--text-muted); font-size: 13px;">Accede a tus reservas y gestiona tus vuelos fácilmente.</p>
          </div>

          <form id="auth-form">
            <div id="nombre-group" style="margin-bottom: 16px; display: none;">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 6px;">Nombre Completo</label>
              <div class="input-group">
                <input type="text" id="auth-nombre" placeholder="Jose David Fuentes" />
              </div>
            </div>

            <div style="margin-bottom: 16px;">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 6px;">Correo Electrónico</label>
              <div class="input-group">
                <input type="email" id="auth-email" placeholder="pasajero@aosaka.com" required value="pasajero@aosaka.com" />
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 6px;">Contraseña</label>
              <div class="input-group">
                <input type="password" id="auth-password" placeholder="••••••••" required value="123456" />
              </div>
            </div>

            <button type="submit" id="auth-submit-btn" class="btn-primary" style="width: 100%; height: 46px;">Entrar</button>
          </form>

          <div style="text-align: center; margin-top: 20px; font-size: 13px;">
            <span id="auth-toggle-msg">¿No tienes cuenta aún?</span>
            <a href="#" id="auth-toggle-btn" style="color: var(--primary); font-weight: 600; margin-left: 4px;">Regístrate aquí</a>
          </div>
        </div>
      </div>
    `;
  }
}

export default new AuthView();
