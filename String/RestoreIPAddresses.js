/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = [];
    buildIp(s, 0, [], res);
    return res;
};

function buildIp(s, idx, path, res) {
    var tmp = path.concat();
    if (tmp.length === 4) {
        if (idx === s.length) {
            res.push(tmp.join('.'));
        }
        return;
    }
    var curNum = '';
    for (var i = idx; i < s.length && i < i + 3; i++) {
        curNum += s[i];
        tmp = path.concat();
        if (isValid(curNum)) {
            tmp.push(curNum);
            buildIp(s, i + 1, tmp, res);
        }
    }
}

function isValid(s) {
    if (s.length === 0 || s.length > 3) {
        return false;
    }

    if (s[0] === '0' && s.length > 1) {
        return false;
    }

    if (s.length === 3 && parseInt(s) > 255) {
        return false;
    }

    return true;
}
