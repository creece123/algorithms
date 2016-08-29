/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else if (num % 3 === 0) {
            num /= 3;
        } else if (num % 5 === 0) {
            num /= 5;
        } else {
            break;
        }
    }

    return num === 1;
};
