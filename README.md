# ✈️ Aosaka Airlines - Plataforma Web MVC Premium

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![CSS3 Vanilla](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Architecture](https://img.shields.io/badge/Architecture-MVC-8B5CF6?style=for-the-badge)](#-arquitectura-mvc)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-22C55E?style=for-the-badge&logo=github)](https://kyr3-fxp.github.io/Aosaka-Airline/)

Bienvenido al repositorio oficial de **Aosaka Airlines**, una plataforma web moderna e interactiva reconstruida bajo el patrón de arquitectura **Model-View-Controller (MVC)** en JavaScript ES6 modular puro, acompañada de un sistema de diseño **Apple Liquid Glass UI** y un motor gráfico **3D Vectorial**.

---

## 🌐 Sitio Web en Línea (Despliegue GitHub Pages)

La aplicación se encuentra desplegada y lista para usar en producción a través de **GitHub Pages**:

🚀 **Enlace directo a la aplicación:** [https://kyr3-fxp.github.io/Aosaka-Airline/](https://kyr3-fxp.github.io/Aosaka-Airline/)

---

## 🌟 Características Principales

- **✈️ Búsqueda & Filtrado Dinámico de Vuelos:** Búsqueda en tiempo real entre múltiples destinos nacionales e internacionales (Bogotá, Medellín, Cartagena, Santa Marta, Las Bahamas, Punta Cana, Isla Mujeres, Islas Canarias). Ordenamiento instantáneo por *El más barato*, *El mejor* y *Menor duración*.
- **🎟️ Check-In Online & Emisión de Pase de Abordar:** Verificación de código PNR alfanumérico (ej: PNR `AOS123` con Apellido `Fuentes`), asignación automática de asiento, código QR digital y opción de impresión.
- **🛒 Menú a Bordo & Carrito Persistente:** Catálogo interactivo de alimentos y bebidas con gestión de carrito de compras sincronizado en `localStorage`.
- **💳 Pasarela de Pago & Motor de Cupones Promocionales:** Cálculo dinámico de totales, desglose de impuestos y validación de cupones (`AOSAKA10` para $15.00 extra de descuento y `VIP50` para $50.00 de descuento).
- **⚡ Motor Gráfico 3D Vectorial:** Fondo interactivo 3D wireframe sin imágenes de mapa de bits pesadas, con animación de silueta de avión y nodos de radar interconectados con efecto de paralaje 3D.
- **🎴 Inclinación Tridimensional 3D (3D Tilt Cards):** Animación de perspectiva tridimensional en 60 FPS en todas las tarjetas de ofertas, itinerarios, menú y vehículos de alquiler.
- **🚗 Alquiler de Vehículos & Reserva de Hoteles:** Fotografías automotrices de alta resolución (Sedán, SUV y Luxury) y catálogo hotelero.

---

## 🏛️ Arquitectura MVC

El proyecto está organizado de forma limpia y modular separando responsabilidades:

```
d:\Aosaka\
├── index.html                   # Punto de entrada principal HTML SPA
├── README.md                    # Documentación del proyecto
├── css/
│   ├── base.css                 # Variables del sistema de diseño (Rojo Aosaka, Blanco, Gris)
│   ├── components.css           # Estilos de Navbar, Botones, Footer original y Tarjetas
│   ├── views.css                # Estilos de vistas (Buscador, FAQs desplegables animadas)
│   └── cinematic.css            # Sistema Apple Liquid Glass UI y perspectivas 3D
├── js/
│   ├── app.js                   # Inicializador principal y registro de controladores
│   ├── services/
│   │   ├── StorageService.js    # Capa de almacenamiento persistente (localStorage) y dataset semilla
│   │   └── RouterService.js     # Enrutador cliente SPA con transiciones cinematográficas
│   ├── models/
│   │   ├── FlightModel.js       # Modelo de búsqueda, filtros y ordenamiento de vuelos
│   │   ├── UserModel.js         # Modelo de autenticación e inicio de sesión
│   │   ├── FoodModel.js         # Modelo de menú a bordo y estado del carrito
│   │   └── CheckInModel.js      # Modelo de verificación PNR y emisión de boletos
│   ├── views/
│   │   ├── NavbarView.js        # Vista de la barra de navegación y contador del carrito
│   │   ├── HomeView.js          # Vista principal (Buscador, ofertas, FAQs)
│   │   ├── FlightView.js        # Vista de catálogo y resultados de vuelos
│   │   ├── CheckInView.js       # Vista de Check-in y pase de abordar
│   │   ├── FoodView.js          # Vista de menú a bordo y carrito de compras
│   │   ├── BundleView.js        # Vista de hoteles y vehículos de alquiler
│   │   ├── PetView.js           # Vista de viajes con mascotas
│   │   ├── AuthView.js          # Vista de inicio de sesión y registro
│   │   ├── CheckoutView.js      # Vista de pasarela de pago y cupones
│   │   └── ToastView.js         # Notificaciones flotantes
│   ├── controllers/
│   │   ├── FlightController.js  # Orquestador de vuelos y ordenamiento dinámico
│   │   ├── CheckInController.js # Orquestador de verificación de PNR
│   │   ├── FoodController.js    # Orquestador de compras a bordo
│   │   ├── AuthController.js    # Orquestador de usuarios
│   │   └── CheckoutController.js# Orquestador de pago y cupones
│   └── 3d/
│       ├── Vector3DEngine.js    # Motor gráfico 3D vectorial
│       ├── TiltEffect.js        # Controlador de inclinación 3D en tarjetas
│       └── ScrollAnimation.js   # Controlador de animaciones al hacer scroll
└── assest/                      # Recursos de imágenes JPG y vectores SVG
```

---

## 🛠️ Despliegue & Publicación en GitHub Pages

Para publicar actualizaciones en GitHub Pages:

1. Realizar los cambios en la rama `develop`.
2. Fusionar los cambios en la rama `main`:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```
3. GitHub Pages construirá y desplegará automáticamente la nueva versión desde la rama `main`.

---

## 🚀 Ejecución en Entorno Local

Para ejecutar la aplicación localmente sin restricciones CORS de módulos ES6:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/kyr3-fxp/Aosaka-Airline.git
   cd Aosaka-Airline
   ```

2. **Iniciar servidor HTTP local:**
   ```bash
   npx http-server . -p 8080
   ```

3. **Abrir en el navegador:**
   Navega a [http://localhost:8080](http://localhost:8080).

---

## 🎟️ Datos de Prueba (Check-In Demo)

Para probar la emisión instantánea de pase de abordar:
- **Código PNR:** `AOS123`
- **Apellido:** `Fuentes`

---

## 📜 Licencia

Desarrollado para Aosaka Airlines. Todos los derechos reservados.
