/* 
* For First 100 Quantity price will be 100 Tk

* For second 100 Quantity price will be 90 tk. But you have to remind that price of first 100 will be same as before. discount will be apply after 100 quantity.

* for third 100 quantity price will be 70 tk. but you have to remind that. For first 100 quantity price will be 100 tk, for second 100 quantity price will be 90 tk. And Discount will be apply after 200 quantity

*/

function multiLayeredDiscount(quantity) {
    let forFirstHundred = 100;
    let forSecondHundred = 90;
    let forThirdHundred = 70;

    if (quantity <= 100) {
        let total = quantity * forFirstHundred;
        return total;
    }

    else if (quantity <= 200) {

        let priceForFirstHundred = 100 * forFirstHundred;

        let remainingQuantity = quantity - 100;

        let remainingTotal = remainingQuantity * forSecondHundred;

        let total = priceForFirstHundred + remainingTotal
        return total;

    }

    else {
        let priceForFirstHundred = 100 * forFirstHundred;
        let priceForSecondHundred = 100 * forSecondHundred;

        let remainingQuantity = quantity - 200;

        let remainingTotal = remainingQuantity * forThirdHundred;
        let total = priceForFirstHundred + priceForSecondHundred + remainingTotal;
        return total
    }


}

let output = multiLayeredDiscount(212);
console.log(output)