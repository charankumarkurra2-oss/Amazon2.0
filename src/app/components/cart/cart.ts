import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(private cartService: CartService, private router: Router) {}
  get items(): CartItem[] { return this.cartService.getCartItems(); }
  get subtotal(): number { return this.cartService.getSubtotal(); }
  get delivery(): number { return this.subtotal === 0 || this.subtotal >= 999 ? 0 : 49; }
  get total(): number { return this.subtotal + this.delivery; }
  changeQuantity(id: number, change: number): void { this.cartService.changeQuantity(id, change); }
  remove(id: number): void { this.cartService.removeById(id); }
  checkout(): void { if (this.items.length) this.router.navigate(['/checkout']); }
}
