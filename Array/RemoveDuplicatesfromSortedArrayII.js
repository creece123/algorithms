/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1){
        return 1;
    }
    var valid = 1, cur = 2;
    while(cur < nums.length){
        if(nums[cur] === nums[valid] && nums[valid] === nums[valid-1]){
            cur++;
        } else {
            nums[++valid] = nums[cur++];
        }
    }
    
    return valid+1;
};