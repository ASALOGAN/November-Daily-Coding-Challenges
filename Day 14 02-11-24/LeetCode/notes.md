### **Notes on Problem 1: Palindrome Number**

# Intuition
The problem requires checking if a number reads the same forwards and backwards, which is the definition of a palindrome. My first thought is to convert the number to a string and compare characters from the start and end moving towards the center.

# Approach
1. Convert the integer to a string to easily access individual digits.
2. Use a loop to iterate over the first half of the string.
3. Compare each character from the start with the corresponding character from the end.
4. If any characters do not match, return false as the number is not a palindrome.
5. If all characters match, return true indicating the number is a palindrome.

# Complexity
- Time complexity: 
  The time complexity is $$O(n)$$, where $$n$$ is the number of digits in the integer. This is because we potentially check each digit once.

- Space complexity:
  The space complexity is $$O(1)$$, as we are using a constant amount of extra space regardless of the input size.  
