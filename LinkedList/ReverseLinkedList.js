/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    var prev = null;

    while (head !== null) {
        var tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }

    return prev;
};
