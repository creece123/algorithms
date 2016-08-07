/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    var s = 0,
        e = nums.length - 1;
    while (s <= e) {
        if (nums[s] === val) {
            nums[s] = nums[e];
            e--;
        } else {
            s++;
        }
    }



    return s;
};
