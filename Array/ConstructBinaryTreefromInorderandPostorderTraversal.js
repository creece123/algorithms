/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length !== postorder.length){
        return null;
    }
    
    return constructTree(inorder, 0, inorder.length - 1, postorder,0, postorder.length - 1);
};

function constructTree(inorder, s1, e1, postorder, s2, e2){
    if((s1 > e1) || (s2 > e2)){
        return null;
    }
    var root = new TreeNode(postorder[e2]);
    var idx = findPosition(inorder, root.val, s1, e1);

    if(idx === -1){
        return null;
    }
    
    var num = idx - s1;
    root.left = constructTree(inorder, s1, idx-1, postorder, s2, s2+num-1);
    root.right = constructTree(inorder, idx+1, e1, postorder, s2+num, e2-1);
    
    return root;
}

function findPosition(arr, key, s, e){
    while(s <= e){
        if(arr[s] === key){
            return s;
        }
        s++;
    }
    
    return -1;
    
    
}

