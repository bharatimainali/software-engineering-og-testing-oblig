function isLeapYear(year) {
    if (year % 400 == 0) { // if divisible by 400, then leap year
        return true;
    }
    else if (year % 100 == 0) { // if divisible by 100, but not 400, then not leap year
        return false;
    }
    else if(year % 4 == 0){ // if divisible by 4, but not 100, then leap year
        return true;
    }
    else { // all other years are false
        return false;
    }
}

exports.isLeapYear = isLeapYear;

// let the user specify year in console when running program, or choose 2022 by default
let year = process.argv[2] || 2020;

//logging answer
console.log("Is year " + year + " a leap year?");
console.log(isLeapYear(year));