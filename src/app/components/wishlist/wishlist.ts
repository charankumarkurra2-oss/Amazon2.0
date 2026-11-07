import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {
  constructor(private wishlist: WishlistService, private cart: CartService, private router: Router) {
    if (localStorage.getItem('isLoggedIn') !== 'true') this.router.navigate(['/login']);
  }
  get items(): Product[] { return this.wishlist.getItems(); }
  remove(id: number): void { this.wishlist.remove(id); }
  addToCart(product: Product): void { this.cart.addToCart(product); }
}
