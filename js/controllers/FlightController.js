/**
 * AOSAKA AIRLINES - FLIGHT CONTROLLER (FlightController.js)
 * Fixed: Re-applies 3D Tilt and Scroll Reveal on filter/sort dynamic DOM updates.
 */
import FlightModel from '../models/FlightModel.js';
import FlightView from '../views/FlightView.js';
import RouterService from '../services/RouterService.js';
import ToastView from '../views/ToastView.js';
import TiltEffectEngine from '../3d/TiltEffect.js';
import ScrollAnimationEngine from '../3d/ScrollAnimation.js';

class FlightController {
  init(params) {
    const origen = params.get('origen') || '';
    const destino = params.get('destino') || '';
    
    let flights = FlightModel.searchFlights(origen, destino);
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = FlightView.render(flights);

    this.bindEvents(flights);
    this.reapplyEffects();
  }

  bindEvents(currentFlights) {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const sortCriterion = tab.getAttribute('data-sort');
        const sortedFlights = sortCriterion === 'todos' ? currentFlights : FlightModel.sortFlights(sortCriterion);
        
        const container = document.getElementById('flight-list-container');
        if (container) {
          container.innerHTML = FlightView.renderFlightList(sortedFlights);
        }
        
        ToastView.show(`Vuelos ordenados por: ${tab.innerText}`, '⚡');
        this.bindSelectButtons();
        this.reapplyEffects();
      });
    });

    this.bindSelectButtons();
  }

  bindSelectButtons() {
    const selectButtons = document.querySelectorAll('.btn-select-flight');
    selectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const flightId = btn.getAttribute('data-id');
        const selected = FlightModel.setSelectedFlight(flightId);
        if (selected) {
          ToastView.show(`Vuelo ${selected.origen} ➔ ${selected.destino} seleccionado`, '✅');
          setTimeout(() => {
            RouterService.navigateTo('pago');
          }, 600);
        }
      });
    });
  }

  reapplyEffects() {
    TiltEffectEngine.init();
    ScrollAnimationEngine.initObserver();
  }
}

export default new FlightController();
