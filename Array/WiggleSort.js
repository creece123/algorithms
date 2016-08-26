/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        if ((i % 2 === 0 && nums[i] > nums[i - 1]) || (i % 2 !== 0 && nums[i] < nums[i - 1])) {
            var tmp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = tmp;
        }
    }
};
