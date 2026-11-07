import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  register(): void {
    if (!this.name.trim() || !this.email.trim() || this.password.length < 6) {
      this.errorMessage = 'Enter your name and email, and use a password with at least 6 characters.';
      return;
    }
    const existing = JSON.parse(localStorage.getItem('user') || '{}') as { email?: string };
    if (existing.email && existing.email.toLowerCase() === this.email.trim().toLowerCase()) {
      this.errorMessage = 'An account with this email already exists. Please sign in.';
      return;
    }
    localStorage.setItem('user', JSON.stringify({ name: this.name.trim(), email: this.email.trim(), password: this.password }));
    this.router.navigate(['/login']);
  }
}
