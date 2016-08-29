/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m >= n) {
        return head;
    }
    var dummy = new ListNode(0),
        i = 1;
    dummy.next = head, head = dummy;
    while (i < m) {
        head = head.next;
        i++;
    }
    var pre = head.next,
        cur = pre.next;
    while (i < n) {
        var tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
        i++;
    }

    head.next.next = cur;
    head.next = pre;

    return dummy.next;

};
