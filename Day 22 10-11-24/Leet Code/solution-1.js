/*
Problem 1: Linked List Cycle:
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Constraints:

The number of the nodes in the list is in the range [0, 10^4].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked-list.
*/

// This approach uses the "Floyd's Cycle-Finding or Floyd's Tortoise and Hare" algorithm
// Function to determine if a linked list has a cycle
const hasCycle = (head) => {
  // If the list is empty or has only one node, it cannot have a cycle
  if (!head || !head.next) return false;

  // Initialize two pointers, slow and fast
  let slow = head; // Slow pointer starts at the head
  let fast = head.next; // Fast pointer starts at the second node

  // Loop until the slow and fast pointers meet
  while (slow !== fast) {
    // If fast pointer reaches the end, there is no cycle
    if (!fast || !fast.next) return false;
    // Move slow pointer one step
    slow = slow.next;
    // Move fast pointer two steps
    fast = fast.next.next;
  }

  // If slow and fast pointers meet, there is a cycle
  return true;
};
