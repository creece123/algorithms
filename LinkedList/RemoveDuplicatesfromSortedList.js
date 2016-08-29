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
var deleteDuplicates = function(head) {
    var dummy = new ListNode(0),
        pre = head;
    dummy.next = head;
    while (head !== null) {
        pre = head;
        while (head.next !== null && head.val === head.next.val) {
            head = head.next;
        }
        pre.next = head.next;
        head = head.next;
    }

    return dummy.next;
};
