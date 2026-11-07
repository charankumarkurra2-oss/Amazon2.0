import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private items: Product[] = this.load();
  private load(): Product[] {
    try { return JSON.parse(localStorage.getItem('amazon2_wishlist') || '[]') as Product[]; }
    catch { return []; }
  }
  private save(): void { localStorage.setItem('amazon2_wishlist', JSON.stringify(this.items)); }
  getItems(): Product[] { return this.items; }
  has(id: number): boolean { return this.items.some(item => item.id === id); }
  toggle(product: Product): void {
    this.items = this.has(product.id) ? this.items.filter(item => item.id !== product.id) : [...this.items, product];
    this.save();
  }
  remove(id: number): void { this.items = this.items.filter(item => item.id !== id); this.save(); }
}
