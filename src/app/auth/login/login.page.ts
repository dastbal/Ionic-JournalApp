import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMsg: string;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.initForm();
  }

  initForm() {
    return (this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }));
  }

  async login() {
    const credentials = this.loginForm.value;
    try {
      const user = await this.authService.loginUser(credentials);

      if (user) {
        this.router.navigate(['/tabs/feed']);
      } else {
        throw new Error('Worng credentials');
      }
    } catch (e) {
      this.errorMsg = e;
    }
  }
}
