/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var res = 0,
        min = [];
    for (var i = 0; i < triangle[triangle.length - 1].length; i++) {
        min[i] = triangle[triangle.length - 1][i];
    }

    for (var row = triangle.length - 2; row >= 0; row--) {
        for (var col = 0; col < triangle[row].length; col++) {
            min[col] = Math.min(triangle[row][col] + min[col], triangle[row][col] + min[col + 1]);
        }
    }

    return min[0];
};
