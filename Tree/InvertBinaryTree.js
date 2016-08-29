/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var q = [];
    q.push(root);
    while (q.length > 0) {
        var cur = q.shift();
        var tmp = cur.left;
        cur.left = cur.right;
        cur.right = tmp;

        if (cur.left) { q.push(cur.left) }
        if (cur.right) { q.push(cur.right) }

    }

    return root;
};
