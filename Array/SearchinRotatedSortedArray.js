/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0,
        right = nums.length;
    while (left < right) {
        var mid = parseInt((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }

        //ascending left 
        if (nums[mid] > nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            //ascending right
            if (target > nums[mid] && target <= nums[right - 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }

    return -1;
};
