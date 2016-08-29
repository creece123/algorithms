/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length > 1){
        var redP = 0, blueP = nums.length - 1, i = 0, tmp = 0;
    
        while(i < blueP + 1){
            if(nums[i] === 0){
                swap(nums, i++, redP++);
            } else if(nums[i] === 2){
                swap(nums, i, blueP--);
            } else { 
                i++;
            }
        }
    }
};

function swap(nums,i,j){
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}