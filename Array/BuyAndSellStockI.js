/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var curMin = prices[0],
        profit = 0;
    for (var i = 1; i < prices.length; i++) {
        curMin = Math.min(curMin, prices[i]);
        profit = Math.max(profit, prices[i] - curMin);
    }
    return profit;
};
