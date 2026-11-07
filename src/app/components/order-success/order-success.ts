import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-success.html',
  styleUrl: './order-success.css'
})
export class OrderSuccess {
  order: { name?: string; email?: string; total?: number; date?: string } = {};
  constructor(cart: CartService) {
    try { this.order = JSON.parse(localStorage.getItem('amazon2_last_order') || '{}') as typeof this.order; } catch { this.order = {}; }
    cart.clear();
  }
}
