/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var hash = {};
  for(var i = 0; i < nums.length; i++){
      if(hash.hasOwnProperty(nums[i])){
          var last = hash[nums[i]];
          if(i - last <= k){
              return true;
          } else {
              hash[nums[i]] = i;
          }
      }else {
              hash[nums[i]] = i;
        }
      
  }
  
  return false;
    
};