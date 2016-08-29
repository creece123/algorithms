/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    var div = 1;
    while (Math.floor(x / div) >= 10) {
        div = div * 10;
    }

    while (x !== 0) {
        var left = Math.floor(x / div),
            right = x % 10;
        if (right !== left) {
            return false;
        }

        x = x % div;
        x = Math.floor(x / 10);
        div /= 100;
    }



    return true;

};
