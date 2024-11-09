## **Notes for Problem: Binary Tree Preorder Traversal**

# Intuition
The problem requires performing a preorder traversal on a binary tree. In preorder traversal, we visit the root node first, then recursively do a preorder traversal of the left subtree, followed by a recursive preorder traversal of the right subtree. This traversal order is intuitive for scenarios where we need to process the root before its children.

# Approach
The approach involves using a recursive helper function to traverse the tree. We start at the root node and follow these steps:
1. Visit the root node and add its value to the result list.
2. Recursively traverse the left subtree.
3. Recursively traverse the right subtree.
This recursive approach naturally follows the preorder traversal order: root, left, right.

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the binary tree. This is because we visit each node exactly once.

- Space complexity:
  The space complexity is $$O(n)$$ in the worst case due to the recursion stack. In the case of a completely unbalanced tree, the recursion stack may go as deep as the number of nodes. In a balanced tree, the space complexity would be $$O(\log n)$$.