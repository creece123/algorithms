/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    var res = '';
    for (let i = 0; i < strs.length; i++) {
        res += ('' + strs[i].length + '#' + strs[i]);
    }

    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    var res = [],
        cur = 0;
    while (cur < s.length) {
        var len = 0;
        while (s[cur] >= '0' && s[cur] <= '9') {
            len = len * 10 + (s[cur] - '0');
            cur++;
        }
        let start = cur + 1,
            end = start + len;
        res.push(s.substring(start, end));
        cur = end;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
