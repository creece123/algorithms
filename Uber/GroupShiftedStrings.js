/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    strings.sort(function(a, b) {
        return a[0] > b[0]; });
    var hash = {},
        res = [];
    for (var i = 0; i < strings.length; i++) {
        var key = '',
            tmp = strings[i];
        for (var j = 1; j < tmp.length; j++) {
            var diff = (tmp.charCodeAt(j) - tmp.charCodeAt(j - 1) + 26) % 26;
            key += ('' + diff);
        }

        if (hash.hasOwnProperty(key)) {
            hash[key].push(tmp);
        } else {
            hash[key] = [tmp];
        }
    }

    for (var k in hash) {
        res.push(hash[k]);
    }

    return res;
};
