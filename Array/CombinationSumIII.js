/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = [];
    findCom(k, n, 1, [], res);
    return res;
};

function findCom(k, n, idx, path, res) {
    var tmp = [];
    if (path.length === k && n === 0) {
        tmp = path.concat();
        res.push(path);
    }

    for (var i = idx; i <= 9; i++) {
        tmp = [].concat(path);
        tmp.push(i);
        findCom(k, n - i, i + 1, tmp, res);
    }
}
