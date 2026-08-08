/**
 * AOSAKA AIRLINES - CHECKIN VIEW (CheckInView.js)
 */
class CheckInView {
  render() {
    return `
      <div class="container">
        <div class="checkin-view-box">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 32px; font-weight: 700; color: var(--secondary);">Check-In Online</h1>
            <p style="color: var(--text-muted); margin-top: 6px;">Olvida las filas. Obtén tu pase de abordar de forma rápida y segura.</p>
          </div>

          <form id="checkin-form">
            <div style="margin-bottom: 20px;">
              <label style="font-weight: 600; font-size: 14px; display: block; margin-bottom: 8px;">Código de Reserva (PNR)</label>
              <div class="input-group">
                <img src="assest/Icon_check_events.svg" alt="PNR" />
                <input type="text" id="checkin-pnr" placeholder="Ej: AOS123" required style="text-transform: uppercase;" />
              </div>
              <small style="color: var(--text-muted); font-size: 12px; margin-top: 4px; display: block;">Código alfanumérico de 6 caracteres (Prueba con demo: AOS123)</small>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="font-weight: 600; font-size: 14px; display: block; margin-bottom: 8px;">Primer Apellido</label>
              <div class="input-group">
                <img src="assest/Icon_Social_person.svg" alt="Apellido" />
                <input type="text" id="checkin-apellido" placeholder="Ej: Fuentes" required />
              </div>
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; height: 50px; font-size: 16px;">Verificar e Iniciar Check-In</button>
          </form>

          <div id="boarding-pass-result" style="margin-top: 30px;"></div>
        </div>
      </div>
    `;
  }

  renderBoardingPass(reservation) {
    return `
      <div class="boarding-pass-card">
        <div class="boarding-pass-header">
          <div>
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--primary);">PASE DE ABORDAR • AOSAKA AIRLINES</div>
            <div style="font-size: 20px; font-weight: 700; margin-top: 4px;">${reservation.pasajero}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 12px; color: var(--text-muted);">CÓDIGO PNR</div>
            <div style="font-size: 22px; font-weight: 700; color: var(--accent);">${reservation.pnr}</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 20px;">
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">ORIGEN</div>
            <div style="font-size: 16px; font-weight: 600;">${reservation.origen}</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">DESTINO</div>
            <div style="font-size: 16px; font-weight: 600;">${reservation.destino}</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">FECHA</div>
            <div style="font-size: 16px; font-weight: 600;">${reservation.fecha}</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">ASIENTO</div>
            <div style="font-size: 18px; font-weight: 700; color: var(--primary);">${reservation.asiento}</div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.08); padding: 16px; border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="assest/qr_aosaka.svg" alt="QR Code" style="width: 50px; height: 50px; background: #FFF; padding: 4px; border-radius: 6px;" />
            <div>
              <div style="font-size: 13px; font-weight: 600;">Estado: ${reservation.estado}</div>
              <div style="font-size: 11px; color: #CBD5E1;">Preséntalo en la puerta de abordaje</div>
            </div>
          </div>
          <button class="btn-primary" onclick="window.print()" style="font-size: 13px; padding: 8px 16px;">🖨️ Imprimir Pase</button>
        </div>
      </div>
    `;
  }
}

export default new CheckInView();
