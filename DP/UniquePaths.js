/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m < 1 || n < 1) {
        return 0;
    }
    var dp = Array(n).fill(1);
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];

};
