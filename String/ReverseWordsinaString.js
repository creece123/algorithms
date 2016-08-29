/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    if (!str || str.length < 2) {
        return str;
    }
    var res = '',
        word = '';
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            if (i < str.length - 1 && str[i + 1] !== ' ') {
                word = word.split('').reverse().join('');
                res += word + ' ';
                word = '';
            }

        } else {
            word += str[i];
        }
    }
    if (str[0] !== ' ') {
        word = word.split('').reverse().join('');
        res += word;
    }
    return res;


};
