function cheapestPhone(phone) {


    let cheapMobile = phone[0];
    for (let item of phone) {
        if (item.price < cheapMobile.price) {
            cheapMobile = item;
        }
    }

    return cheapMobile;



}

let mobile =
    [{ brandName: 'Samsung', camera: '48mp', processor: 'Snapdragon', price: 90000 },
    { brandName: 'Apple', camera: '12mp', processor: 'Bionic', price: 100000 },
    { brandName: 'Pixel', camera: '48mp', processor: 'Tensor', price: 50000 },
    { brandName: 'Oneplus', camera: '108mp', processor: 'Snapdragon', price: 30000 },
    { brandName: 'Redmi', camera: '48mp', processor: 'Mediatech', price: 22000 },
    { brandName: 'Realme', camera: '48mp', processor: 'helio', price: 12000 }
    ]

let output = cheapestPhone(mobile)
console.log(output)