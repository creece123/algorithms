/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var res = new ListNode(0), ret = res;
    res.next = head;
    while(head !== null){
        if(head.val === val){
            res.next = head.next;
            head = res.next;
        } else {
            res = head;
            head = head.next;
        }
    }
    
    return ret.next;
};