
function oddAverage(numbers) {

    let oddNumbers = []
    for (let number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number)
        }
    }
    let sum = 0;
    for (let item of oddNumbers) {
        sum = sum + item;
    }

    let length = oddNumbers.length
    let average = sum / length;

    return average;
}


let numbers = [19, 45, 98, 102, 11, 21, 32, 41]
let output = oddAverage(numbers)
console.log(output)