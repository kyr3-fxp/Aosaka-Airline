/**
 * AOSAKA AIRLINES - FOOD VIEW (FoodView.js)
 */
import FoodModel from '../models/FoodModel.js';

class FoodView {
  render(menuItems = []) {
    const cart = FoodModel.cart;
    const cartTotal = FoodModel.getCartTotal();

    return `
      <div class="container" style="margin-top: 30px;">
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 700;">¡Comida en el aire! 🍽️</h1>
          <p style="color: var(--text-muted); font-size: 16px;">Disfruta de tu vuelo mientras te deleitas con nuestro exclusivo menú a bordo.</p>
        </div>

        <div class="food-grid">
          ${menuItems.map(item => `
            <div class="card-offer" style="display: flex; flex-direction: column;">
              <img class="card-img" src="${item.img}" alt="${item.nombre}" />
              <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
                <div class="card-title">${item.nombre}</div>
                <div class="card-subtitle">Preparación: ${item.prepTime}</div>
                <div class="card-price" style="margin-top: auto; padding-top: 10px;">$${item.precio.toLocaleString('es-CO')}</div>
                <button class="btn-primary btn-add-food" data-id="${item.id}" style="margin-top: 14px; width: 100%;">
                  ¡Agregar al Carrito! 🛒
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cart Sidebar Modal Overlay -->
      <div class="cart-sidebar" id="cart-sidebar">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 20px; font-weight: 700;">Tu Carrito 🛒</h3>
          <button id="close-cart-btn" style="background: none; border: none; font-size: 20px; cursor: pointer;">✕</button>
        </div>

        <div id="cart-items-list" style="flex-grow: 1; overflow-y: auto;">
          ${this.renderCartItems(cart)}
        </div>

        <div style="border-top: 1px solid var(--border-light); padding-top: 20px; margin-top: 20px;">
          <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; margin-bottom: 16px;">
            <span>Total:</span>
            <span style="color: var(--primary);">$${cartTotal.toLocaleString('es-CO')}</span>
          </div>
          <a href="#pago" class="btn-primary" style="width: 100%; text-align: center;">Proceder al Pago</a>
        </div>
      </div>
    `;
  }

  renderCartItems(cart) {
    if (!cart.length) {
      return `<p style="text-align: center; color: var(--text-muted); margin-top: 40px;">Tu carrito está vacío</p>`;
    }

    return cart.map(item => `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed var(--border-light);">
        <div>
          <div style="font-weight: 600; font-size: 14px;">${item.nombre}</div>
          <div style="font-size: 12px; color: var(--text-muted);">$${item.precio.toLocaleString('es-CO')} x ${item.cantidad}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700;">$${(item.precio * item.cantidad).toLocaleString('es-CO')}</span>
          <button class="btn-remove-food" data-id="${item.id}" style="background: none; border: none; color: var(--accent-red); cursor: pointer;">🗑️</button>
        </div>
      </div>
    `).join('');
  }
}

export default new FoodView();
