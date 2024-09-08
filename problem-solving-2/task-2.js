function smallestName(names) {

    let tinyName = names[0];

    for (let name of names) {
        if (name.length < tinyName.length) {
            tinyName = name
        }
    }

    return tinyName;



}

let names = ['rahim', 'robin', 'rafi', 'ron', 'rashed']
let output = smallestName(names)
console.log(output)