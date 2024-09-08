function celciusToFarenheit(celcius) {
    let farenheit = (celcius * (9 / 5)) + 32;
    return farenheit;

}

let temperature = 37;
let output = celciusToFarenheit(temperature);
console.log(`${temperature} degree into farenheit is ${output}`);