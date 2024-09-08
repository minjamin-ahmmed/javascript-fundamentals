function uniqueArray(array) {

    const unique = [];

    for (let item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }

    console.log(unique)
}


let numbers = [10, 12, 14, 15, 10, 12, 20, 15, 22];
let string = ["Sheefat", "Sheerat", "Sheeqat", "Sheefat", "Sheerat", "Shihab"];

let output = uniqueArray(string)
console.log(output)