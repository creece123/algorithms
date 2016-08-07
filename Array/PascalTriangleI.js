/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    for (var i = 0; i < numRows; i++) {
        var tmp = [];
        for (var j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                tmp[j] = 1;
            } else {
                tmp[j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
        res[i] = tmp;
    }

    return res;
};
