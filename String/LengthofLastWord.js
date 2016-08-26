/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || s.length < 1) {
        return 0;
    }
    var count = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (count === 0 && !isValid(s[i])) {
            continue;
        } else if (isValid(s[i])) {
            count++;
        } else if (count !== 0 && !isValid(s[i])) {
            break;
        }
    }

    return count;
};

function isValid(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
