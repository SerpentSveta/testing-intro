function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  const productInCart = cart.find((item) => item.id === product.id);
  if (quantity === 0 || quantity >= product.stock) {
    throw new RangeError();
  }
  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    const item = { ...product, quantity };
    cart.push(item);
  }

  return cart;
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
