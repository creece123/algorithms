/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length < 1) {
        return [];
    }
    var dict = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
            '1': ['1']
        },
        res = [];
    getComb(digits, dict, 0, [], res);
    return res;
};

function getComb(digits, dict, idx, path, res) {
    var tmp = path.concat();
    if (tmp.length === digits.length) {
        res.push(tmp.join(''));
        return;
    }

    for (var i = idx; i < digits.length; i++) {
        var key = digits[i];
        var arr = dict[key];
        for (var j = 0; j < arr.length; j++) {
            tmp.push(arr[j]);
            getComb(digits, dict, i + 1, tmp, res);
            tmp.pop();
        }
    }
}
