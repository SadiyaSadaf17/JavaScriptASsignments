import { reduceStock } from './product.js';
  import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
   // 1. Get cart items and total
 if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();
// 2. Apply discount if coupon provided
  let discountData = {
    discount: 0,
    finalTotal: subtotal
  };

  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, items);
  }

  // Reduce stock
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });
  
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: 'success',
    message: 'Order placed successfully'
  };
}
                          
export function validatePaymentMethod(method) {
 // Check if method is valid (card/upi/cod)
  return ['card', 'upi', 'cod'].includes(method);
}
                          
function generateOrderId() {
  // Generate random order ID
 return 'ORD' + Date.now();
}