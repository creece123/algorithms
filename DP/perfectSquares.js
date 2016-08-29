/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = Array(n + 1).fill(2147483648);

    for (var i = 1; i * i <= n; i++) {
        dp[i * i] = 1;
    }

    for (i = 1; i <= n; i++) {
        for (var j = 1; i + j * j <= n; j++) {
            dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j]);
        }
    }

    console.log(dp);

    return dp[n];
};
