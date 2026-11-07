import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  allProducts: Product[] = [];
  categories: string[] = [];
  searchText = '';
  selectedCategory = 'All';
  sortOrder = 'featured';
  addedProducts: number[] = [];
  notice = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
      return;
    }
    this.allProducts = this.productService.getProducts();
    this.categories = this.productService.getCategories();
  }

  get products(): Product[] {
    let result = this.allProducts.filter(product => {
      const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(this.searchText.toLowerCase().trim());
      const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    if (this.sortOrder === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (this.sortOrder === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (this.sortOrder === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.addedProducts.push(product.id);
    this.notice = `${product.name} added to your cart`;
    setTimeout(() => { this.notice = ''; }, 2200);
  }

  toggleWishlist(product: Product): void { this.wishlistService.toggle(product); }
  isWishlisted(id: number): boolean { return this.wishlistService.has(id); }
}
