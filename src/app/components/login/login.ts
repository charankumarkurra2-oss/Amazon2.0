import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}') as { email?: string; password?: string };
    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Enter your email and password to continue.';
      return;
    }
    if (this.email.trim().toLowerCase() === (user.email || '').toLowerCase() && this.password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/products']);
    } else {
      this.errorMessage = 'Those details did not match. Check them or create an account.';
    }
  }
}
