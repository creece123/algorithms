/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return 10;
    }

    n = Math.min(10, n), res = 10, base = 9;

    for (var i = 1; i < n; i++) {
        base *= (10 - i);
        console.log(base);
        res += base;
    }

    return res;
};
