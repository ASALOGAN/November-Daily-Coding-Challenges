const coinChange = (coins, amount) => {
    // Create an array to store the minimum coins needed for each amount
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins are needed to make the amount 0

    // Iterate over each coin
    for (let coin of coins) {
        // Update the dp array for each amount from coin to amount
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // If dp[amount] is still Infinity, it means the amount cannot be made up by any combination of the coins
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
console.log(coinChange([1, 2, 5], 11)); // Output: 3
console.log(coinChange([2], 3)); // Output: -1
console.log(coinChange([1], 0)); // Output: 0
