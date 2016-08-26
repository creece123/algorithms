/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(a !== 0){
        var sum = a ^ b;
        a = (a & b) << 1;
        b = sum;
    }
    
    return b;
};