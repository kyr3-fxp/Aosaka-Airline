/**
 * AOSAKA AIRLINES - STORAGE SERVICE (StorageService.js)
 * Manages localStorage data persistence and seeds initial dataset.
 */

class StorageService {
  constructor() {
    this.initSeedData();
  }

  initSeedData() {
    if (!localStorage.getItem('aosaka_flights')) {
      const initialFlights = [
        { id: 'FL101', origen: 'Bogotá (BOG)', destino: 'Medellín (MDE)', horaSalida: '14:30', horaLlegada: '15:28', duracion: '0 h 58 min', escalas: 'Directo', precio: 163429, clase: 'Turista' },
        { id: 'FL102', origen: 'Bogotá (BOG)', destino: 'Cartagena (CTG)', horaSalida: '08:00', horaLlegada: '09:35', duracion: '1 h 35 min', escalas: 'Directo', precio: 175570, clase: 'Turista' },
        { id: 'FL103', origen: 'Bogotá (BOG)', destino: 'Santa Marta (SMR)', horaSalida: '10:15', horaLlegada: '11:51', duracion: '1 h 36 min', escalas: 'Directo', precio: 190042, clase: 'Turista' },
        { id: 'FL104', origen: 'Bogotá (BOG)', destino: 'Las Bahamas (NAS)', horaSalida: '06:00', horaLlegada: '07:05', duracion: '1 h 05 min', escalas: 'Directo', precio: 200042, clase: 'Turista' },
        { id: 'FL105', origen: 'Bogotá (BOG)', destino: 'Valledupar (VUP)', horaSalida: '11:00', horaLlegada: '12:33', duracion: '1 h 33 min', escalas: 'Directo', precio: 250000, clase: 'Turista' },
        { id: 'FL106', origen: 'Bogotá (BOG)', destino: 'Isla Mujeres (CUN)', horaSalida: '16:00', horaLlegada: '18:12', duracion: '2 h 12 min', escalas: 'Directo', precio: 580026, clase: 'Turista' },
        { id: 'FL107', origen: 'Bogotá (BOG)', destino: 'Punta Cana (PUJ)', horaSalida: '13:10', horaLlegada: '15:58', duracion: '2 h 48 min', escalas: 'Directo', precio: 885970, clase: 'Turista' },
        { id: 'FL108', origen: 'Bogotá (BOG)', destino: 'Islas Canarias (LPA)', horaSalida: '22:00', horaLlegada: '23:30', duracion: '1 h 30 min', escalas: '1 Escala', precio: 2455730, clase: 'Ejecutiva' }
      ];
      localStorage.setItem('aosaka_flights', JSON.stringify(initialFlights));
    }

    if (!localStorage.getItem('aosaka_food')) {
      const initialFood = [
        { id: 'F01', nombre: 'Carne asada', prepTime: '7 min', precio: 44999, img: 'assest/comida_hero.jpg' },
        { id: 'F02', nombre: 'Pastas a la Giorgina', prepTime: '10 min', precio: 58000, img: 'assest/comida_hero.jpg' },
        { id: 'F03', nombre: 'Combo de burrito', prepTime: '10 min', precio: 35500, img: 'assest/comida_hero.jpg' },
        { id: 'F04', nombre: 'Especial de la casa', prepTime: '5 min', precio: 62000, img: 'assest/comida_hero.jpg' },
        { id: 'F05', nombre: 'Raviolo Gourmet', prepTime: '10 min', precio: 48500, img: 'assest/comida_hero.jpg' },
        { id: 'F06', nombre: 'Tacos con pollo y ensalada', prepTime: '10 min', precio: 38000, img: 'assest/comida_hero.jpg' }
      ];
      localStorage.setItem('aosaka_food', JSON.stringify(initialFood));
    }

    if (!localStorage.getItem('aosaka_reservations')) {
      const demoReservations = [
        { pnr: 'AOS123', apellido: 'Fuentes', pasajero: 'Jose David Fuentes', vueloId: 'FL102', origen: 'Bogotá (BOG)', destino: 'Cartagena (CTG)', fecha: '2026-08-15', asiento: '12A', estado: 'Confirmado' }
      ];
      localStorage.setItem('aosaka_reservations', JSON.stringify(demoReservations));
    }
  }

  getItem(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error(`Error reading ${key} from localStorage`, e);
      return null;
    }
  }

  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error writing ${key} to localStorage`, e);
    }
  }
}

export default new StorageService();
