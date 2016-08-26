/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var slow = dummy,
        fast = dummy,
        i = 0;
    while (fast !== null && i < n) {
        fast = fast.next;
        i++;
    }

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;

};
