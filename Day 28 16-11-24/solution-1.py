def unique_paths(m, n):
    # Create a 2D list 'dp' to store the number of ways to reach each cell
    dp = [[0] * n for _ in range(m)]

    # Initialize the first column of each row to 1
    # This represents that there is only one way to reach any cell in the first column (by moving down)
    for i in range(m):
        dp[i][0] = 1

    # Initialize the first row of each column to 1
    # This represents that there is only one way to reach any cell in the first row (by moving right)
    for j in range(n):
        dp[0][j] = 1

    # Fill the dp array with the number of unique paths to each cell
    # Each cell can be reached either from the cell above it or from the cell to the left of it
    for i in range(1, m):
        for j in range(1, n):
            # The number of ways to reach dp[i][j] is the sum of ways to reach the cell above it (dp[i-1][j])
            # and the cell to the left of it (dp[i][j-1])
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    # The bottom-right corner of the grid will contain the total number of unique paths
    return dp[m - 1][n - 1]

# Example usage: Calculate the number of unique paths in a 3x7 grid
print(unique_paths(3, 7))  # Output: 28
