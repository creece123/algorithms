/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    nums.sort(function(a, b) {
        return a - b; });
    for (var i = 0; i < nums.length; i++) {
        var left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                var tmp = [nums[i], nums[left], nums[right]];
                res.push(tmp);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }

            while (nums[i] === nums[i + 1]) {
                i++;
            }
        }
    }

    return res;

};
