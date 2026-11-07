# Amazon 2.0 — Angular Shopping Demo

A responsive Angular standalone-components e-commerce demo with a modern storefront UI.

## Included features
- Responsive homepage, navigation, promotional sections, and featured products
- Product search, category filters, sorting by price/rating, and product detail pages
- Wishlist saved in browser local storage
- Cart quantity controls, item removal, subtotal, delivery fee, and total
- Signup/login demo flow and route guard for shopping pages
- Checkout form validation and order-success screen
- Browser local storage for demo account, wishlist, and cart data

## Run locally
1. Install Node.js (LTS) and npm.
2. Extract this ZIP.
3. Open a terminal in the extracted `Amazon2.0` folder.
4. Run `npm install`.
5. Run `npm start`.
6. Open the local URL printed by Angular, usually `http://localhost:4200`.

## Demo account note
This project is a front-end learning demo. Account details are stored in the current browser's local storage as plain text. Do not use real passwords or personal information. A real production website should use a secure backend, password hashing, server-side authentication, and a real payment provider.

## Troubleshooting
If Angular reports a dependency or cache issue, stop the server and run:
`npm install`
then
`npm start`
