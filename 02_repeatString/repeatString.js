const repeatString = function(string, num) {
    let mainString = ''

    if (num < 0) {
        return mainString = 'ERROR'
    }
    
    for (i = 0 ; i < num ; i++) {
        mainString += string
    }

    return mainString
};

// Do not edit below this line
module.exports = repeatString;
