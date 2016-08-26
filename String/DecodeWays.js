/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s.length < 1) {
        return 0;
    }
    var dp = Array(s.length).fill(0);
    if (s[0] >= '1' && s[0] <= '9') {
        dp[0] = 1;
    } else {
        dp[0] = 0;
    }

    for (var i = 1; i < s.length; i++) {
        if (s[i] >= '1' && s[i] <= '9') {
            dp[i] += dp[i - 1];
        }
        var num = parseInt(s.substr(i - 1, 2));
        if (num >= 10 && num <= 26) {
            if (i === 1) {
                dp[i] += 1;
            } else {
                dp[i] += dp[i - 2];
            }
        }
    }

    return dp[s.length - 1];
};
