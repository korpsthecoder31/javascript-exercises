const sumAll = function(a, b) {

    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return 'ERROR';
    }

    let sum = 0;

    if (a > b) [a, b] = [b, a];     // provided under solutions of ODIN PROJECT used to swap values

    for (i = a ; i <= b ; i++) {
        sum += i;
    }
    return sum;

// My solution:

//    if (a < b) {
//            for (i = a ; i <= b ; i++) {
//                sum += i
//        }
//        return sum
//    } else  for (i = b ; i <= a ; i++) {
//                sum += i
//    }   return sum

};

// May also use below to swap out values

//  const temp = min;
//  min = max;
//  max = temp;

// Do not edit below this line
module.exports = sumAll;
