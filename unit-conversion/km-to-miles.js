// Killo meter to  miles
function kmToMiles(km) {
    let result = km * 0.621371;
    return result
}

let output = kmToMiles(160);
console.log(`160 Killometer is equal to ${output} miles`);

//Miles to Killometer
function milesToKm(miles) {
    let result = miles * 1.60932;
    return result
}
let miles = 100;
let display = milesToKm(miles);
console.log(`${miles} miles is equal to ${display} Killo meter`);