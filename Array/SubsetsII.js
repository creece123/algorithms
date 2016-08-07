/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res = [];
    res.push([]);
    nums = nums.sort(function(a,b){return a-b});
    findSub(nums, 0, [], res);
    return res;
};

function findSub(nums, start, tmp, res){
    for(var i = start; i < nums.length; i++){
        if(i > start && nums[i] === nums[i-1]){
            continue;
        }
        
        var arr = tmp.concat();
        arr.push(nums[i]);
        console.log(arr);
        res.push(arr);
        findSub(nums, i + 1, arr, res);
    }
    
}