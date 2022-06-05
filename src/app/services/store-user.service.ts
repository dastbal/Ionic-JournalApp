import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StoreUserService {
  users = [];

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async saveUsers(v) {
    this.users = await this.getUsers();
    const usersSaved = await this.getUsers();
    const newtId = parseInt(usersSaved.pop().id, 10) + 1;
    const user = { id: newtId, ...v };
    this.users.push(user);

    this.storage.set('users', this.users);
  }
  async getUsers() {
    const u = await this.storage.get('users');
    if (u === null) {
      return [
        {
          id: 1,
          name: 'david',
          email: 'david@gmail.com',
          password: '123456',
        },
      ];
    }
    return u;
  }
  async saveUserLogged(user) {
    this.storage.set('user', user);
  }
  async getUserLogged() {
    const userLogged = await this.storage.get('user');
    return userLogged;
  }
  isLogged() {
    this.storage.set('isUserLoggedIn', true);
  }
  logout() {
    this.storage.remove('isUserLoggedIn');
    this.storage.remove('user');
  }
}
