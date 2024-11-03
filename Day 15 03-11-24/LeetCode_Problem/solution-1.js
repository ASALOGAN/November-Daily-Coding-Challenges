// Problem: Add Two Numbers:
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Definition for singly-linked list node
function ListNode(val, next) {
    // Initialize the node's value, defaulting to 0 if undefined
    this.val = (val === undefined ? 0 : val);
    // Initialize the next pointer, defaulting to null if undefined
    this.next = (next === undefined ? null : next);
}

// Function to add two numbers represented by linked lists
const addTwoNumbers = (l1, l2) => {
    // Create a dummy head node to simplify edge cases
    let dummyHead = new ListNode(0);
    // Pointer to the current node in the result list
    let current = dummyHead;
    // Variable to store carry-over value during addition
    let carry = 0;

    // Loop through both linked lists until both are fully traversed
    while (l1 !== null || l2 !== null) {
        // Get the current value from l1, or 0 if l1 is exhausted
        let x = (l1 !== null) ? l1.val : 0;
        // Get the current value from l2, or 0 if l2 is exhausted
        let y = (l2 !== null) ? l2.val : 0;
        // Calculate the sum of current digits and carry
        let sum = carry + x + y;
        // Update carry for the next iteration
        carry = Math.floor(sum / 10);
        // Create a new node with the digit value of the sum
        current.next = new ListNode(sum % 10);
        // Move to the next node in the result list
        current = current.next;
        // Advance l1 and l2 to their next nodes if available
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there's a remaining carry, add a new node with its value
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    // Return the next node of dummy head, which is the start of the result list
    return dummyHead.next;
};

// Test cases to verify the function
const printList = (node) => {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
};

// Example 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printList(result); // Output: [7, 0, 8]

// Example 2
l1 = new ListNode(0);
l2 = new ListNode(0);
result = addTwoNumbers(l1, l2);
printList(result); // Output: [0]

// Example 3
l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
result = addTwoNumbers(l1, l2);
printList(result); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
