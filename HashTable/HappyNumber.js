/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var hash = {};
    while (true) {
        var newN = 0;
        while (n > 0) {
            var num = n % 10;
            newN += num * num;
            n = parseInt(n / 10);
        }
        n = newN;
        if (n === 1) {
            return true;
        }
        if (hash.hasOwnProperty(n)) {
            break;
        } else {
            hash[n] = true;
        }
    }
    return false;
};
