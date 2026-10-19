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

function changeQuantity(cart, id, quantity) {
  const product = cart.find((item) => item.id === id);
  if (!product) return cart;
  if (quantity === 0 || quantity > product.stock) {
    throw new RangeError();
  }
  product.quantity = quantity;
  return cart;
}

function removeFromCart(cart, id) {
  cart = cart.filter((item) => item.id !== id);
  return cart;
}

function calculateCartSubtotal(cart) {
  if (cart.length === 0) return 0;

  const sumSubtotal = cart.reduce((total, item) => {
    const subtotal = item.price * item.quantity;
    return total + subtotal;
  }, 0);

  return sumSubtotal;
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
