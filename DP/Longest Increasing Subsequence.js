/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 1) {
        return 0;
    }

    var dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    var len = 0;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < dp[0]) {
            dp[0] = nums[i];
        } else if (nums[i] > dp[len]) {
            dp[++len] = nums[i];
        } else {
            dp[binarySearch(dp, 0, len + 1, nums[i])] = nums[i];
        }
    }

    return len + 1;

};

function binarySearch(dp, left, right, target) {
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (target === dp[mid]) {
            return mid;
        } else if (target > dp[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
