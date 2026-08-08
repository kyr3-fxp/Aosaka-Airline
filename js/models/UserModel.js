/**
 * AOSAKA AIRLINES - USER MODEL (UserModel.js)
 */
import StorageService from '../services/StorageService.js';

class UserModel {
  constructor() {
    this.currentUser = StorageService.getItem('aosaka_current_user') || null;
    this.users = StorageService.getItem('aosaka_users') || [
      { email: 'pasajero@aosaka.com', pass: '123456', nombre: 'Jose David Fuentes' }
    ];
  }

  login(email, password) {
    const user = this.users.find(u => u.email === email && u.pass === password);
    if (user) {
      this.currentUser = user;
      StorageService.setItem('aosaka_current_user', this.currentUser);
      return { success: true, user };
    }
    return { success: false, message: 'Usuario o contraseña incorrectos' };
  }

  register(nombre, email, password) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'El correo ya está registrado' };
    }
    const newUser = { nombre, email, pass: password };
    this.users.push(newUser);
    StorageService.setItem('aosaka_users', this.users);
    this.currentUser = newUser;
    StorageService.setItem('aosaka_current_user', this.currentUser);
    return { success: true, user: newUser };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('aosaka_current_user');
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

export default new UserModel();
