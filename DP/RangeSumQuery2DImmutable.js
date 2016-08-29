/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.arr = matrix;
    if (this.arr.length < 1) {
        return 0;
    }
    this.dp = [];


    for (var i = 0; i <= this.arr.length; i++) {
        var tmp = Array(this.arr[0].length + 1).fill(0);
        this.dp[i] = tmp;
    }

    for (var row = 1; row <= this.arr.length; row++) {
        for (var col = 1; col <= this.arr[0].length; col++) {
            this.dp[row][col] = this.dp[row - 1][col] + this.dp[row][col - 1] - this.dp[row - 1][col - 1] + this.arr[row - 1][col - 1];
        }
    }



};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
