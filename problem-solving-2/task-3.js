function calculateElectronicsBudget(laptop, tablets, mobile) {

    let laptopPrice = 35000
    let tabletPrice = 15000
    let mobilePrice = 20000

    let totalLaptopPrice = laptop * laptopPrice
    let totalTabletPrice = tablets * tabletPrice
    let totalMobilePrice = mobile * mobilePrice

    let totalAmount = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return totalAmount;
}

let output = calculateElectronicsBudget(1, 1, 2)
console.log(output)