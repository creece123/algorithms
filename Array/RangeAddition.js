/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    var res = Array(length + 1).fill(0);
    for (var i = 0; i < updates.length; i++) {
        var ops = updates[i];
        res[ops[0]] += ops[2];
        res[ops[1] + 1] -= ops[2];
    }

    for (i = 1; i < length; i++) {
        res[i] += res[i - 1];
    }
    res.length = length;

    return res;
};
