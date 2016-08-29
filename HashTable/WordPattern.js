/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' ');
    if (pattern.length !== arr.length) {
        return false;
    }

    var ptn = {},
        word = {};
    for (var i = 0; i < pattern.length; i++) {
        if (!ptn.hasOwnProperty(pattern[i])) {
            ptn[pattern[i]] = arr[i];
        }

        if (!word.hasOwnProperty(arr[i])) {
            word[arr[i]] = pattern[i];
        }

        if (word[arr[i]] !== pattern[i] || ptn[pattern[i]] !== arr[i]) {
            return false;
        }
    }

    return true;
};
