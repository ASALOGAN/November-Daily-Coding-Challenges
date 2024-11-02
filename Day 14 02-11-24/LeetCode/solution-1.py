class Solution:
    def isPalindrome(self, x):
        # Convert the integer to a string
        s = str(x)
        # Iterate over the first half of the string
        for i in range(len(s) // 2):
            # Compare characters from the start and end of the string
            if s[i] != s[len(s) - 1 - i]:
                # If any characters don't match, it's not a palindrome
                return False
        # If all characters match, it is a palindrome
        return True
