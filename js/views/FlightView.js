/**
 * AOSAKA AIRLINES - FLIGHT VIEW (FlightView.js)
 * Clean filter tabs without emojis.
 */
class FlightView {
  render(flights = []) {
    return `
      <div class="container" style="padding-top: 40px; padding-bottom: 60px;">
        <!-- Page Title -->
        <div style="margin-bottom: 30px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0F172A;">Vuelos Disponibles</h1>
          <p style="color: #64748B; font-size: 16px;">Selecciona tu itinerario ideal y continúa con tu reserva en Aosaka Airlines.</p>
        </div>

        <!-- Filter & Sort Bar (Clean text tabs, no emojis) -->
        <div class="flight-filter-bar">
          <div class="filter-tab active" data-sort="todos">Todos los Vuelos</div>
          <div class="filter-tab" data-sort="barato">El más barato</div>
          <div class="filter-tab" data-sort="mejor">El mejor</div>
          <div class="filter-tab" data-sort="duracion">Menor duración</div>
        </div>

        <!-- Dynamic Flight List -->
        <div id="flight-list-container">
          ${this.renderFlightList(flights)}
        </div>
      </div>
    `;
  }

  renderFlightList(flights) {
    if (!flights || flights.length === 0) {
      return `
        <div class="card-offer" style="padding: 40px; text-align: center;">
          <h3 style="font-size: 20px; color: #0F172A; margin-bottom: 8px;">No se encontraron vuelos</h3>
          <p style="color: #64748B;">Intenta buscar otra ruta o fecha disponible.</p>
        </div>
      `;
    }

    return flights.map(flight => `
      <div class="flight-card tilt-card" data-id="${flight.id}">
        <div class="flight-route-info">
          <!-- Airline logo & Code -->
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="${flight.logo || 'assest/Group 54.jpg'}" alt="Aosaka" style="width: 44px; height: 44px; border-radius: 8px; object-fit: contain;" />
            <div>
              <div style="font-weight: 700; font-size: 16px; color: #0F172A;">${flight.aerolinea}</div>
              <div style="font-size: 13px; color: #64748B;">Vuelo ${flight.codigo}</div>
            </div>
          </div>

          <!-- Departure -->
          <div class="flight-time-loc">
            <div class="flight-time">${flight.horaSalida}</div>
            <div class="flight-loc">${flight.origen}</div>
          </div>

          <!-- Duration Line -->
          <div class="flight-line-icon">
            <span style="font-size: 12px; font-weight: 600; color: #64748B;">${flight.duracion}</span>
            <span style="font-size: 11px; color: #EF4444; font-weight: 600;">${flight.escalas}</span>
          </div>

          <!-- Arrival -->
          <div class="flight-time-loc">
            <div class="flight-time">${flight.horaLlegada}</div>
            <div class="flight-loc">${flight.destino}</div>
          </div>
        </div>

        <!-- Price & Select Button -->
        <div class="flight-price-box">
          <div class="flight-price">$${flight.precio.toLocaleString('es-CO')}</div>
          <button class="btn-primary btn-select-flight" data-id="${flight.id}" style="margin-top: 8px; width: 100%;">
            Seleccionar
          </button>
        </div>
      </div>
    `).join('');
  }
}

export default new FlightView();
