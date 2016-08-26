/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }

    var midHead = findMid(head);
    midHead.next = reverse(midHead.next);

    var p1 = head,
        p2 = midHead.next;
    while (p1 && p2 && p1.val === p2.val) {
        p1 = p1.next;
        p2 = p2.next;
    }

    if (p2 === null) {
        return true;
    } else {
        return false;
    }
};

function findMid(head) {
    var len = 0,
        cur = head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }

    var mid = 1;
    cur = head;
    while ((mid * 2) < len) {
        cur = cur.next;
        mid++;
    }
    return cur;
}

function reverse(head) {
    var prev = null;
    while (head !== null) {
        var tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }

    return prev;
}
