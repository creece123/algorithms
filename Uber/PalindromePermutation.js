/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var hash = {},
        odd = 0;
    for (var i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }

    for (var k in hash) {
        if (hash[k] % 2 === 0) {
            continue;
        } else {
            odd++;
        }
    }

    return odd <= 1;
};
