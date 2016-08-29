/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 1) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(robber(nums, 0, nums.length - 2), robber(nums, 1, nums.length - 1));

};

function robber(nums, s, e) {
    var dp = Array(e - s + 1).fill(0);

    dp[s] = nums[s];
    dp[s + 1] = Math.max(nums[s], nums[s + 1]);

    while (s + 2 <= e) {
        dp[s + 2] = Math.max(dp[s + 1], nums[s + 2] + dp[s]);
        s++;
    }

    console.log(dp);

    return dp[e];
}
