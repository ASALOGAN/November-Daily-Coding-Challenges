/*
Problem 1: Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

// Function to perform preorder traversal on a binary tree
const preorderTraversal = (root) => {
    // Initialize an array to store the traversal result
    const result = [];
    
    // Helper function to recursively traverse the tree
    const traverse = (node) => {
        // Base case: if the current node is null, return
        if (!node) return;
        
        // Process the current node by adding its value to the result
        result.push(node.val);
        
        // Recursively traverse the left subtree
        traverse(node.left);
        
        // Recursively traverse the right subtree
        traverse(node.right);
    };
    
    // Start the traversal from the root node
    traverse(root);
    
    // Return the final result of the preorder traversal
    return result;
};

// Example usage:
// Define a binary tree structure
const exampleTree = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    },
    left: null
};

// Perform preorder traversal on the example tree and log the output
console.log(preorderTraversal(exampleTree)); // Output: [1, 2, 3]
