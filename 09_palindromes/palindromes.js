const palindromes = function (palindrome) {
    
    let string = palindrome
                    .replace(/[^A-Za-z0-9]/g, "")                
                    .toLowerCase()
    
    let reverse = string
                    .split("")
                    .reverse()
                    .join("")

    return string === reverse;

};

// Do not edit below this line
module.exports = palindromes;
