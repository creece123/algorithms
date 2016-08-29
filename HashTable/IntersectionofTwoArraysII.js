/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    /***** Two Pointers *****/
    nums1.sort(function(a, b) {
        return a - b;
    });
    nums2.sort(function(a, b) {
        return a - b;
    });

    var i = 0,
        j = 0,
        res = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        }
    }

    return res;

    /*******  hash table   ****************/
    var hash = {},
        res = [];
    for (var i = 0; i < nums1.length; i++) {
        if (hash.hasOwnProperty(nums1[i])) {
            hash[nums1[i]]++;
        } else {
            hash[nums1[i]] = 1;
        }
    }

    for (i = 0; i < nums2.length; i++) {
        if (hash.hasOwnProperty(nums2[i]) && hash[nums2[i]] >= 1) {
            res.push(nums2[i]);
            hash[nums2[i]]--;
        }
    }

    return res;
};
