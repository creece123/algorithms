/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var res = nums.length + 1,
        sum = 0,
        left = 0,
        right = 0;
    while (right < nums.length) {
        while (sum < s) {
            sum += nums[right++];
        }

        while (sum >= s) {
            sum -= nums[left++];
            res = Math.min(res, right - left + 1)
        }
    }

    return res === nums.length + 1 ? 0 : res;

};
