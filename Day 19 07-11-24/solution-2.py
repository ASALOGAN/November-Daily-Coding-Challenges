class Solution:
    def firstUniqChar(self, s: str) -> int:
        """
        Find the first non-repeating character in a string and return its index.
        If it does not exist, return -1.

        Parameters:
        s (str): The input string.

        Returns:
        int: The index of the first non-repeating character or -1 if none exists.
        """
        # Dictionary to store the count of each character
        char_count = {}

        # Count the occurrences of each character
        for char in s:
            char_count[char] = char_count.get(char, 0) + 1

        # Find the first character with a count of 1
        for i, char in enumerate(s):
            if char_count[char] == 1:
                return i

        return -1
