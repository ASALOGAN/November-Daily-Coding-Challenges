## **Notes for Problem One: Find the Difference**

# Intuition
The problem involves identifying the extra character in string `t` that is not present in string `s`. Since `t` is formed by shuffling `s` and adding one additional character, the difference in their character codes' sum will reveal the added character.

# Approach
The approach is to calculate the sum of the ASCII values of characters in both strings `s` and `t`. The difference between these sums will give the ASCII value of the extra character in `t`. This is because all other characters cancel out due to their presence in both strings.

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where $$n$$ is the length of string `s`. This is because we iterate through both strings once.

- Space complexity:
  The space complexity is $$O(1)$$ since we are using only a constant amount of extra space for the sum variables.

