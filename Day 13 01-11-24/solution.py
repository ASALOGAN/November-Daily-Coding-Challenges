class Solution:
    def lengthOfLIS(self, nums):
        """
        Calculate the length of the longest increasing subsequence in an array.

        :param nums: List[int] - The input array of integers.
        :return: int - The length of the longest increasing subsequence.
        """
        # Initialize an array to store the smallest tail of all increasing subsequences
        lis = []

        # Iterate over each number in the input array
        for num in nums:
            # Use binary search to find the correct position to insert the current number
            left, right = 0, len(lis)
            while left < right:
                mid = (left + right) // 2
                # If the middle element is less than the current number, search in the right half
                if lis[mid] < num:
                    left = mid + 1
                else:
                    # Otherwise, search in the left half
                    right = mid

            # If the current number is greater than all elements in lis, append it
            if left == len(lis):
                lis.append(num)
            else:
                # Otherwise, replace the element at the found position with the current number
                lis[left] = num

        # The length of lis is the length of the longest increasing subsequence
        return len(lis)

# Example usage: should output 4, as the longest increasing subsequence is [2, 3, 7, 101]
solution = Solution()
print(solution.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
