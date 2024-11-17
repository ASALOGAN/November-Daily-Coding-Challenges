from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # Create a list 'dp' where dp[i] will hold the minimum number of coins needed to make amount 'i'
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0  # Base case: No coins are needed to make the amount 0

        # Iterate over each coin in the list of coins
        for coin in coins:
            # For each coin, update the dp list for all amounts from the coin's value up to the target amount
            for i in range(coin, amount + 1):
                # Update dp[i] to be the minimum of its current value and the value of dp[i - coin] + 1
                # This represents using one more coin of the current denomination
                dp[i] = min(dp[i], dp[i - coin] + 1)

        # If dp[amount] is still infinity, it means it's not possible to make the amount with the given coins
        # Return -1 in such a case, otherwise return dp[amount] which is the minimum number of coins needed
        return dp[amount] if dp[amount] != float('inf') else -1

# Example usage: Calculate the fewest number of coins needed to make up the amount
solution = Solution()
print(solution.coinChange([1, 2, 5], 11))  # Output: 3
print(solution.coinChange([2], 3))        # Output: -1
print(solution.coinChange([1], 0))        # Output: 0
