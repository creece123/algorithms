/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length < 1 || !s) {
        return 0;
    }
    var dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    var preNum = 0;

    for (var i = 1; i <= s.length; i++) {
        var curNum = s[i - 1] - '0';
        if (curNum !== 0) {
            dp[i] += dp[i - 1];
        }

        if (preNum > 0 && (preNum * 10 + curNum) <= 26) {
            dp[i] += dp[i - 2];
        }

        preNum = curNum;
    }


    return dp.pop();
};
