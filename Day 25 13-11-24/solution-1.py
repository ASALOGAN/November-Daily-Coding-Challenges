class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # If the lengths of the strings are not equal, they cannot be anagrams
        if len(s) != len(t):
            return False

        # Dictionary to store the frequency of each character in the first string
        count = {}

        # Iterate over each character in the first string
        for char in s:
            # Increment the count for each character in the first string
            count[char] = count.get(char, 0) + 1

        # Iterate over each character in the second string
        for char in t:
            # If a character in the second string is not found in the count dictionary or its count is zero, return false
            if count.get(char, 0) == 0:
                return False
            # Decrement the count for each character found in the second string
            count[char] -= 1

        # If all characters match in frequency, the strings are anagrams
        return True