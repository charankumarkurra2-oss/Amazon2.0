import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  fullName = '';
  email = '';
  phone = '';
  address = '';
  city = '';
  pincode = '';
  errorMessage = '';

  constructor(private router: Router, private cart: CartService) {
    if (this.cart.getCartItems().length === 0) this.router.navigate(['/cart']);
  }

  get subtotal(): number { return this.cart.getSubtotal(); }
  get delivery(): number { return this.subtotal >= 999 ? 0 : 49; }
  get total(): number { return this.subtotal + this.delivery; }

  placeOrder(): void {
    if (!this.fullName.trim() || !this.email.trim() || !this.phone.trim() || !this.address.trim() || !this.city.trim() || !this.pincode.trim()) {
      this.errorMessage = 'Please complete every delivery field before placing your order.';
      return;
    }
    if (!/^\d{10}$/.test(this.phone.trim())) {
      this.errorMessage = 'Enter a valid 10-digit phone number.';
      return;
    }
    if (!/^\d{6}$/.test(this.pincode.trim())) {
      this.errorMessage = 'Enter a valid 6-digit PIN code.';
      return;
    }
    localStorage.setItem('amazon2_last_order', JSON.stringify({
      name: this.fullName.trim(), email: this.email.trim(), total: this.total, date: new Date().toISOString()
    }));
    this.router.navigate(['/success']);
  }
}
