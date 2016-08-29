/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (s.length === t.length) {
        return isOneEdit(s, t);
    }

    if (s.length === t.length + 1) {
        return isOneDelete(s, t);
    }

    if (t.length === s.length + 1) {
        return isOneDelete(t, s);
    }
    return false;
};

function isOneEdit(s, t) {
    var modified = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (modified) {
                return false;
            }

            modified = true;
        }
    }
    return modified;
}

function isOneDelete(s, t) {
    for (var i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            return s.substring(i + 1) === t.substring(i);
        }
    }

    return true;
}
