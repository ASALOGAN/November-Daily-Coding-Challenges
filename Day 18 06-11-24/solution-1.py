class Solution:
    def twoSum(self, numbers, target):
        # Initialize two pointers, one at the start (l) and one at the end (r) of the array
        l = 0
        r = len(numbers) - 1
        
        # Loop until the two pointers meet
        while l < r:
            # Calculate the sum of the numbers at the two pointers
            current_sum = numbers[l] + numbers[r]
            
            # If the sum matches the target, return the 1-based indices of the numbers
            if current_sum == target:
                return [l + 1, r + 1]
            # If the sum is less than the target, move the left pointer to the right
            elif current_sum < target:
                l += 1
            # If the sum is greater than the target, move the right pointer to the left
            else:
                r -= 1
        
        # Return an empty list if no such pair is found (though the problem guarantees a solution)
        return []