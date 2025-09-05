// convert inch to feet
function inchToFeet(inch) {
    let feet = inch / 12;
    return feet
}

console.log(inchToFeet(69));

// convert inch to feet with inch 
function inchToFeet2(inch) {
    let feet = inch / 12;
    const feetFraction = parseInt(feet);
    let leftInch = inch % 12;
    let result = feetFraction + ' ft ' + leftInch + ' in';
    return result;
}

console.log(inchToFeet2(69));

