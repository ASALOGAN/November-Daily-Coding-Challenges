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

## **Notes for Problem Two: First Unique Character in a String**

# Intuition
The problem requires identifying the first character in a string that does not repeat. The key insight is to count the occurrences of each character and then find the first character with a count of one.

# Approach
The approach involves two main steps:
1. Traverse the string to count the occurrences of each character using a dictionary (or hashmap). This allows us to efficiently track how many times each character appears.
2. Traverse the string again to find the first character that has a count of one in the dictionary. This character is the first non-repeating character, and we return its index.

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where $$n$$ is the length of the string. This is because we make two passes over the string: one for counting and one for finding the first unique character.

- Space complexity:
  The space complexity is $$O(1)$$ in terms of additional space used, as the dictionary will store at most 26 key-value pairs (one for each lowercase English letter).
