/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    var dp = [0, k, k * k, 0];
    if (n <= 2) {
        return dp[n];
    }
    for (var i = 3; i <= n; i++) {
        dp[3] = (k - 1) * (dp[1] + dp[2]);
        dp[1] = dp[2];
        dp[2] = dp[3];
    }

    return dp[3];
};
