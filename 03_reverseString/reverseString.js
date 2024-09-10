const reverseString = function(string) {
    let reverseWord = ''
    let letters = string.split('')

    // below can be condensed using .reverse() method

    for (i = letters.length-1 ; i >= 0 ; i--) { 
        reverseWord += letters[i]
    }
    return reverseWord
};

// return string.split("").reverse().join(""); - ODIN PROJECT SOLUTION

// Do not edit below this line
module.exports = reverseString;
