/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n < 1) {
        return "";
    }

    var ret = '1';
    for (var i = 2; i <= n; i++) {
        var temp = "",
            count = 1,
            prev = ret[0];
        for (var j = 1; j < ret.length; j++) {
            if (prev === ret[j]) {
                count++;
            } else {
                temp += count.toString();
                temp += prev;
                prev = ret[j];
                count = 1;
            }
        }

        temp += count.toString();
        temp += prev;
        ret = temp;

    }

    return ret;

    /*************************/
    var res = [1];
    for (var i = 2; i <= n; i++) {
        var tmp = [];
        for (var j = 0; j < res.length; j++) {
            var count = 1;
            while (res[j] === res[j + 1] && j < res.length - 1) {
                count++;
                j++;
            }
            tmp.push(count);
            tmp.push(res[j]);
        }
        res = [].concat(tmp);
    }

    return res.join('');

};
