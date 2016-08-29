/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var res = [-1, -1];
    res[0] = findLowerBound(nums, target);
    res[1] = findUpperBound(nums, target);

    return res;

};

function findLowerBound(nums, target) {
    var left = 0,
        right = nums.length;
    while (left < right) {
        var mid = parseInt((left + right) / 2);
        //find the target in the left side
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    //note the condition when to return the index
    if (left >= 0 && left < nums.length && nums[left] === target) {
        return left;
    } else {
        return -1;
    }
}

function findUpperBound(nums, target) {
    var left = 0,
        right = nums.length;
    while (left < right) {
        var mid = parseInt((left + right) / 2);
        //find the target in the left side

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (right > 0 && right <= nums.length && nums[right - 1] === target) {
        return right - 1;
    } else {
        return -1;
    }
}
