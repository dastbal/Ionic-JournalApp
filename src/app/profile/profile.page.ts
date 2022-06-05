import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user = { name: '' };
  constructor(private authSAervice: AuthService, private router: Router) {}

  logout() {
    this.authSAervice.logout();
    this.router.navigate(['/']);
  }
  async ionViewDidEnter() {
    const userLogged = await this.authSAervice.getUser();
    this.user = userLogged;
    console.log(this.user);
  }
}
