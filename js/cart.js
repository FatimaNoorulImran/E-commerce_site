// ── CART STATE & LOGIC ──
let cart = JSON.parse(localStorage.getItem('zevar_cart') || '[]');

function saveCart() {
  localStorage.setItem('zevar_cart', JSON.stringify(cart));
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, cat: product.cat, qty });
  }
  saveCart();
  updateCartCount();
  if (typeof renderGrid === 'function') renderGrid();
  showToast(`${product.name} added to cart`);
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartCount();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartCount();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = cart.reduce((s, c) => s + c.qty, 0);
}

function getCartTotal() {
  return cart.reduce((s, c) => s + c.price * c.qty, 0);
}

function getCartItemCount() {
  return cart.reduce((s, c) => s + c.qty, 0);
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartCount();
}

// ── TOAST ──
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = (type === 'success' ? '✓ ' : '✓ ') + message;
  toast.className = 'toast show' + (type ? ' ' + type + '-toast' : '');
  setTimeout(() => toast.className = 'toast' + (type ? ' ' + type + '-toast' : ''), 2500);
}

// ── STARS ──
function starsHTML(rating, reviews) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += i <= Math.round(rating) ? '★' : '☆';
  return `<span>${s}</span> <span style="color:var(--muted);font-size:0.8rem">(${rating}) · ${reviews} reviews</span>`;
}