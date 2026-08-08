/**
 * AOSAKA AIRLINES - FOOD MODEL (FoodModel.js)
 */
import StorageService from '../services/StorageService.js';

class FoodModel {
  constructor() {
    this.foodItems = StorageService.getItem('aosaka_food') || [];
    this.cart = StorageService.getItem('aosaka_cart') || [];
  }

  getFoodMenu() {
    return this.foodItems;
  }

  addToCart(foodId) {
    const item = this.foodItems.find(f => f.id === foodId);
    if (!item) return;

    const existingIndex = this.cart.findIndex(c => c.id === foodId);
    if (existingIndex > -1) {
      this.cart[existingIndex].cantidad += 1;
    } else {
      this.cart.push({ ...item, cantidad: 1 });
    }
    this.saveCart();
    return item;
  }

  removeFromCart(foodId) {
    this.cart = this.cart.filter(c => c.id !== foodId);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  getCartCount() {
    return this.cart.reduce((count, item) => count + item.cantidad, 0);
  }

  saveCart() {
    StorageService.setItem('aosaka_cart', this.cart);
  }
}

export default new FoodModel();
