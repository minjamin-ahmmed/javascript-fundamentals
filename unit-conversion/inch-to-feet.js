//Inch to Feet Conversion

// function inchToFeet(inch) {

//     let result = inch / 12;
//     return result
// }

// let output = inchToFeet(75)
// console.log(output)

//Inch to feet with string return
// 6ft 3inch

function inchToFeet(inch) {

    let feetFraction = inch / 12;
    let feetNumber = parseInt(feetFraction);

    let inchRemaining = inch % 12;
    let result = `${feetNumber} ft ${inchRemaining} inch`
    return result;


}

let output = inchToFeet(75);
console.log(output);