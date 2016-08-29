/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        var left = 0,
            right = n - 1;
        while (left < right) {
            if (knows(left, right)) {
                left++;
            } else {
                right--;
            }
        }

        for (var i = 0; i < n; i++) {
            if (i !== left) {
                if (!knows(i, left) || knows(left, i)) {
                    return -1;
                }
            }
        }

        return left;
    };
};
