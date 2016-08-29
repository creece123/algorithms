/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 1,
        res = nums[0];
    for (var i = 1; i < nums.length; i++) {
        // note these two situations to change the value of res: count = 0 or nums[i] === res
        if (count === 0 || res === nums[i]) {
            res = nums[i];
            count++;
        } else {
            count--;
        }
    }

    return res;
};
