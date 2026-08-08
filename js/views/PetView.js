/**
 * AOSAKA AIRLINES - PET VIEW (PetView.js)
 */
class PetView {
  render() {
    return `
      <div class="container" style="margin-top: 30px;">
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 700;">Viaja con tu Mascota 🐾</h1>
          <p style="color: var(--text-muted); font-size: 16px;">Conoce los pasos y requisitos para volar cómodamente con tu mejor amigo.</p>
        </div>

        <div style="background: #FFF; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); margin-bottom: 40px;">
          <img src="assest/mascotas_hero.jpg" alt="Pet travel hero" style="width: 100%; height: 360px; object-fit: cover;" />
          <div style="padding: 30px;">
            <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 12px;">¿Qué hacer para poder viajar con tu mascota?</h2>
            <p style="color: var(--text-muted);">En Aosaka Airlines queremos que tu viaje sea seguro y libre de estrés. Sigue estos 3 sencillos pasos:</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 60px;">
          <div class="card-offer" style="padding: 24px;">
            <h3 style="font-size: 20px; font-weight: 700; color: var(--primary); margin-bottom: 10px;">1. Adquiere un transportín adecuado</h3>
            <p style="font-size: 14px; color: var(--text-muted);">Tu mascota debe poder ponerse de pie, girar y acostarse cómodamente. El transportín debe ser ventilado, resistente y con cierre seguro.</p>
          </div>

          <div class="card-offer" style="padding: 24px;">
            <h3 style="font-size: 20px; font-weight: 700; color: var(--primary); margin-bottom: 10px;">2. Prepara a tu mascota con tiempo</h3>
            <p style="font-size: 14px; color: var(--text-muted);">Acostúmbrala a la guacal o maleta días antes. Visita al veterinario para obtener su certificado de salud expedido en los últimos 10 días.</p>
          </div>

          <div class="card-offer" style="padding: 24px;">
            <h3 style="font-size: 20px; font-weight: 700; color: var(--primary); margin-bottom: 10px;">3. Cumple las normativas exigidas</h3>
            <p style="font-size: 14px; color: var(--text-muted);">Asegúrate de llevar su carné de vacunas antirrábica al día y los permisos del ICA si realizas un viaje internacional.</p>
          </div>
        </div>

        <div style="background: var(--primary); color: #FFF; padding: 40px; border-radius: var(--radius-md); text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 10px;">¿Listo para agregar a tu mascota?</h2>
          <p style="margin-bottom: 20px;">Puedes seleccionar la opción de Mascota en Cabina o Bodega durante el proceso de pago de tu vuelo.</p>
          <a href="#vuelos" class="btn-primary" style="background: #FFF; color: var(--primary);">Reservar Vuelo con Mascota</a>
        </div>
      </div>
    `;
  }
}

export default new PetView();
