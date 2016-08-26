/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length,
        n = 0;

    if (m < 1) {
        return 0;
    } else {
        n = obstacleGrid[0].length;
    }

    if (n < 1 || obstacleGrid[0][0] === 1) {
        return 0;
    }

    var dp = Array(n).fill(1);
    for (var j = 1; j < n; j++) {
        dp[j] = obstacleGrid[0][j] === 1 ? 0 : dp[j - 1];
    }

    for (var i = 1; i < m; i++) {
        dp[0] = obstacleGrid[i][0] === 1 ? 0 : dp[0];
        for (j = 1; j < n; j++) {
            dp[j] = obstacleGrid[i][j] === 1 ? 0 : dp[j - 1] + dp[j];
        }
    }

    return dp[n - 1];
};
