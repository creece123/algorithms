/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return "";
    }
    var res = strs[0].split('');
    for (var i = 1; i < strs.length; i++) {
        var cur = 0;
        while (cur < res.length) {
            if (res[cur] !== strs[i][cur]) {
                break;
            }
            cur++;
        }

        res.length = cur;
    }

    return res.join('');
};
