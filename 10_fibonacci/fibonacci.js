const fibonacci = function(num) {

    let array = [];
    let index = parseInt(num)

    if (index === 0) return 0;

    if (index < 0) return "OOPS";
    
    for (i = 0 ; i < index ; i++) {
        if (i < 2) {
            array.push(1);
        }        

        if (i>=2) {
            array.push((array[i-2]) + (array[i-1]));
        }
    }

    return array[index - 1];

};

// Do not edit below this line
module.exports = fibonacci;
