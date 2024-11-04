class Solution:
    def plusOne(self, digits):
        # Start from the last index of the array
        for i in range(len(digits) - 1, -1, -1):
            # Add one to the current digit
            digits[i] += 1
            # If the digit is less than 10, return the result as no further carry is needed
            if digits[i] < 10:
                return digits
            # If the digit is 10, set it to 0 (carry over)
            digits[i] = 0
        
        # If we have gone through all digits and they are all '0' now, we add '1' at the start
        return [1] + digits