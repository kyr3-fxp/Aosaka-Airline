/**
 * AOSAKA AIRLINES - ROUTER SERVICE WITH CINEMATIC MOVIE WIPE (RouterService.js)
 */
import ScrollAnimationEngine from '../3d/ScrollAnimation.js';

class RouterService {
  constructor() {
    this.routes = {};
    this.currentRoute = 'home';
    window.addEventListener('hashchange', () => this.handleHashChange());
  }

  registerRoute(hash, viewCallback) {
    this.routes[hash] = viewCallback;
  }

  init() {
    this.handleHashChange();
  }

  handleHashChange() {
    const rawHash = window.location.hash.replace('#', '') || 'home';
    const [route, queryString] = rawHash.split('?');
    this.currentRoute = route;
    const params = new URLSearchParams(queryString || '');

    ScrollAnimationEngine.triggerWipeTransition(() => {
      if (this.routes[route]) {
        this.routes[route](params);
      } else if (this.routes['home']) {
        this.routes['home'](params);
      }
      window.scrollTo(0, 0);
    });
  }

  navigateTo(hash) {
    window.location.hash = hash;
  }
}

export default new RouterService();
