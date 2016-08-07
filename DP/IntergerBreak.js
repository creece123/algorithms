/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    var dp = Array(n + 1).fill(0);

    dp[1] = 1;
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j + j <= i; j++) {
            dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
        }
    }

    return dp[n];
};
