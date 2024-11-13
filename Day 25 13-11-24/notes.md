**Day 25 Notes for Problem: Move Zeroes**

# Intuition
The problem is identical to the one from Day 24, which involves moving all zeroes in an array to the end while maintaining the order of non-zero elements. The goal is to perform this operation in-place without using extra space for another array.

# Approach
The approach remains the same as the previous day, utilizing a two-pointer technique. We maintain a pointer `lastNonZeroFoundAt` to track the position where the next non-zero element should be placed. As we iterate through the array, each time we encounter a non-zero element, we place it at the `lastNonZeroFoundAt` position and increment the pointer. After processing all elements, we fill the remaining positions with zeroes.

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where $$n$$ is the number of elements in the array. This is because we iterate through the array twice: once to move non-zero elements and once to fill zeroes.

- Space complexity:
  The space complexity is $$O(1)$$ because we only use a constant amount of extra space for the pointer.

