/**
 * AOSAKA AIRLINES - FOOD CONTROLLER (FoodController.js)
 */
import FoodModel from '../models/FoodModel.js';
import FoodView from '../views/FoodView.js';
import NavbarView from '../views/NavbarView.js';
import ToastView from '../views/ToastView.js';

class FoodController {
  init() {
    const appContainer = document.getElementById('app');
    const menuItems = FoodModel.getFoodMenu();
    appContainer.innerHTML = FoodView.render(menuItems);

    this.bindEvents();
  }

  bindEvents() {
    const addButtons = document.querySelectorAll('.btn-add-food');
    addButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const addedItem = FoodModel.addToCart(id);
        if (addedItem) {
          ToastView.show(`¡${addedItem.nombre} agregado al carrito!`, '🛒');
          NavbarView.render('comida');
          this.updateCartSidebar();
        }
      });
    });

    const closeBtn = document.getElementById('close-cart-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('cart-sidebar')?.classList.remove('open');
      });
    }

    this.bindRemoveButtons();
  }

  bindRemoveButtons() {
    const removeButtons = document.querySelectorAll('.btn-remove-food');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        FoodModel.removeFromCart(id);
        NavbarView.render('comida');
        this.updateCartSidebar();
        ToastView.show('Producto eliminado del carrito', '🗑️');
      });
    });
  }

  updateCartSidebar() {
    const listContainer = document.getElementById('cart-items-list');
    if (listContainer) {
      listContainer.innerHTML = FoodView.renderCartItems(FoodModel.cart);
      this.bindRemoveButtons();
    }
  }
}

export default new FoodController();
