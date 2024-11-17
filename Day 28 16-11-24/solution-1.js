// Problem: Unique Paths
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
// Constraints: 1 <= m, n <= 100

// Function to calculate the number of unique paths in an m x n grid
const uniquePaths = (m, n) => {
    // Create a 2D array 'dp' to store the number of ways to reach each cell
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // Initialize the first column of each row to 1
    // This represents that there is only one way to reach any cell in the first column (by moving down)
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    // Initialize the first row of each column to 1
    // This represents that there is only one way to reach any cell in the first row (by moving right)
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Fill the dp array with the number of unique paths to each cell
    // Each cell can be reached either from the cell above it or from the cell to the left of it
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // The number of ways to reach dp[i][j] is the sum of ways to reach the cell above it (dp[i-1][j])
            // and the cell to the left of it (dp[i][j-1])
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The bottom-right corner of the grid will contain the total number of unique paths
    return dp[m - 1][n - 1];
}

// Example usage: Calculate the number of unique paths in a 3x7 grid
console.log(uniquePaths(3, 7)); // Output: 28