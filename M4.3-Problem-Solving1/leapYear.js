// find the leap year 
// logic are very simple 
// 1. if year divisible by 100 and 400 or not divisible by 100 and divisible by 4 ;
function leapYear(year) {
    if((year % 100 === 0 && year % 400 === 0) || (year % 100 != 0 && year % 4 == 0)){
        return true;
    }
    return false;
}

console.log(leapYear(2000));
