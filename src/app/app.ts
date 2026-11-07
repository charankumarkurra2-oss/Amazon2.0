import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router, private cartService: CartService) {}

  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  get cartCount(): number {
    return this.cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }
}
