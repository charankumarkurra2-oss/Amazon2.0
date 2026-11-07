import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface CartItem extends Product { quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: CartItem[] = this.loadCart();

  private loadCart(): CartItem[] {
    try {
      const stored = localStorage.getItem('amazon2_cart');
      return stored ? JSON.parse(stored) as CartItem[] : [];
    } catch {
      return [];
    }
  }

  private save(): void { localStorage.setItem('amazon2_cart', JSON.stringify(this.cartItems)); }

  addToCart(product: Product): void {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) existing.quantity += 1;
    else this.cartItems.push({ ...product, quantity: 1 });
    this.save();
  }

  getCartItems(): CartItem[] { return this.cartItems; }
  getCount(): number { return this.cartItems.reduce((sum, item) => sum + item.quantity, 0); }
  getSubtotal(): number { return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); }

  changeQuantity(id: number, change: number): void {
    const item = this.cartItems.find(product => product.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) this.removeById(id);
    else this.save();
  }

  removeById(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.save();
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.save();
  }

  clear(): void { this.cartItems = []; this.save(); }
}
