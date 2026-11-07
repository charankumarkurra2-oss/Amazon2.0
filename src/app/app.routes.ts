import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Checkout } from './components/checkout/checkout';
import { OrderSuccess } from './components/order-success/order-success';
import { Logout } from './components/logout/logout';
import { Wishlist } from './components/wishlist/wishlist';
import { ProductDetail } from './components/product-detail/product-detail';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList, canActivate: [authGuard] },
  { path: 'product/:id', component: ProductDetail, canActivate: [authGuard] },
  { path: 'wishlist', component: Wishlist, canActivate: [authGuard] },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'checkout', component: Checkout, canActivate: [authGuard] },
  { path: 'success', component: OrderSuccess, canActivate: [authGuard] },
  { path: 'logout', component: Logout },
  { path: '**', redirectTo: '' }
];
