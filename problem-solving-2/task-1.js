function lowestNumber(array) {

    let minNumber = array[0];
    for (let item of array) {
        if (minNumber > item) {
            minNumber = item
        }
    }

    return minNumber;

}


let heights2 = [167, 190, 120, 165, 137];
let output = lowestNumber(heights2)
console.log(output)