function discount(quantity) {
    if (quantity <= 100) {
        let totalPrice = quantity * 100;
        return totalPrice;
    }

    else if (quantity <= 200) {
        let totalPrice = quantity * 90;
        return totalPrice
    }
    else {
        let totalPrice = quantity * 70;
        return totalPrice
    }
}

let output = discount(201);
console.log(output);