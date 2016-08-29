/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var left = 0,
        right = nums.length;

    while (left < right) {
        var mid = parseInt((left + right) / 2);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[mid] < nums[right - 1]) {
            if (target > nums[mid] && target <= nums[right - 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else if (nums[mid] > nums[right - 1]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            right--;
        }
    }

    return false;
};
