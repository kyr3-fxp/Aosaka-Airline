/**
 * AOSAKA AIRLINES - TOAST VIEW (ToastView.js)
 */
class ToastView {
  show(message, icon = '✈️') {
    let container = document.querySelector('.aosaka-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'aosaka-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'aosaka-toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

export default new ToastView();
