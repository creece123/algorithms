/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var sum = 0,
        carry = 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = parseInt(sum / 10);
    }

    if (carry !== 0) {
        digits.unshift(carry);
    }

    return digits;

};
