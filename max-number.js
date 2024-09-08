function maxNumber(numbers) {

    let maximumNumber = numbers[0];

    for (let number of numbers) {
        if (number > maximumNumber) {
            maximumNumber = number;
        }
    }

    return maximumNumber;



}

let array = [102, 122, 145, 100, 145.5, 100, 44]
let output = maxNumber(array);
console.log(output)


//Find Minimum Number
function minNumber(array) {

    let minimumNumber = array[0];
    for (let item of array) {
        if (item < minimumNumber) {
            minimumNumber = item;
        }
    }

    return minimumNumber;

}

let numbers = [0.1, 0.01, 0.001, 0.0001]
let outputOfMinNumber = minNumber(numbers);
console.log(outputOfMinNumber);