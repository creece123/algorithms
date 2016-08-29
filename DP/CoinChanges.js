/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }
    var dp = Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (var i = 0; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (i + coins[j] <= amount && dp[i] !== Number.MAX_VALUE) {
                dp[i + coins[j]] = Math.min(dp[i + coins[j]], dp[i] + 1);
            }
        }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
