function shoppingCart(shoppings) {

    let total = 0;
    for (let shopping of shoppings) {

        let productCost = shopping.price * shopping.quantity
        total = total + productCost;
    }

    return total;
}

let products = [
    { name: 'Shampoo', price: 300, quantity: 3 },
    { name: 'Soap', price: 100, quantity: 2 },
    { name: 'Shirt', price: 500, quantity: 2 },
    { name: 'Pant', price: 1200, quantity: 1 },
    { name: 'Wallet', price: 600, quantity: 1 }
]

let output = shoppingCart(products)
console.log(output)