/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    var dummy = new ListNode(0),
        res = dummy;
    while (l1 !== null || l2 !== null) {
        if (l2 === null || (l1 !== null && l1.val < l2.val)) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }

        dummy = dummy.next;
    }

    return res.next;
};
