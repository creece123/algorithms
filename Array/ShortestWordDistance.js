/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var diff = words.length + 2,
        idx1 = -1,
        idx2 = -1;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            idx1 = i;
            if (idx2 !== -1) {
                diff = Math.min(diff, Math.abs(idx1 - idx2));
            }
        }

        if (words[i] === word2) {
            idx2 = i;
            if (idx1 !== -1) {
                diff = Math.min(diff, Math.abs(idx1 - idx2));
            }
        }
    }

    return diff;
};
