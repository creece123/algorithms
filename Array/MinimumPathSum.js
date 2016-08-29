/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var row = grid.length, col = 0;
    
    if(row === 0){
        return 0;
    } else {
        col = grid[0].length;
    }
    
    var dp = Array(col+1).fill(2147483647);
    
    dp[1] = 0;
    
    for(i = 1; i <= row; i++){
        for(var j = 1; j <= col; j++){
            dp[j] = grid[i-1][j-1] + Math.min(dp[j], dp[j-1]);
        }
    }
    
    return dp[col];
    
};