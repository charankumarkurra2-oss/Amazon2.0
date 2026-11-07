import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product?: Product;
  added = false;
  constructor(private route: ActivatedRoute, private router: Router, private products: ProductService, private cart: CartService, private wishlist: WishlistService) {}
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') !== 'true') { this.router.navigate(['/login']); return; }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.getProductById(id);
    if (!this.product) this.router.navigate(['/products']);
  }
  addToCart(): void { if (this.product) { this.cart.addToCart(this.product); this.added = true; } }
  toggleWishlist(): void { if (this.product) this.wishlist.toggle(this.product); }
  get isWishlisted(): boolean { return this.product ? this.wishlist.has(this.product.id) : false; }
}
