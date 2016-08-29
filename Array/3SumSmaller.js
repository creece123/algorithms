/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var res = 0;
    nums.sort(function(a, b) {
        return a - b; });

    for (var i = 0; i < nums.length; i++) {
        var l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            var sum = nums[i] + nums[l] + nums[r];
            if (sum < target) {
                res += (r - l);
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};
