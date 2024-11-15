# **Notes on Solving "Find the Index of the First Occurrence in a String"**

# Intuition
The problem is essentially about finding a substring within a string. The simplest and most direct way to approach this is to utilize existing string manipulation methods that efficiently handle such operations. Given the constraints, a direct search method should suffice.

# Approach
The approach to solving this problem is straightforward. We can leverage JavaScript's built-in `indexOf` method, which is optimized for finding the first occurrence of a substring within a string. This method returns the index of the first occurrence of the specified substring, or `-1` if the substring is not found. This aligns perfectly with the problem requirements.

1. Check if the `needle` is an empty string. If it is, return `0` immediately, as per the problem statement.
2. Use the `indexOf` method on the `haystack` string to find the first occurrence of the `needle`.
3. Return the result of `indexOf`, which will be the index of the first occurrence or `-1` if the `needle` is not found.

# Complexity
- Time complexity: 
  The time complexity is $$O(n \cdot m)$$ in the worst case, where `n` is the length of `haystack` and `m` is the length of `needle`. However, the `indexOf` method is generally optimized and performs well in practice.

- Space complexity:
  The space complexity is $$O(1)$$ as we are not using any additional data structures that grow with input size.
