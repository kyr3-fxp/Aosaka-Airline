/**
 * AOSAKA AIRLINES - SCROLL REVEAL & CINEMATIC ROUTE WIPE (ScrollAnimation.js)
 */

class ScrollAnimationEngine {
  init() {
    this.initObserver();
    this.initCinematicWipeContainer();
  }

  initObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.card-offer, .flight-card, .faq-item, .search-box-container, .card-body');
    elementsToReveal.forEach(el => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });
  }

  initCinematicWipeContainer() {
    if (!document.querySelector('.cinematic-wipe')) {
      const wipe = document.createElement('div');
      wipe.className = 'cinematic-wipe';
      document.body.appendChild(wipe);
    }
  }

  triggerWipeTransition(callback) {
    const wipe = document.querySelector('.cinematic-wipe');
    if (!wipe) {
      if (callback) callback();
      return;
    }

    wipe.classList.add('active');
    setTimeout(() => {
      if (callback) callback();
      setTimeout(() => {
        wipe.classList.remove('active');
      }, 200);
    }, 350);
  }
}

export default new ScrollAnimationEngine();
