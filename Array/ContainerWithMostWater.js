/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var curArea = 0,
        maxArea = 0,
        left = 0,
        right = height.length - 1;
    while (left < right) {
        curArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, curArea);
        if (height[left] > height[right]) {
            right--;
        } else if (height[left] < height[right]) {
            left++;
        } else {
            left++;
            right--;
        }
    }

    return maxArea;
};
