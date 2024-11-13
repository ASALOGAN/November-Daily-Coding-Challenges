from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        lastNonZeroFoundAt = 0

        # Move all non-zero elements to the beginning of the array
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[lastNonZeroFoundAt] = nums[i]
                lastNonZeroFoundAt += 1

        # Fill the remaining positions with zeroes
        for i in range(lastNonZeroFoundAt, len(nums)):
            nums[i] = 0