/**
 * AOSAKA AIRLINES - CHECKIN CONTROLLER (CheckInController.js)
 */
import CheckInModel from '../models/CheckInModel.js';
import CheckInView from '../views/CheckInView.js';
import ToastView from '../views/ToastView.js';

class CheckInController {
  init() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = CheckInView.render();
    this.bindEvents();
  }

  bindEvents() {
    const form = document.getElementById('checkin-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pnr = document.getElementById('checkin-pnr').value;
      const apellido = document.getElementById('checkin-apellido').value;

      ToastView.show(`Verificando reserva ${pnr.toUpperCase()}...`, '🔍');

      setTimeout(() => {
        const reservation = CheckInModel.findReservation(pnr, apellido);
        const resultContainer = document.getElementById('boarding-pass-result');

        if (reservation) {
          ToastView.show('¡Reserva encontrada! Generando Pase de Abordar...', '✅');
          resultContainer.innerHTML = CheckInView.renderBoardingPass(reservation);
        } else {
          ToastView.show('Reserva no encontrada. Verifica tu código o apellido.', '⚠️');
          resultContainer.innerHTML = `
            <div style="background:#FEF2F2; color:#991B1B; padding:16px; border-radius:8px; text-align:center; font-size:14px;">
              ❌ No encontramos ninguna reserva con PNR: <strong>${pnr.toUpperCase()}</strong> y apellido: <strong>${apellido}</strong>.<br>
              Pista: Puedes probar con la reserva demo PNR <strong>AOS123</strong> y Apellido <strong>Fuentes</strong>.
            </div>
          `;
        }
      }, 1000);
    });
  }
}

export default new CheckInController();
