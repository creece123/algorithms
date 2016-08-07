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
            valid++;
            var tmp = nums[cur];
            nums[cur] = nums[valid];
            nums[valid] = tmp;
            cur++;
        }
    }

    return valid + 1;
};
