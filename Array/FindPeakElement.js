/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    /**** solution 1 *******/
    var res = nums[0];
    for (var i = 0; i < nums.length - 1; i++) {
        if (i === 0 && nums[i] > nums[i + 1]) {
            return i;
        }

        if (i === nums.length - 2 && nums[i] < nums[i + 1]) {
            return (i + 1);
        }

        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }

    return i;

    /**** solution 2 *******/

    if (nums.length === 1) {
        return 0;
    }

    var left = 0,
        right = nums.length - 1,
        res = 0;

    while (left <= right) {
        var mid = parseInt((left + right) / 2);
        if (((mid === 0 || nums[mid] > nums[mid - 1])) && (mid === (nums.length - 1) || nums[mid] > nums[mid + 1])) {
            return mid;
        } else if (mid > 0 && nums[mid - 1] > nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return mid;
};
