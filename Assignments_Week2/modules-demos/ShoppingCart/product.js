//E-Commerce Shopping Cart System :
      //Building a shopping cart like Amazon or Flipkart

//Requirements:
      //Create a modular shopping system with 5 files:

           //i. product.js - Product catalog


// Product database (simulated)
const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
                          
// TODO: Implement these functions
                          
export function getProductById(id) {
// Find and return product by ID
const product=products.find((each)=>each.id===id)
return product
}

export function getAllProducts() {
 // Return all products
 return products
}
            
console.log(getProductById(6))
                          
export function getProductsByCategory(category) {
// Filter products by category
const filteredProducts=products.filter((each)=>each.category===category)
return filteredProducts

}

export function searchProducts(query) {
// Search products by name (case-insensitive)
const productName=products.find((each)=>(each.name).toLowerCase()===query.toLowerCase())
return productName
}


export function checkStock(productId, quantity) {
// Check if product has enough stock
const isEnoughjStock=products.find((each)=>each.id===productId)
// Return true/false
if(isEnoughjStock.stock>=quantity){
    return true
}
else{
    return false
}

}


export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
const reduceStock=products.forEach(element => {
    if(productId===element.id ){
        element.stock=element.stock-quantity
    }
});

}


 
                         