/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res = [];
    nums.sort(function(a, b) {
        return a - b; });
    getSubsets(nums, 0, [], res);
    return res;
};

function getSubsets(nums, idx, path, res) {
    var tmp = path.concat();
    res.push(tmp);

    for (var i = idx; i < nums.length; i++) {
        tmp.push(nums[i]);
        getSubsets(nums, i + 1, tmp, res);
        tmp.pop();
        while (nums[i] === nums[i + 1] && i < nums.length - 1) {
            i++;
        }
    }
}
