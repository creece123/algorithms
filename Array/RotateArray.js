/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    if(nums.length> 1 && k > 0){
       
        swap(nums, 0, nums.length - 1);
        swap(nums, 0, k-1);
        swap(nums, k, nums.length - 1)
    }
   
   function swap(nums, left, right){
       while(left < right){
           var tmp = nums[left];
           nums[left] = nums[right];
           nums[right] = tmp;
           left++;
           right--;
       }
   }
};