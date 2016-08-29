/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || !s) {
        return '';
    }

    if (s === t) {
        return s;
    }
    var hash = {};
    for (var i = 0; i < t.length; i++) {
        if (hash.hasOwnProperty(t[i])) {
            hash[t[i]]++;
        } else {
            hash[t[i]] = 1;
        }
    }


    var found = {},
        start = 0,
        end = 0,
        min = s.length + 1,
        count = 0,
        res = '';
    while (end < s.length) {
        if (hash.hasOwnProperty(s[end])) {
            if (found.hasOwnProperty(s[end])) {
                if (found[s[end]] < hash[s[end]]) {
                    count++;
                }
                found[s[end]]++;
            } else {
                found[s[end]] = 1;
                count++;
            }
        }

        if (count === t.length) {
            var tmp = s[start];
            while (!hash.hasOwnProperty(tmp) || found[tmp] > hash[tmp]) {
                if (found[tmp] > hash[tmp]) {
                    found[tmp]--;
                }
                start++;
                tmp = s[start];
            }

            if (end - start + 1 < min) {
                res = s.substring(start, end + 1);
                min = end - start + 1;
            }
        }


        end++;
    }

    return res;


};
