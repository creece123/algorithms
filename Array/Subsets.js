/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    /*** recursive ****/

    var res = [];
    getSets(nums, 0, [], res);
    return res;


    function getSets(nums, idx, path, res) {
        var tmp = [].concat(path);
        res.push(tmp);

        for (var i = idx; i < nums.length; i++) {
            tmp.push(nums[i]);
            getSets(nums, i + 1, tmp, res);
            tmp.pop();
            while (nums[i] === nums[i + 1] && i < nums.length - 1) {
                i++;
            }
        }
    }

    /*** Iterative ****/


    var res = [],
        tmp = [];
    res.push(tmp);

    for (var i = 0; i < nums.length; i++) {
        var len = res.length;
        for (var j = 0; j < len; j++) {
            var arr = res[j].concat();
            arr.push(nums[i]);
            res.push(arr);
        }
    }

    return res;

};
