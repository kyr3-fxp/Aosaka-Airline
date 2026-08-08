/**
 * AOSAKA AIRLINES - CHECKOUT CONTROLLER (CheckoutController.js)
 */
import CheckoutView from '../views/CheckoutView.js';
import FlightModel from '../models/FlightModel.js';
import FoodModel from '../models/FoodModel.js';
import CheckInModel from '../models/CheckInModel.js';
import ToastView from '../views/ToastView.js';
import RouterService from '../services/RouterService.js';

class CheckoutController {
  constructor() {
    this.appliedDiscount = 20.00;
  }

  init() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = CheckoutView.render(this.appliedDiscount);
    this.bindEvents();
  }

  bindEvents() {
    const promoBtn = document.getElementById('apply-promo-btn');
    const promoInput = document.getElementById('promo-input');

    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const code = promoInput.value.trim().toUpperCase();

        if (code === 'AOSAKA10' || code === 'PROMO10') {
          this.appliedDiscount = 35.00;
          ToastView.show('¡Cupón AOSAKA10 aplicado! Descuento adicional de $15.00', '🎉');
          document.getElementById('app').innerHTML = CheckoutView.render(this.appliedDiscount);
          this.bindEvents();
        } else if (code === 'VIP50') {
          this.appliedDiscount = 50.00;
          ToastView.show('¡Cupón VIP50 aplicado! Descuento especial de $50.00', '🌟');
          document.getElementById('app').innerHTML = CheckoutView.render(this.appliedDiscount);
          this.bindEvents();
        } else {
          ToastView.show('Código promocional no válido o expirado.', '❌');
        }
      });
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('pay-nombre').value.trim();
        const email = document.getElementById('pay-email').value.trim();
        const terms = document.getElementById('pay-terms').checked;

        if (!nombre || !email) {
          ToastView.show('Ingresa todos los datos requeridos.', '⚠️');
          return;
        }
        if (!terms) {
          ToastView.show('Debes aceptar los términos y condiciones.', '⚠️');
          return;
        }

        ToastView.show('Procesando pago seguro con encriptación SSL...', '🔒');

        setTimeout(() => {
          const selectedFlight = FlightModel.getSelectedFlight();
          const newBooking = CheckInModel.createBooking({
            nombreCompleto: nombre,
            email: email,
            vuelo: selectedFlight,
            total: 225.00
          });

          FoodModel.clearCart();
          ToastView.show(`¡Pago Exitoso! Reserva creada con PNR: ${newBooking.pnr}`, '🎟️');

          setTimeout(() => {
            RouterService.navigateTo('checkin');
            setTimeout(() => {
              const pnrInput = document.getElementById('checkin-pnr');
              const apellidoInput = document.getElementById('checkin-apellido');
              const form = document.getElementById('checkin-form');

              if (pnrInput && apellidoInput && form) {
                pnrInput.value = newBooking.pnr;
                apellidoInput.value = newBooking.apellido;
                form.dispatchEvent(new Event('submit'));
              }
            }, 300);
          }, 1200);
        }, 1500);
      });
    }
  }
}

export default new CheckoutController();
