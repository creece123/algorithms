/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    /*** solution 1 *****/
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        res += nums[i];
    }



    return parseInt((nums.length + 1) * nums.length / 2) - res;

    /*** solution 2 *****/
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        res ^= nums[i];
        res ^= i;
    }

    return res ^ nums.length;
};
