/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var n = num1.length + num2.length - 2,
        res = Array(n + 2).fill(0);
    for (var i = 0; i < num1.length; i++) {
        for (var j = 0; j < num2.length; j++) {
            res[n - i - j] += (num1[i] - '0') * (num2[j] - '0');
        }
    }

    var carry = 0;
    for (i = 0; i < n + 2; i++) {
        res[i] += carry;
        carry = parseInt(res[i] / 10);
        res[i] %= 10;
    }

    i = n + 1;
    while (res[i] === 0) {
        i--;
    }

    if (i < 0) {
        return '0';
    }

    var str = '';
    for (; i >= 0; i--) {
        str += res[i];
    }

    return str;
};
