# Zevar — Pakistani Women's Fashion

A multi-page e-commerce website built as a 4-week web development capstone project.

## Live Demo
https://fatimanoorulimran.github.io/E-commerce_site/

## Pages
- **Home** — Hero, category grid, featured products
- **Shop** — All products with filter, sort, and search
- **Product Detail** — Individual product page with quantity selector
- **Cart** — Manage items, quantities, order summary
- **Checkout** — Form with validation and payment options
- **Order Success** — Confirmation with order ID

## Features
- Add/remove/update cart items (saved with localStorage)
- Filter by category, sort by price or rating, live search
- Checkout form validation (email, phone, required fields)
- Responsive design — works on mobile and desktop
- Toast notifications and breadcrumb navigation

## Tech Stack
HTML · CSS · Vanilla JavaScript · localStorage · Google Fonts

## How to Run
Just open `index.html` in your browser — no installation needed.

## Deploy to GitHub Pages
1. Push all files to a GitHub repo
2. Go to Settings → Pages
3. Select `main` branch → Save

## Project Structure
```
zevar/
├── index.html
├── style.css
├── js/
│   ├── data.js      # Product data
│   └── cart.js      # Cart logic & localStorage
└── pages/
    ├── shop.html
    ├── product.html
    ├── cart.html
    ├── checkout.html
    └── success.html
```
