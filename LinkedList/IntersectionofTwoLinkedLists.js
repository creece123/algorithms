/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lenA = getLength(headA),
    lenB = getLength(headB),
    diff = 0;
    if(lenA > lenB){
        diff = lenA - lenB;
        while(diff > 0){
            headA = headA.next;
            diff--;
        }
    } else{
        diff = lenB - lenA;
        while(diff > 0){
            headB = headB.next;
            diff--;
        }
    }
    
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA;
};

function getLength(head){
    var len = 0;
    while(head !== null){
        head = head.next;
        len++;
    }
    
    return len;
}