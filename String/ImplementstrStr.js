/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length < 1 || haystack === needle) {
        return 0;
    }
    var cur = 0;
    while (cur < (haystack.length - needle.length + 1)) {
        if (haystack[cur] === needle[0]) {
            var i = 0;
            while (i < needle.length) {
                if (needle[i] !== haystack[cur + i]) {
                    break;
                } else {
                    i++;
                }
            }

            if (i === needle.length) {
                return cur;
            }
        }
        cur++;
    }

    return -1;

};
