/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    var i = 0, j = 1, sum = nums[i], res = sum;
    while(j < nums.length && i < nums.length){
        if(sum < 0){
            i = j;
            sum = nums[i];
        } else {
            sum += nums[j];
        }
        res = Math.max(res, sum);
        j++;
    }
    
    return res;
};

var maxSubArray = function(nums) {
    var sum = nums[0], maxSum = sum;
    for(var i = 1; i < nums.length; ++i) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}