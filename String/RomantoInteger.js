/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var prev = getNumber(s[0]),
        res = prev;
    for (var i = 1; i < s.length; i++) {
        var curNum = getNumber(s[i]);
        if (curNum <= prev) {
            res += curNum;
        } else {
            res = res - 2 * prev + curNum;
        }

        prev = curNum;

    }

    return res;
};

function getNumber(c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
