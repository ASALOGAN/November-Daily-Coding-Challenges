# Problem: Binary Tree Preorder Traversal

## Problem Description

Given the root of a binary tree, return the preorder traversal of its nodes' values.

## Examples

### Example 1:
- **Input**: `root = [1,null,2,3]`
- **Output**: `[1,2,3]`
- **Explanation**: The preorder traversal visits nodes in the order: root, left, right.

### Example 2:
- **Input**: `root = [1,2,3,4,5,null,8,null,null,6,7,9]`
- **Output**: `[1,2,4,5,6,7,3,8,9]`
- **Explanation**: The preorder traversal visits nodes in the order: root, left, right.

### Example 3:
- **Input**: `root = []`
- **Output**: `[]`
- **Explanation**: An empty tree results in an empty traversal list.

### Example 4:
- **Input**: `root = [1]`
- **Output**: `[1]`
- **Explanation**: A single-node tree results in a traversal list with just that node.

## Constraints:
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`
