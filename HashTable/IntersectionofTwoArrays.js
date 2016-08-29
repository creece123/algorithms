/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	/***** hashtable ******/
    var hash = {};
    for (var i = 0; i < nums1.length; i++) {
        if (!hash.hasOwnProperty(nums1[i])) {
            hash[nums1[i]] = true;
        }
    }

    var res = [];
    nums2.sort(function(a, b) {
        return a - b; });
    for (i = 0; i < nums2.length; i++) {
        if (hash.hasOwnProperty(nums2[i])) {
            res.push(nums2[i]);
        }
        while (nums2[i] === nums2[i + 1] && i < nums2.length - 1) {
            i++;
        }
    }

    return res;
};
