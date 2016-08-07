/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [],
        hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hash.hasOwnProperty(diff)) {
            res.push(hash[diff], i);
            return res;
        } else {
            hash[nums[i]] = i;
        }
    }

};
