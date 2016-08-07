/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0,
        i = 0;
    for (; i < prices.length - 1; i++) {
        var j = i + 1;
        if (prices[j] > prices[i]) {
            while (j < prices.length) {
                res = Math.max(res, prices[j] - prices[i]);
                j++;
            }
        } else {
            i = j - 1;
        }
    }

    return res;
};
