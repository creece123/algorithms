/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates && candidates.length < 1) {
        return candidates;
    }
    candidates.sort(function(a, b) {
        return a - b; });

    var res = [],
        path = [];
    findCom(candidates, target, res, path, 0);

    return res;
};

function findCom(candidates, target, res, path, index) {
    var tmp = [];
    if (target === 0) {
        tmp = path.concat();
        res.push(tmp);
    }

    if (target < 0) {
        return;
    }

    for (var i = index; i < candidates.length; i++) {
        tmp = [];
        tmp = path.concat();
        tmp.push(candidates[i]);
        findCom(candidates, target - candidates[i], res, tmp, i);
        tmp.pop();
    }
}
