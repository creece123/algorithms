/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 0 && n % 3 === 0) {
        n /= 3;
    }
    console.log(n);

    return n === 1;
};
