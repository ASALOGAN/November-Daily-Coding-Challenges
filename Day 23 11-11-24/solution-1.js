// Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// Function to find the middle node of a linked list using the Tortoise and Hare algorithm
const middleNode = (head) => {
    if (!head) return null; // Check if the head is null

    let slow = head;
    let fast = head;
    
    // Move fast pointer two steps and slow pointer one step until fast reaches the end
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Slow pointer will be at the middle node
    return slow;
};

// Example usage:
// Define a simple linked list node class
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

// Find the middle node
let middle = middleNode(head);
console.log(middle.val); // Output: 4
