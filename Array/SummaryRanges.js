/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    var res = [],
        start = 0,
        end = start,
        tmp = '';
    while (start < nums.length) {
        end = start + 1;
        tmp = '' + nums[start];

        if (end >= nums.length || nums[end] > nums[start] + 1) {
            res.push(tmp);
            start++;
        } else {
            while (nums[end + 1] === nums[end] + 1 && end < nums.length - 1) {
                end++;
            }
            tmp = tmp + '->' + nums[end];
            res.push(tmp);
            start = end + 1;

        }
    }

    return res;
};
