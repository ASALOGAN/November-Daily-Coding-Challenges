# **Coin Change Problem - Notes and Explanation**

# Intuition
The problem is a classic example of dynamic programming where we need to find the minimum number of coins required to make up a given amount. The key insight is to break down the problem into smaller subproblems, where we determine the minimum coins needed for smaller amounts and build up to the desired amount.

# Approach
We use a dynamic programming approach to solve this problem. We create an array `dp` where `dp[i]` represents the minimum number of coins needed to make the amount `i`. We initialize `dp[0]` to 0 because no coins are needed to make the amount 0. For all other amounts, we initialize `dp[i]` to Infinity, indicating that initially, we assume it's impossible to make that amount.

We then iterate over each coin and for each coin, we update the `dp` array for all amounts from the coin's value up to the target amount. For each amount `i`, we update `dp[i]` to be the minimum of its current value and `dp[i - coin] + 1`, which represents using one more coin of the current denomination.

Finally, if `dp[amount]` is still Infinity, it means it's not possible to make the amount with the given coins, and we return -1. Otherwise, we return `dp[amount]`.

# Complexity
- Time complexity:
  The time complexity is $$O(n \times m)$$, where `n` is the number of coins and `m` is the amount. This is because we iterate over each coin and for each coin, we iterate over all amounts up to the target amount.

- Space complexity:
  The space complexity is $$O(m)$$, where `m` is the amount. This is due to the storage required for the `dp` array.
