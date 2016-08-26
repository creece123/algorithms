/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var valid = 0,
        cur = valid + 1;
    while (cur < nums.length) {
        if (nums[cur] === nums[valid]) {
            cur++;
        } else {
            nums[++valid] = nums[cur++];
        }
    }

    return valid + 1;
};
