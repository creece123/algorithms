/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var res = 0, diff = Math.pow(2,32) - 1;
    nums.sort(function(a,b){return a-b;});
    
    for(var i = 0; i < nums.length; i++){
        if(i === 0 || nums[i] !== nums[i-1]){
            var left = i+1; right = nums.length - 1;
            while(left < right){
                var sum = nums[i] + nums[left] + nums[right];
                var tmpDiff = Math.abs(sum - target);
                if(tmpDiff < diff){
                    diff = tmpDiff;
                    res = sum;
                }
                if(sum > target){
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    
    return res;
};