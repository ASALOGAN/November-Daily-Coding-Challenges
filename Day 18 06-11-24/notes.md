**Notes: Two Sum II - Input Array Is Sorted**

# Intuition
The problem requires finding two numbers in a sorted array that add up to a given target. Since the array is sorted, a two-pointer technique can be effectively used to find the solution. This approach leverages the sorted property to efficiently narrow down the potential pairs.

# Approach
We initialize two pointers: one at the beginning (`l`) and one at the end (`r`) of the array. We calculate the sum of the elements at these pointers. If the sum equals the target, we return the indices (adjusted for 1-based indexing). If the sum is less than the target, we move the left pointer to the right to increase the sum. If the sum is greater than the target, we move the right pointer to the left to decrease the sum. This process continues until the pointers meet.

# Complexity
- Time complexity: 
  The time complexity is $$O(n)$$, where $$n$$ is the number of elements in the array. This is because each element is processed at most once by the two pointers.

- Space complexity:
  The space complexity is $$O(1)$$ since we are using only a constant amount of extra space for the pointers and variables.
