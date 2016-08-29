/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var arrLeft = [],
        arrRight = [],
        res = [];
    arrLeft[0] = 1;
    arrRight[nums.length - 1] = 1;
    for (var i = 0; i < nums.length - 1; i++) {
        arrLeft[i + 1] = (nums[i] * arrLeft[i]);
    }

    for (var j = nums.length - 2; j >= 0; j--) {
        arrRight[j] = (nums[j + 1] * arrRight[j + 1]);
    }

    for (i = 0; i < nums.length; i++) {
        res[i] = arrLeft[i] * arrRight[i];
    }

    return res;

};
