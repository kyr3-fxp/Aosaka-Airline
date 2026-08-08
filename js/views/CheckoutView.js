/**
 * AOSAKA AIRLINES - CHECKOUT VIEW (CheckoutView.js)
 */
import FlightModel from '../models/FlightModel.js';
import FoodModel from '../models/FoodModel.js';
import UserModel from '../models/UserModel.js';

class CheckoutView {
  render(appliedDiscount = 20.00) {
    const flight = FlightModel.getSelectedFlight() || {
      id: 'FL102', origen: 'Bogotá (BOG)', destino: 'Cartagena (CTG)', precio: 175570, clase: 'Turista'
    };
    const foodTotal = FoodModel.getCartTotal();
    const user = UserModel.getCurrentUser();

    const subtotal = flight.precio + foodTotal;
    const impuestos = Math.round(subtotal * 0.15);
    const total = Math.max(0, subtotal + impuestos - appliedDiscount);

    return `
      <div class="container" style="margin-top: 30px;">
        <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 24px;">Resumen y Pago del Vuelo</h1>

        <div class="checkout-grid">
          <!-- Passenger Form -->
          <div style="background: #FFF; padding: 30px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">Información del Pasajero</h2>
            <form id="checkout-form">
              <div style="margin-bottom: 16px;">
                <label style="font-size: 13px; font-weight: 600; display: block; margin-bottom: 6px;">Nombre Completo *</label>
                <div class="input-group">
                  <input type="text" id="pay-nombre" placeholder="Nombre completo" required value="${user ? user.nombre : ''}" />
                </div>
              </div>

              <div style="margin-bottom: 16px;">
                <label style="font-size: 13px; font-weight: 600; display: block; margin-bottom: 6px;">Correo Electrónico *</label>
                <div class="input-group">
                  <input type="email" id="pay-email" placeholder="correo@ejemplo.com" required value="${user ? user.email : ''}" />
                </div>
              </div>

              <div style="margin-bottom: 16px;">
                <label style="font-size: 13px; font-weight: 600; display: block; margin-bottom: 6px;">Número de Teléfono *</label>
                <div class="input-group">
                  <input type="tel" id="pay-telefono" placeholder="+57 300 123 4567" required value="+57 300 000 0000" />
                </div>
              </div>

              <div style="margin-bottom: 20px;">
                <label style="font-size: 13px; font-weight: 600; display: block; margin-bottom: 6px;">País de Residencia *</label>
                <div class="input-group">
                  <select id="pay-pais" required>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="España">España</option>
                  </select>
                </div>
              </div>

              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; margin-bottom: 24px;">
                <input type="checkbox" id="pay-terms" required checked /> Acepto los términos y condiciones de Aosaka Airlines.
              </label>

              <button type="submit" class="btn-primary" style="width: 100%; height: 50px; font-size: 16px;">💳 Pagar y Confirmar Reserva</button>
            </form>
          </div>

          <!-- Order Summary -->
          <div style="background: #FFF; padding: 30px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">Detalles de la Compra</h2>

            <div style="margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
              <div style="display: flex; justify-content: space-between; font-weight: 600; margin-bottom: 4px;">
                <span>✈️ Vuelo: ${flight.origen} ➔ ${flight.destino}</span>
                <span>$${flight.precio.toLocaleString('es-CO')}</span>
              </div>
              <div style="font-size: 12px; color: var(--text-muted);">Clase ${flight.clase} • 1 Pasajero</div>
            </div>

            ${FoodModel.cart.length ? `
              <div style="margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
                <div style="font-weight: 600; margin-bottom: 8px;">🍽️ Menú a Bordo Seleccionado:</div>
                ${FoodModel.cart.map(c => `
                  <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
                    <span>${c.nombre} (x${c.cantidad})</span>
                    <span>$${(c.precio * c.cantidad).toLocaleString('es-CO')}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <!-- Promo Code Input -->
            <div style="display: flex; gap: 8px; margin-bottom: 24px;">
              <div class="input-group" style="flex-grow: 1;">
                <input type="text" id="promo-input" placeholder="Cupón (ej: AOSAKA10)" style="text-transform: uppercase;" />
              </div>
              <button id="apply-promo-btn" class="btn-secondary" style="padding: 0 16px;">Aplicar</button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px; margin-top: auto;">
              <div style="display: flex; justify-content: space-between;"><span>Subtotal</span><span>$${subtotal.toLocaleString('es-CO')}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>Impuestos (IVA 15%)</span><span>$${impuestos.toLocaleString('es-CO')}</span></div>
              <div style="display: flex; justify-content: space-between; color: var(--accent-green);"><span>Descuento</span><span>-$${appliedDiscount.toLocaleString('es-CO')}</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: 700; border-top: 2px solid var(--border-light); padding-top: 12px; margin-top: 6px;">
                <span>Total a Pagar</span>
                <span style="color: var(--primary);">$${total.toLocaleString('es-CO')}</span>
              </div>
            </div>

            <div style="font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 20px;">
              🔒 Transacción 100% segura con encriptación SSL de 256 bits.
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default new CheckoutView();
