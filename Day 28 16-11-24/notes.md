**Notes: Unique Paths Problem**

# Intuition
The problem is about finding the number of unique paths from the top-left corner to the bottom-right corner of a grid. The robot can only move right or down. This suggests a dynamic programming approach where we build up the solution by considering smaller subproblems.

# Approach
We use a 2D array `dp` where `dp[i][j]` represents the number of unique paths to reach cell `(i, j)`. The base cases are the first row and the first column, where there is only one way to reach any cell (either all the way right or all the way down). For other cells, the number of ways to reach a cell is the sum of the ways to reach the cell directly above it and the cell directly to the left of it. This is because the robot can only move right or down.

# Complexity
- Time complexity: 
  The time complexity is $$O(m \times n)$$ because we fill out an `m x n` grid.
  
- Space complexity:
  The space complexity is $$O(m \times n)$$ due to the storage required for the `dp` array.
