/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [],
        tmp = [];
    for (var i = 0; i <= rowIndex; i++) {
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[j] = 1;
            } else {
                res[j] = tmp[j - 1] + tmp[j];
            }
        }
        tmp = [].concat(res);
        console.log(tmp);
    }

    return res;
};
