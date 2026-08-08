/**
 * AOSAKA AIRLINES - BUNDLE VIEW (BundleView.js)
 * Clean hotel & car rental view with authentic car images.
 */
class BundleView {
  render() {
    return `
      <div class="container" style="margin-top: 40px; padding-bottom: 60px;">
        <div style="margin-bottom: 30px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0F172A;">Hoteles y Vehículos de Alquiler</h1>
          <p style="color: #64748B; font-size: 16px;">Completa tu viaje con nuestras sugerencias exclusivas y tarifas con descuento especial.</p>
        </div>

        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #EF4444;">Sugerencias de Hoteles</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 50px;">
          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/dest_puntacana.jpg" alt="Hotel Gran Vía" />
            <div class="card-body">
              <div class="card-title">Hotel Gran Vía</div>
              <div class="card-subtitle">Parking • Wifi gratis • Piscina</div>
              <div class="card-price" style="color: #EF4444;">Desde $244.999 / noche</div>
              <a href="#pago?servicio=hotel" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar Hotel</a>
            </div>
          </div>

          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/dest_bahamas.jpg" alt="Mocawa Resort" />
            <div class="card-body">
              <div class="card-title">Mocawa Resort & Spa</div>
              <div class="card-subtitle">Parking • Wifi gratis • Spa</div>
              <div class="card-price" style="color: #EF4444;">Desde $769.080 / noche</div>
              <a href="#pago?servicio=hotel" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar Hotel</a>
            </div>
          </div>

          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/dest_santamarta.jpg" alt="Campestre Floresta" />
            <div class="card-body">
              <div class="card-title">Hotel Campestre Floresta</div>
              <div class="card-subtitle">Parking • Wifi gratis • Naturaleza</div>
              <div class="card-price" style="color: #EF4444;">Desde $296.000 / noche</div>
              <a href="#pago?servicio=hotel" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar Hotel</a>
            </div>
          </div>
        </div>

        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #EF4444;">Sugerencias de Transporte</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 50px;">
          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/car_sedan.jpg" alt="Renault Logan Sedan" />
            <div class="card-body">
              <div class="card-title">Renault Logan Sedán</div>
              <div class="card-subtitle">4 Personas • 4 Puertas • Aire Acondicionado</div>
              <div class="card-price" style="color: #EF4444;">Desde $144.999 / día</div>
              <a href="#pago?servicio=auto" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Alquilar Auto</a>
            </div>
          </div>

          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/car_suv.jpg" alt="SUV Estándar" />
            <div class="card-body">
              <div class="card-title">SUV Tamaño Estándar</div>
              <div class="card-subtitle">6 Personas • 5 Puertas • Aire Acondicionado</div>
              <div class="card-price" style="color: #EF4444;">Desde $269.080 / día</div>
              <a href="#pago?servicio=auto" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Alquilar Auto</a>
            </div>
          </div>

          <div class="card-offer tilt-card">
            <img class="card-img" src="assest/car_luxury.jpg" alt="Sedán Ejecutivo Luxury" />
            <div class="card-body">
              <div class="card-title">Sedán Ejecutivo Luxury</div>
              <div class="card-subtitle">5 Personas • Transmisión Automática • Premium</div>
              <div class="card-price" style="color: #EF4444;">Desde $349.900 / día</div>
              <a href="#pago?servicio=auto" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Alquilar Auto</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default new BundleView();
