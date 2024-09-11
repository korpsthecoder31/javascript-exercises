const removeFromArray = function(array, ...args) {
    
    const newArray = [];

    for (const element of array) {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;

}

// ODIN PROJECT SOLUTION BELOW

//    array.forEach(element => {
//      if (!args.includes(element)) {
//        newArray.push(element)
//      } 
//    });
//    return newArray;


// Do not edit below this line
module.exports = removeFromArray;
