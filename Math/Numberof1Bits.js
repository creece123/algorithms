/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            count++;
        }
        n = Math.floor(n / 2);
    }
    return count;
};
