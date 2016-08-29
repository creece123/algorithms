/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dict = ['M', "CM", 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        res = '';
    for (var i = 0; i < digit.length; i++) {
        if (num >= digit[i]) {
            var count = Math.floor(num / digit[i]);
            num %= digit[i];
            for (var j = 0; j < count; j++) {
                res += dict[i];
            }
        }
    }

    return res;

};
