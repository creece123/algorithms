/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null || head.next === null) {
        return head;
    }
    var leftDummy = new ListNode(0),
        rightDummy = new ListNode(0),
        left = leftDummy,
        right = rightDummy;
    while (head !== null) {
        if (head.val >= x) {
            right.next = head;
            right = right.next;
        } else {
            left.next = head;
            left = left.next;
        }
        head = head.next;
    }
    left.next = rightDummy.next;
    right.next = null;
    return leftDummy.next;
};
