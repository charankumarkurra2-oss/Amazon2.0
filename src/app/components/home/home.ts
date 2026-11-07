import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featured: Product[];
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { this.featured = this.productService.getProducts().slice(0, 4); }

  shopNow(): void {
    this.router.navigate([localStorage.getItem('isLoggedIn') === 'true' ? '/products' : '/login']);
  }
  addToCart(product: Product): void { this.cartService.addToCart(product); }
  toggleWishlist(product: Product): void { this.wishlistService.toggle(product); }
  isWishlisted(id: number): boolean { return this.wishlistService.has(id); }
}
