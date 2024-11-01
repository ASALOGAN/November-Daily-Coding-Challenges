### **Notes on Problem 1: Longest Increasing Subsequence**

# Intuition
The problem requires finding the length of the longest strictly increasing subsequence in an array. A subsequence is a sequence derived from another sequence where some elements may be deleted without changing the order of the remaining elements. The key observation is that we can use dynamic programming with binary search to efficiently find the longest increasing subsequence.

# Approach
1. Initialize an empty array `lis` to store the smallest tail of all increasing subsequences of different lengths.
2. Iterate over each number in the input array `nums`:
   - Use binary search to find the position where the current number can be placed in `lis` to maintain the increasing order.
   - If the current number is greater than all elements in `lis`, append it to `lis`.
   - Otherwise, replace the element at the found position with the current number to maintain the smallest possible tail for increasing subsequences of that length.
3. The length of `lis` at the end of the iteration is the length of the longest increasing subsequence.

# Complexity
- Time complexity:  
  The time complexity is $$O(n \log n)$$, where `n` is the number of elements in the array. This is because we perform a binary search for each element.

- Space complexity:  
  The space complexity is $$O(n)$$, as we use an array `lis` to store the smallest tail of increasing subsequences.
