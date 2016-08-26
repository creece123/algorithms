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
var plusOne = function(head) {
    var right = null,
        cur = head;
    while (cur !== null) {
        if (cur.val !== 9) {
            right = cur;
        }
        cur = cur.next;
    }

    if (right === null) {
        right = new ListNode(0);
        right.next = head;
        head = right
    }

    ++right.val;
    cur = right.next;
    while (cur !== null) {
        cur.val = 0;
        cur = cur.next;
    }
    return head;
};
