import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreUserService } from './store-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storeUserService: StoreUserService,
    private router: Router
  ) {}
  async loginUser(credential) {
    try {
      const users = await this.storeUserService.getUsers();
      const userLogged = users.filter(
        (user) =>
          user.email === credential.email &&
          user.password === credential.password
      );
      console.log('user Logged', userLogged);
      console.log(userLogged.length);

      if (userLogged.length === 0) {
        return false;
      }
      this.storeUserService.isLogged();
      console.log('user logged');
      this.storeUserService.saveUserLogged(userLogged[0]);

      return userLogged[0];
    } catch (e) {}
  }
  async getUser() {
    return await this.storeUserService.getUserLogged();
  }

  registerUser(data) {
    return this.storeUserService.saveUsers(data);
  }
  logout() {
    this.storeUserService.logout();
    this.router.navigate(['/']);
  }
}
