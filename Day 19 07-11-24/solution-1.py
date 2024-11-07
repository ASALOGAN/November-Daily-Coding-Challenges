class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        """
        Find the additional character in string t compared to string s.

        Parameters:
        s (str): The original string.
        t (str): The string with one additional character.

        Returns:
        str: The character that was added to string t.
        """
        # Initialize sum of character codes for string s
        char_code_sum_s = 0
        # Initialize sum of character codes for string t
        char_code_sum_t = 0

        # Calculate the sum of character codes for string s
        for char in s:
            char_code_sum_s += ord(char)

        # Calculate the sum of character codes for string t
        for char in t:
            char_code_sum_t += ord(char)

        # Return the character that was added to string t
        return chr(char_code_sum_t - char_code_sum_s)
