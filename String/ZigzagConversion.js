/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }

    var res = '',
        zigSize = 2 * (numRows - 1);
    for (let i = 0; i < numRows; i++) {
        for (let base = i; base < s.length; base += zigSize) {
            res += s[base];
            if (i > 0 && i < (numRows - 1)) {
                let ti = base + zigSize - 2 * i;
                if (ti < s.length) {
                    res += s[ti];
                }
            }
        }
    }

    return res;
};
