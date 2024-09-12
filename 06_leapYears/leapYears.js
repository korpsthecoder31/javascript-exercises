const leapYears = function(year) {

    if (year % 4 !== 0) {
        return false
    } else if (year % 400 === 0) {
        return true
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
    } else return false
    
};
      
// Odin project solution: Consider next time to assign boolean to variables 

// const isYearDivisibleByFour = year % 4 === 0;
//  const isCentury = year % 100 === 0;
//  const isYearDivisibleByFourHundred = year % 400 === 0;


// Do not edit below this line
module.exports = leapYears;
