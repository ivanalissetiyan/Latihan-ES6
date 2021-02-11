// Membahas Object Literal

// Ambil element
const cart_items = document.getElementById('cart');

// ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("Iphone X 256gb", "Gadget");
// console.log(getProduct);

// ES6
function addProduct(name, category) {
    return {
     name,
     category
    }
}

var getProduct = addProduct("Iphone X 256gb", "Gadget");
cart_items.innerHTML = `Product: 1 ${getProduct.name} Category: ${getProduct.category}`;