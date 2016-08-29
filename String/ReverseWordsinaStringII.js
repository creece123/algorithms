/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    str.reverse();
    for (var i = 0; i < str.length; i++) {
        var j = i;
        while (str[j] !== ' ' && j < str.length) {
            j++;
        }
        for (let ll = i, rr = j - 1; ll < rr; ll++, rr--) {
            [str[ll], str[rr]] = [str[rr], str[ll]];
        }
        i = j;
    }
};
