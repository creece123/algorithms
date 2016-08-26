/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry = 0,
        i = a.length - 1,
        j = b.length - 1,
        res = '';
    while (i >= 0 || j >= 0) {
        var sum = carry;
        if (i >= 0) {
            sum += (a[i] - '0');
            i--;
        }

        if (j >= 0) {
            sum += (b[j] - '0');
            j--;
        }

        carry = Math.floor(sum / 2);
        res = '' + (sum % 2) + res;
    }

    if (carry !== 0) {
        res = '' + carry + res;
    }

    return res;
};
