/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length,
        maxIndex = 0;
    for (var i = 0; i < len; i++) {
        if (i > maxIndex || maxIndex >= len - 1) {
            break;
        }

        maxIndex = Math.max(maxIndex, i + nums[i]);
    }

    return (maxIndex >= len - 1) ? true : false;
};
