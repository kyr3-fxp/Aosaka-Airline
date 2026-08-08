/**
 * AOSAKA AIRLINES - 3D VECTOR HERO VIEW (HomeView.js)
 * Clean text without emojis.
 */
class HomeView {
  render() {
    return `
      <!-- Hero Section with 3D Vector Wireframe Graphic Matrix (No Real Images) -->
      <section class="hero-main-wrapper" style="position: relative; padding: 75px 0 95px 0; overflow: hidden; border-radius: 0; min-height: 580px; background: #0A0F1D;">
        
        <!-- 3D Vector Canvas Engine Layer -->
        <canvas id="vector-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></canvas>

        <!-- Stable Content Overlay with Legible Apple Liquid Glass Search Box -->
        <div class="container" style="position: relative; z-index: 5;">
          <!-- Hero Headline -->
          <div style="text-align: center; max-width: 840px; margin: 0 auto 36px auto;">
            <div class="apple-glass-pill" style="margin-bottom: 20px;">
              Aosaka Airlines • Red Vectorial 3D
            </div>
            <h1 style="font-size: 56px; font-weight: 800; line-height: 1.15; margin-bottom: 18px; color: #FFFFFF; letter-spacing: -0.5px; text-shadow: 0 4px 20px rgba(0,0,0,0.6);">
              Tu Próxima Aventura <span style="color: #EF4444;">Comienza Aquí</span>
            </h1>
            <p style="font-size: 19px; color: #E2E8F0; line-height: 1.6; max-width: 700px; margin: 0 auto; text-shadow: 0 2px 10px rgba(0,0,0,0.5); font-weight: 400;">
              Reserva tus vuelos al mejor precio, haz check-in online en segundos y disfruta de nuestro servicio a bordo.
            </p>
          </div>

          <!-- High-Contrast Search Box Container -->
          <div class="search-box-container" style="max-width: 1040px; margin: 0 auto; padding: 32px 36px;">
            <div class="search-tabs" style="border-bottom: 1px solid #E2E8F0; padding-bottom: 16px; margin-bottom: 22px; display: flex; gap: 28px;">
              <label class="search-tab-label" style="color: #0F172A; font-weight: 700; cursor: pointer; font-size: 15px;">
                <input type="radio" name="tripType" value="round" checked style="accent-color: #EF4444;" /> Ida y vuelta
              </label>
              <label class="search-tab-label" style="color: #64748B; font-weight: 600; cursor: pointer; font-size: 15px;">
                <input type="radio" name="tripType" value="oneway" style="accent-color: #EF4444;" /> Solo ida
              </label>
            </div>
            
            <form id="home-search-form" class="search-form-row">
              <div class="input-group">
                <img src="assest/avion_origen.svg" alt="Origen" />
                <select id="search-origen" style="color: #0F172A; font-weight: 600;">
                  <option value="Bogotá (BOG)">Bogotá (BOG)</option>
                  <option value="Medellín (MDE)">Medellín (MDE)</option>
                  <option value="Cartagena (CTG)">Cartagena (CTG)</option>
                </select>
              </div>

              <div class="input-group">
                <img src="assest/avion_destino.svg" alt="Destino" />
                <select id="search-destino" style="color: #0F172A; font-weight: 600;">
                  <option value="">Cualquier Destino</option>
                  <option value="Medellín (MDE)">Medellín (MDE)</option>
                  <option value="Cartagena (CTG)">Cartagena (CTG)</option>
                  <option value="Santa Marta (SMR)">Santa Marta (SMR)</option>
                  <option value="Las Bahamas (NAS)">Las Bahamas (NAS)</option>
                  <option value="Punta Cana (PUJ)">Punta Cana (PUJ)</option>
                  <option value="Isla Mujeres (CUN)">Isla Mujeres (CUN)</option>
                  <option value="Islas Canarias (LPA)">Islas Canarias (LPA)</option>
                </select>
              </div>

              <div class="input-group">
                <img src="assest/calendario.svg" alt="Fecha" />
                <input type="date" id="search-fecha" value="${new Date().toISOString().split('T')[0]}" style="color: #0F172A; font-weight: 600;" />
              </div>

              <button type="submit" class="btn-primary" style="height: 52px; padding: 0 38px; font-size: 15px; font-weight: 700; background: #EF4444; border: none; color: #FFF; border-radius: 12px;">
                Buscar Vuelos
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Main Offers Grid -->
      <main class="container" style="margin-top: 60px;">
        <div style="margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h2 style="font-size: 32px; font-weight: 700; color: #0F172A;">Ofertas de Viaje por Menos de $366.744</h2>
            <p style="color: #64748B; font-size: 15px;">Aprovecha nuestras tarifas especiales y viaja sin complicaciones.</p>
          </div>
          <a href="#vuelos" class="btn-secondary" style="border-color: #EF4444; color: #EF4444;">Ver Todas las Ofertas →</a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div class="card-offer">
            <img class="card-img" src="assest/dest_bahamas.jpg" alt="Las Bahamas" />
            <div class="card-body">
              <div class="card-title">Las Bahamas</div>
              <div class="card-subtitle">1 h 5 m • Vuelo directo</div>
              <div class="card-price" style="color: #EF4444;">Desde $200.042</div>
              <a href="#vuelos?destino=Bahamas" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar ahora</a>
            </div>
          </div>

          <div class="card-offer">
            <img class="card-img" src="assest/dest_valledupar.jpg" alt="Valledupar" />
            <div class="card-body">
              <div class="card-title">Valledupar, Cesar</div>
              <div class="card-subtitle">1 h 33 m • Vuelo directo</div>
              <div class="card-price" style="color: #EF4444;">Desde $250.000</div>
              <a href="#vuelos?destino=Valledupar" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar ahora</a>
            </div>
          </div>

          <div class="card-offer">
            <img class="card-img" src="assest/dest_santamarta.jpg" alt="Santa Marta" />
            <div class="card-body">
              <div class="card-title">Santa Marta</div>
              <div class="card-subtitle">1 h 36 m • Vuelo directo</div>
              <div class="card-price" style="color: #EF4444;">Desde $190.042</div>
              <a href="#vuelos?destino=Santa Marta" class="btn-primary" style="margin-top: 14px; width: 100%; background: #EF4444;">Reservar ahora</a>
            </div>
          </div>
        </div>

        <!-- FAQs Section -->
        <div class="faq-section" style="margin: 60px 0;">
          <div class="faq-title">
            <h2 style="color: #0F172A;">Respondemos a tus preguntas</h2>
            <p style="color: #64748B; margin-top: 12px;">Resolvemos tus dudas al instante para que disfrutes tu viaje.</p>
          </div>

          <div class="faq-accordion">
            <div class="faq-item">
              <div class="faq-header">
                ¿Cómo se usan los filtros de búsqueda? 
                <span class="faq-icon">▼</span>
              </div>
              <div class="faq-body">Para usar los filtros, selecciona las ciudades de origen, destino y fechas en nuestro buscador. Puedes ordenar por precio más bajo o menor tiempo de vuelo.</div>
            </div>
            <div class="faq-item">
              <div class="faq-header">
                ¿Tengo que hacer check-in presencial? 
                <span class="faq-icon">▼</span>
              </div>
              <div class="faq-body">No es necesario. El proceso es totalmente digital a través de nuestro sitio web usando tu código alfanumérico de reserva.</div>
            </div>
            <div class="faq-item">
              <div class="faq-header">
                ¿Qué pasa si tengo que cancelar una reservación? 
                <span class="faq-icon">▼</span>
              </div>
              <div class="faq-body">Puedes realizar cambios o cancelar tu reservación hasta 24 horas antes del vuelo desde tu panel de usuario o contactando a servicio al cliente.</div>
            </div>
          </div>
        </div>
      </main>
    `;
  }
}

export default new HomeView();
