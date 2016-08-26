/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var hash = {};
    if (s.length !== t.length) {
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }
    for (i = 0; i < t.length; i++) {
        if (hash.hasOwnProperty(t[i])) {
            hash[t[i]]--;
            if (hash[t[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};
