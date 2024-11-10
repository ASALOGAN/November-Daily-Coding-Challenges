/*
Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
    
    // Move first n+1 steps ahead
    while (n-- >= 0) {
        first = first.next;
    }
    
    // Move first to the end, maintaining the gap
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    // Skip the desired node
    second.next = second.next.next;
    
    return dummy.next;
};

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); // [1,2,3,4,5]
const n = 2;
const newHead = removeNthFromEnd(head, n);

// Function to convert linked list to array for easy display
const linkedListToArray = (node) => {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
};

console.log(linkedListToArray(newHead)); // Output: [1, 2, 3, 5]
