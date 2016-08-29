/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var res = [1],
        i1 = 0,
        i2 = 0,
        i3 = 0;

    for (var i = 0; i < n; i++) {
        var a = res[i1] * 2,
            b = res[i2] * 3,
            c = res[i3] * 5;
        var m = Math.min(a, b, c);
        if (m === a) {
            i1++;
        }

        if (m === b) {
            i2++;
        }

        if (m === c) {
            i3++;
        }
        res.push(m);
    }

    return res[n - 1];
};
