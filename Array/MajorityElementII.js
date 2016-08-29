/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    var res1 = 0,
        res2 = 0,
        count1 = 0,
        count2 = 0,
        res = [];
    for (var i = 0; i < nums.length; i++) {
        if (count1 > 0 && res1 === nums[i]) {
            count1++;
        } else if (count2 > 0 && res2 === nums[i]) {
            count2++;
        } else if (count1 === 0) {
            res1 = nums[i];
            count1 = 1;
        } else if (count2 === 0) {
            res2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0, count2 = 0;
    for (var j = 0; j < nums.length; j++) {
        if (res1 === nums[j]) {
            count1++;
        } else if (res2 === nums[j]) {
            count2++;
        }
    }

    if (count1 * 3 > nums.length) {
        res.push(res1);
    }

    if (count2 * 3 > nums.length) {
        res.push(res2);
    }

    return res;
};
