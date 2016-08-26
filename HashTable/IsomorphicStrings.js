/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var hashS = {},
        hashT = {};
    for (var i = 0; i < s.length; i++) {
        if (!hashS.hasOwnProperty(s[i])) {
            hashS[s[i]] = t[i];
        }

        if (!hashT.hasOwnProperty(t[i])) {
            hashT[t[i]] = s[i];
        }

        if (hashS[s[i]] !== t[i] || hashT[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};
