/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    getComb(n, 0, 0, [], res);
    return res;
};

function getComb(n, left, right, path, res) {
    var tmp = path.concat();
    if (left === n && right === n) {
        res.push(tmp.join(''));
        return;
    }

    if (left < n) {
        tmp.push('(');
        getComb(n, left + 1, right, tmp, res);
        tmp.pop()
    }

    if (right < left) {
        tmp.push(')');
        getComb(n, left, right + 1, tmp, res);
        tmp.pop();
    }
}
