/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hash = {},
        res = [];
    for (var i = 0; i < strs.length; i++) {
        if (strs[i] === '') {
            if (hash.hasOwnProperty('empty')) {
                hash.empty.push('');

            } else {
                hash.empty = [''];

            }
            continue;
        }
        var sorted = strs[i].split('').sort().join('');
        if (hash.hasOwnProperty(sorted)) {
            hash[sorted].push(strs[i]);
        } else {
            hash[sorted] = [strs[i]];
        }
    }

    for (var k in hash) {
        res.push(hash[k]);
    }

    return res;
};
