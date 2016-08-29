/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length !== inorder.length){
        return null;
    }
    
    return constructTree(preorder, 0, preorder.length -1, inorder, 0, inorder.length -1);
};

function constructTree(preorder, s1, e1, inorder, s2, e2){
    if((s1 > e1) || (s2 > e2)){
        return null;
    }
    
    var root = new TreeNode(preorder[s1]);
    
    var idx = findPosition(inorder, s2, e2, root.val);
    
    if(idx === -1){
        return null;
    }
    
    var num = idx - s2;
    
    root.left = constructTree(preorder, s1+1, s1+num, inorder, s2, idx-1);
    root.right = constructTree(preorder, s1+num+1, e1, inorder, idx+1, e2);
    
    return root;

}

function findPosition(arr, s, e, key){
    while(s <= e){
        if(arr[s] === key){
            return s;
        }
        s++;
    }
    
    return -1;
}