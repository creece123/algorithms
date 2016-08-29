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
var insertionSortList = function(head) {
    var dummy = new ListNode(0),
        cur = head;
    while (cur !== null) {
        var pre = dummy,
            next = cur.next;
        while (pre.next !== null && pre.next.val < cur.val) {
            pre = pre.next;
        }

        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    return dummy.next;
};
