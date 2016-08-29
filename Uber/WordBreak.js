/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (dp[j] && wordDict.has(s.substring(j, i + 1))) {
                dp[i + 1] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
