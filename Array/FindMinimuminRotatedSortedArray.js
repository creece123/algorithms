/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0,
        right = nums.length - 1;
    while (left < right) {
        //1) left === right 2)left+1 === right
        var mid = parseInt((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }
    return nums[left];

    /***************************************/
    /**
     * @param {number[]} nums
     * @return {number}
     */
    if (nums.length == 1) return nums[0];

    var left = 0,
        right = nums.length;
    while (left < right) {
        var mid = parseInt((left + right) / 2);
        if (nums[mid] <= nums[right - 1]) {
            if (mid > 0 && nums[mid] < nums[mid - 1]) return nums[mid];
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];

};
