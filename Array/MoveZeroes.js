/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var next = 0,
        cur = 0;
    while (cur < nums.length) {
        if (nums[cur] === 0) {
            cur++;
        } else {
            nums[next++] = nums[cur++];
        }
    }

    // next indicates that all elements before its position is non zero

    while (next < nums.length) {
        nums[next++] = 0;
    }
};
