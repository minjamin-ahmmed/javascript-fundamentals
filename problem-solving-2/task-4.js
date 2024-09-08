function averagePhonePrice(phones) {

    let sum = 0;
    for (let phone of phones) {
        sum = sum + phone.price
    }

    let average = sum / phones.length;
    return average.toFixed(1);


}

let phones = [
    { model: "Iphone 12", brand: "Iphone", price: 95000 },
    { model: "A55", brand: "Samsung", price: 40000 },
    { model: "Reno 8", brand: "Oppo", price: 26000 },
    { model: "Lokkori", brand: "Nokia", price: 35000 },
    { model: "Iphone 13", brand: "Iphone", price: 105000 },
    { model: "cholena ar", brand: "HTC", price: 48000 },
]

let output = averagePhonePrice(phones);
console.log(output);