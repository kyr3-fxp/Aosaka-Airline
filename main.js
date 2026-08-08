/**
 * AOSAKA AIRLINES - MAIN INTERACTIVE JAVASCRIPT SYSTEM (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQAccordion();
  initFlightSearch();
  initFlightSorting();
  initCheckInValidation();
  initFoodCartSystem();
  initPaymentCheckout();
  initLoginForm();
  highlightActiveNavLink();
});

/* Toast Notification Utility */
function showToast(message, icon = '✈️') {
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

/* 1. Active Navigation Link Handler */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* 2. Responsive Mobile Navigation Menu Toggle */
function initMobileMenu() {
  const header = document.querySelector('header');
  const nav = document.querySelector('header nav');
  if (!header || !nav) return;

  if (!document.querySelector('.mobile-menu-btn')) {
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    mobileBtn.innerHTML = '☰';
    header.insertBefore(mobileBtn, nav);

    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      mobileBtn.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
    });
  }
}

/* 3. FAQ Accordion Logic for index.html */
function initFAQAccordion() {
  const preguntas = document.querySelectorAll('.preguntas_2 .pregunta');
  if (!preguntas.length) return;

  const respuestasMap = [
    'Para usar los filtros, selecciona las ciudades de origen, destino y fechas en nuestro buscador. Puedes ordenar por precio más bajo o menor tiempo de vuelo.',
    'No es necesario. El proceso es totalmente digital a través de nuestro sitio web o aplicación móvil con tu código de reserva alfanumérico.',
    'Puedes realizar cambios o cancelar tu reservación hasta 24 horas antes del vuelo desde tu panel de usuario o contacting nuestro servicio al cliente.',
    'Puedes contactarnos 24/7 a través de nuestros canales de atención al cliente desde Colombia, Norteamérica, Suramérica y Europa.'
  ];

  preguntas.forEach((pregunta, index) => {
    pregunta.style.cursor = 'pointer';
    pregunta.style.transition = 'all 0.3s ease';
    pregunta.style.padding = '14px 20px';
    pregunta.style.borderRadius = '10px';
    pregunta.style.marginBottom = '10px';
    pregunta.style.backgroundColor = '#F1F5F9';
    pregunta.style.display = 'flex';
    pregunta.style.flexDirection = 'column';

    // Create answer container
    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.style.display = 'none';
    answer.style.marginTop = '10px';
    answer.style.color = '#475569';
    answer.style.fontSize = '14px';
    answer.style.fontWeight = '400';
    answer.innerText = respuestasMap[index] || 'Información disponible en nuestro centro de ayuda 24/7.';
    pregunta.appendChild(answer);

    pregunta.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.preguntas_2 .pregunta').forEach(p => p.style.backgroundColor = '#F1F5F9');

      if (!isOpen) {
        answer.style.display = 'block';
        pregunta.style.backgroundColor = '#E0F2FE';
      }
    });
  });
}

/* 4. Flight Search Functionality */
function initFlightSearch() {
  const buscarBtn = document.querySelector('.boton_buscar');
  if (!buscarBtn) return;

  buscarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const origen = document.querySelector('.input_origen span:last-child')?.innerText || 'Bogotá';
    const fechaIda = document.querySelector('.input_fecha.ida input')?.value;
    
    showToast(`Buscando vuelos desde ${origen}...`, '🔍');
    setTimeout(() => {
      window.location.href = `vuelos.html?origen=${encodeURIComponent(origen)}&fecha=${encodeURIComponent(fechaIda || '')}`;
    }, 1000);
  });
}

/* 5. Flight Results Sorting on vuelos.html */
function initFlightSorting() {
  const infoItems = document.querySelectorAll('.fila_vuelos .info_item');
  const vuelosContainer = document.querySelector('.panel_aosaka .destino');
  if (!infoItems.length || !vuelosContainer) return;

  infoItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.style.padding = '8px 16px';
    item.style.borderRadius = '8px';
    item.style.transition = 'all 0.2s ease';

    item.addEventListener('click', () => {
      infoItems.forEach(i => i.style.backgroundColor = 'transparent');
      item.style.backgroundColor = '#E0F2FE';

      const titulo = item.querySelector('.titulo')?.innerText || '';
      showToast(`Ordenando vuelos por: ${titulo}`, '⚡');
      
      // Re-order simulation effect
      const flightCards = Array.from(vuelosContainer.children);
      flightCards.sort(() => Math.random() - 0.5);
      flightCards.forEach(card => vuelosContainer.appendChild(card));
    });
  });
}

/* 6. Online Check-in Form Validation */
function initCheckInValidation() {
  const form = document.querySelector('.checkin-container form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const codigo = document.getElementById('codigo')?.value.trim();
    const apellido = document.getElementById('apellido')?.value.trim();

    if (!codigo || !apellido) {
      showToast('Por favor completa todos los campos requeridos.', '⚠️');
      return;
    }

    if (codigo.length < 5) {
      showToast('El código de reserva debe tener al menos 6 caracteres alfanuméricos.', '⚠️');
      return;
    }

    showToast(`Buscando reserva ${codigo.toUpperCase()} para ${apellido}...`, '🎫');
    setTimeout(() => {
      showToast('¡Reserva encontrada con éxito! Redirigiendo...', '✅');
      setTimeout(() => {
        window.location.href = 'sistema_pago.html';
      }, 1200);
    }, 1000);
  });
}

/* 7. In-flight Food Ordering & Cart Logic */
function initFoodCartSystem() {
  const cartButtons = document.querySelectorAll('a.ver_ahora');
  if (!cartButtons.length || !document.querySelector('body').innerHTML.includes('Comida')) return;

  let cartCount = 0;

  cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentCard = btn.closest('.caja');
      const itemTitle = parentCard?.querySelector('.titulo')?.innerText || 'Platillo';
      const itemPrice = parentCard?.querySelector('.precio')?.innerText || '';

      cartCount++;
      showToast(`¡${itemTitle} (${itemPrice}) agregado al pedido!`, '🛒');

      // Update button state
      btn.style.backgroundColor = '#16A34A';
      btn.style.color = '#FFFFFF';
      btn.innerHTML = `¡Agregado! (${cartCount}) <span>✓</span>`;
      
      setTimeout(() => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.innerHTML = `¡Ver ahora! <span class="linea"></span><span class="carrito_compra"><img src="assest/carrito_compra.svg" alt="Carrito"></span>`;
      }, 2000);
    });
  });
}

/* 8. Checkout & Promo Code System on sistema_pago.html */
function initPaymentCheckout() {
  const applyPromoBtn = document.querySelector('.cuadro-codigo button');
  const promoInput = document.querySelector('.cuadro-codigo input');
  const totalesContainer = document.querySelector('.totales');
  const payBtn = document.querySelector('.boton-pago');

  if (!payBtn) return;

  let descuento = 20.00;
  let subtotal = 215.00;
  let impuestos = 30.00;

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = promoInput.value.trim().toUpperCase();

      if (code === 'AOSAKA10' || code === 'PROMO10') {
        descuento = 35.00;
        showToast('¡Cupón aplicado exitosamente! Descuento adicional de $15.00', '🎉');
        updateTotals();
      } else if (code === 'AOSAKA50') {
        descuento = 50.00;
        showToast('¡Cupón VIP aplicado! Descuento de $50.00', '🌟');
        updateTotals();
      } else if (code === '') {
        showToast('Ingresa un código promocional válido (Ej: AOSAKA10)', '⚠️');
      } else {
        showToast('Código promocional no válido o expirado.', '❌');
      }
    });
  }

  function updateTotals() {
    if (!totalesContainer) return;
    const total = subtotal + impuestos - descuento;
    totalesContainer.innerHTML = `
      <div><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div><span>Impuestos</span><span>$${impuestos.toFixed(2)}</span></div>
      <div><span>Descuento</span><span>-$${descuento.toFixed(2)}</span></div>
      <div><strong>Total</strong><strong>$${total.toFixed(2)}</strong></div>
    `;
  }

  payBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[placeholder*="Nombre"]')?.value;
    const email = document.querySelector('input[type="email"]')?.value;
    const terms = document.querySelector('input[type="checkbox"]')?.checked;

    if (!name || !email) {
      showToast('Por favor completa tus datos personales antes de pagar.', '⚠️');
      return;
    }
    if (!terms) {
      showToast('Debes aceptar los términos y condiciones.', '⚠️');
      return;
    }

    showToast('Procesando tu pago seguro con encriptación SSL...', '🔒');
    setTimeout(() => {
      showToast('¡Pago exitoso! Tu billete ha sido enviado a tu correo.', '🎉');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }, 1500);
  });
}

/* 9. Login / Registration Form Logic */
function initLoginForm() {
  const loginBox = document.querySelector('.login-box');
  if (!loginBox) return;

  const btn = loginBox.querySelector('button');
  const userInputs = loginBox.querySelectorAll('input');

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const user = userInputs[0]?.value;
      const pass = userInputs[1]?.value;

      if (!user || !pass) {
        showToast('Ingresa tu usuario y contraseña.', '⚠️');
        return;
      }

      showToast(`Iniciando sesión como ${user}...`, '🔐');
      setTimeout(() => {
        showToast('¡Bienvenido de nuevo a Aosaka Airlines!', '✅');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 1000);
    });
  }
}
