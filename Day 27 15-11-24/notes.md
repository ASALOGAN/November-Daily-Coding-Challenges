# **Notes on Power of Three Problem**

# Intuition

The problem requires checking if a number is a power of three. My first thought is to repeatedly divide the number by three. If the number can be reduced to one by continuously dividing by three, then it is a power of three. Otherwise, it is not.

# Approach

1. Check if the number is less than or equal to zero. If it is, return false because negative numbers and zero cannot be powers of three.
2. Use a loop to divide the number by three as long as it is divisible by three.
3. After the loop, check if the number is reduced to one. If it is, return true, indicating that the number is a power of three. Otherwise, return false.

# Complexity

- Time complexity: $$O(\log_3(n))$$
  - The time complexity is logarithmic with base 3 because we are dividing the number by 3 in each iteration until it becomes 1.

- Space complexity: $$O(1)$$

  - The space complexity is constant because we are not using any additional data structures that grow with the input size.
