/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0,
        right = nums.length - 1,
        res = 0;
    while (left <= right) {
        if (left === right) {
            return nums[left];
        }
        var mid = parseInt((left + right) / 2);


        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        }
    }

};
