//Normal Logic
function leapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return "This year is leapYear"
    }

    else if (year % 400 === 0) {
        return "This year is leapYear"
    }
    else {
        return "Not Leap Year"
    }

}

let output = leapYear(2000);
console.log(output)