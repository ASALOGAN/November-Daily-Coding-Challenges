# Problem: Power of Three

## Problem Statement

Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.

An integer `n` is a power of three if there exists an integer `x` such that `n == 3^x`.

## Examples

### Example 1:
- **Input:** `n = 27`
- **Output:** `true`
- **Explanation:** 27 is 3 raised to the power of 3 (3^3).

### Example 2:
- **Input:** `n = 0`
- **Output:** `false`
- **Explanation:** There is no integer `x` such that 3^x equals 0.

### Example 3:
- **Input:** `n = -1`
- **Output:** `false`
- **Explanation:** There is no integer `x` such that 3^x equals -1.

## Constraints:
- -2^31 <= n <= 2^31 - 1

## Approach

To determine if a number `n` is a power of three, we can use a loop to continuously divide `n` by 3 as long as `n` is greater than 1. If at the end of this process `n` becomes 1, then `n` is a power of three. Otherwise, it is not.

Alternatively, we can use a mathematical approach by checking if the logarithm of `n` to the base 3 is an integer. This can be done using the change of base formula for logarithms.

## Complexity

- **Time Complexity:** O(log_3(n)) for the iterative division approach.
- **Space Complexity:** O(1) as we are not using any additional data structures that grow with input size.
