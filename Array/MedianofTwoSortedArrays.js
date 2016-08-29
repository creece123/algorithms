/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   var i = nums1.length - 1, j = nums2.length - 1, len = nums1.length+nums2.length;
   
   while(i >= 0 || j >= 0){
       if(j < 0 || (i >=0 && nums1[i] > nums2[j])){
           nums1[i+j+1] = nums1[i];
           i--;
       } else {
           nums1[i+j+1] = nums2[j];
           j--;
       }
   }
   
   if(len % 2 === 0){
       return (nums1[parseInt(len/2)] + nums1[parseInt(len/2)-1])/2;
   } else {
       return nums1[parseInt(len/2)];
   }
   
  
};