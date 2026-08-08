/**
 * AOSAKA AIRLINES - FLIGHT MODEL (FlightModel.js)
 */
import StorageService from '../services/StorageService.js';

class FlightModel {
  constructor() {
    this.flights = StorageService.getItem('aosaka_flights') || [];
    this.selectedFlight = null;
  }

  getAllFlights() {
    return this.flights;
  }

  searchFlights(origen, destino) {
    return this.flights.filter(flight => {
      const matchOrigen = !origen || flight.origen.toLowerCase().includes(origen.toLowerCase());
      const matchDestino = !destino || flight.destino.toLowerCase().includes(destino.toLowerCase());
      return matchOrigen && matchDestino;
    });
  }

  sortFlights(criterion) {
    let sorted = [...this.flights];
    if (criterion === 'barato') {
      sorted.sort((a, b) => a.precio - b.precio);
    } else if (criterion === 'duracion') {
      sorted.sort((a, b) => a.duracion.localeCompare(b.duracion));
    } else if (criterion === 'mejor') {
      sorted.sort((a, b) => (a.escalas === 'Directo' ? -1 : 1));
    }
    return sorted;
  }

  setSelectedFlight(flightId) {
    this.selectedFlight = this.flights.find(f => f.id === flightId) || null;
    StorageService.setItem('aosaka_selected_flight', this.selectedFlight);
    return this.selectedFlight;
  }

  getSelectedFlight() {
    return this.selectedFlight || StorageService.getItem('aosaka_selected_flight');
  }
}

export default new FlightModel();
