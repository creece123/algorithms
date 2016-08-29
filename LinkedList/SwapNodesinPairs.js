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
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head, res = dummy;

    while (head !== null && head.next !== null) {
        var next = head.next;
        dummy.next = next;
        var tmp = next.next;
        next.next = head;
        head.next = tmp;
        dummy = head;
        head = head.next;
    }
    return res.next;
};
