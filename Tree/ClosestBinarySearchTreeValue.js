/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var v = root.val;
    var r = root.val < target ? root.right : root.left;
    if (r === null) {
        return v;
    }
    var a = closestValue(r, target);
    return Math.abs(v - target) < Math.abs(a - target) ? v : a;
};
