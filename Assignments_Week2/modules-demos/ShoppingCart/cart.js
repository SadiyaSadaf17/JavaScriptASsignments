import { getProductById, checkStock } from './product.js';
//ii. cart.js - Shopping cart operations

let cartItems = [];
export function addToCart(productId, quantity) {
// 1. Get product details
const getProduct=getProductById(productId)
// 2. Check stock availability
const getStockStatus=checkStock(productId,quantity)
// 3. Check if product already in cart
//    - If yes, update quantity
if(getProduct!=undefined){
    getProduct.quantity+=quantity
    return "Quantity increase"
}
else{ //    - If no, add new item
    cartItems.push({productId,quantity})
    return "Item Added Successfully"
}              
}

export function removeFromCart(productId) {
// Remove product from cart
cartItems=cartItems.filter((each)=>each.id!==productId)
return "Item Removed"
}
                          
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }

const item = cartItems.find(i => i.productId === productId);
if(!item){
    return "Item Not In Cart"
}
item.quantity=newQuantity
return "Quantity updated"

}
                       
export function getCartItems() {
// Return all cart items with product details
return cartItems.map((item)=>{
    const product=getProductById(item.productId)
    return {...product,quantity:item.quantity}
})
}
                          
 export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  const totalPrice=getCartItems().reduce((sum,item)=>sum+item.price*item.quantity,0)
  return totalPrice
  }
                          
 export function clearCart() {
  // Empty the cart
  cartItems=[]
 }