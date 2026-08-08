/**
 * AOSAKA AIRLINES - CHECKIN MODEL (CheckInModel.js)
 */
import StorageService from '../services/StorageService.js';

class CheckInModel {
  constructor() {
    this.reservations = StorageService.getItem('aosaka_reservations') || [];
  }

  findReservation(pnr, apellido) {
    const cleanPNR = (pnr || '').trim().toUpperCase();
    const cleanApellido = (apellido || '').trim().toLowerCase();

    return this.reservations.find(r => 
      r.pnr.toUpperCase() === cleanPNR && 
      r.apellido.toLowerCase().includes(cleanApellido)
    );
  }

  generatePNR() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'AOS';
    for (let i = 0; i < 3; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  createBooking(bookingDetails) {
    const pnr = this.generatePNR();
    const newBooking = {
      pnr,
      pasajero: bookingDetails.nombreCompleto || 'Pasajero Aosaka',
      apellido: (bookingDetails.nombreCompleto || '').split(' ').pop() || 'Fuentes',
      vueloId: bookingDetails.vuelo?.id || 'FL101',
      origen: bookingDetails.vuelo?.origen || 'Bogotá (BOG)',
      destino: bookingDetails.vuelo?.destino || 'Medellín (MDE)',
      fecha: new Date().toISOString().split('T')[0],
      asiento: `${Math.floor(Math.random() * 20) + 1}${['A','B','C','D'][Math.floor(Math.random() * 4)]}`,
      estado: 'Confirmado',
      total: bookingDetails.total || 225.00
    };

    this.reservations.push(newBooking);
    StorageService.setItem('aosaka_reservations', this.reservations);
    return newBooking;
  }
}

export default new CheckInModel();
