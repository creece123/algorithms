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

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var cur = 0,
        next = 0;
    while (cur < nums.length) {
        if (nums[cur] !== val) {
            nums[next++] = nums[cur++];
        } else {
            cur++;
        }
    }

    return next;
};
