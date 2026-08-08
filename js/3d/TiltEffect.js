/**
 * AOSAKA AIRLINES - 3D TILT CARD & HERO BACKGROUND ENGINE (TiltEffect.js)
 * Applies 3D tilt perspective to cards and the hero background layer independently.
 */

class TiltEffectEngine {
  init() {
    const cards = document.querySelectorAll('.tilt-card, .card-offer, .flight-card, .checkin-view-box, .faq-item, .boarding-pass-card');
    cards.forEach(card => this.applyTilt(card));

    // Bind Hero Section Mousemove to Hero Background Layer
    const heroWrapper = document.querySelector('.hero-main-wrapper');
    const heroBg = document.querySelector('.hero-3d-bg');
    if (heroWrapper && heroBg) {
      heroWrapper.addEventListener('mousemove', (e) => {
        const rect = heroWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8; // subtle 8 deg tilt
        const rotateY = ((x - centerX) / centerX) * 8;

        heroBg.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.05)`;
      });

      heroWrapper.addEventListener('mouseleave', () => {
        heroBg.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    }
  }

  applyTilt(card) {
    if (card.dataset.tiltBound || card.classList.contains('hero-3d-bg')) return;
    card.dataset.tiltBound = "true";
    card.classList.add('tilt-card');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
      
      card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

export default new TiltEffectEngine();
