/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var res =[];
    nums.sort(function(a,b){return a-b;});
    
    for(var i = 0; i < nums.length; i++){
        if(i === 0 || nums[i] !== nums[i-1]){
            for(var j = i + 1; j < nums.length; j++){
                if(j == i+1 || nums[j] !== nums[j-1]){
                    var left = j+1, right = nums.length - 1;
                    while(left < right){
                        var sum = nums[i] + nums[j] + nums[left] + nums[right];
                        if(sum === target){
                            var tmp = [];
                            tmp.push(nums[i], nums[j], nums[left], nums[right]);
                            res.push(tmp);
                            left++;
                            right--;
                            while(left < right && nums[left] === nums[left-1]){
                                left++;
                            }
                            
                            while(left < right && nums[right] === nums[right+1]){
                                right--;
                            }
                        } else if(sum > target){
                            right--;
                        } else{
                            left++;
                        }
                    }
                }
            }
        }
    }
    
    return res;
};