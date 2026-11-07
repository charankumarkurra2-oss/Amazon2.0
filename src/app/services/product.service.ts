import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  badge?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: Product[] = [
    { id: 1, name: 'Apple iPhone 15', price: 69999, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85', description: 'A powerful smartphone with a brilliant display and advanced camera.', category: 'Electronics', rating: 4.8, badge: 'Popular' },
    { id: 2, name: 'Samsung Galaxy S24', price: 62999, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85', description: 'Premium Android performance for work, play, and everyday life.', category: 'Electronics', rating: 4.7, badge: 'Top rated' },
    { id: 3, name: 'Everyday Laptop', price: 55999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', description: 'A versatile laptop for study, projects, and entertainment.', category: 'Electronics', rating: 4.6 },
    { id: 4, name: 'Minimal Smart Watch', price: 3999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', description: 'Track daily activity and keep your essentials close at hand.', category: 'Accessories', rating: 4.4, badge: 'Great value' },
    { id: 5, name: 'Studio Headphones', price: 2499, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85', description: 'Comfortable over-ear headphones for music and focused work.', category: 'Electronics', rating: 4.5 },
    { id: 6, name: 'Classic Cotton T-Shirt', price: 799, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', description: 'A soft, everyday essential with an easy regular fit.', category: 'Fashion', rating: 4.3 },
    { id: 7, name: 'Floral Summer Dress', price: 1499, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', description: 'A light, stylish dress made for relaxed days out.', category: 'Fashion', rating: 4.6, badge: 'Trending' },
    { id: 8, name: 'Velocity Running Shoes', price: 2499, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', description: 'Cushioned, flexible shoes for walks, workouts, and weekends.', category: 'Fashion', rating: 4.5 },
    { id: 9, name: 'Explorer Backpack', price: 1299, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', description: 'A practical backpack with room for daily essentials.', category: 'Accessories', rating: 4.4 },
    { id: 10, name: 'RGB Gaming Mouse', price: 999, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85', description: 'Responsive controls and a comfortable shape for long sessions.', category: 'Electronics', rating: 4.2 },
    { id: 11, name: 'Ceramic Coffee Set', price: 899, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85', description: 'A simple, elegant set to make your coffee break feel special.', category: 'Home', rating: 4.5 },
    { id: 12, name: 'Desk Table Lamp', price: 1199, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', description: 'A warm, modern light for your study desk or bedside table.', category: 'Home', rating: 4.4 }
  ];

  getProducts(): Product[] { return [...this.products]; }
  getProductById(id: number): Product | undefined { return this.products.find(product => product.id === id); }
  getCategories(): string[] { return ['All', ...new Set(this.products.map(product => product.category))]; }
}
