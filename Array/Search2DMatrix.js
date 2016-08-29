/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row = matrix.length - 1;
    while (row >= 0) {
        if (target >= matrix[row][0]) {
            for (var j = 0; j < matrix[0].length; j++) {
                if (matrix[row][j] === target) {
                    return true;
                }
            }
            return false;
        } else {
            row--;
        }
    }

    return false;
};
};
