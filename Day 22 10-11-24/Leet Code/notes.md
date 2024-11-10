# **Notes for Problem: Linked List Cycle**

# Intuition
The problem is to determine if a linked list has a cycle. A cycle exists if a node can be revisited by continuously following the next pointers. The challenge is to detect this cycle efficiently without using extra space for data structures like hash sets.

# Approach
We can use Floyd's Cycle-Finding Algorithm, also known as the Tortoise and Hare algorithm. This approach uses two pointers, slow and fast. The slow pointer moves one step at a time, while the fast pointer moves two steps. If there is a cycle, the fast pointer will eventually meet the slow pointer. If the fast pointer reaches the end of the list, then there is no cycle.

# Complexity
- Time complexity:
The time complexity is $$O(n)$$, where n is the number of nodes in the linked list. In the worst case, we might need to traverse the entire list.

- Space complexity:
The space complexity is $$O(1)$$, as we are using only two pointers and no additional data structures.