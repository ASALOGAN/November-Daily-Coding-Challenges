### **Notes on Problem 1: Plus One**

# Intuition
The problem is about incrementing a number represented as an array of digits. The key challenge is handling the carry when a digit becomes 10. My first thought is to iterate from the end of the array, as this is where the least significant digit is, and handle the carry as we move towards the most significant digit.

# Approach
1. Start iterating from the last digit of the array.
2. Increment the current digit by one.
3. If the incremented digit is less than 10, return the array as no further carry is needed.
4. If the digit becomes 10, set it to 0 and continue to the next digit to handle the carry.
5. If all digits are processed and are 0, it means the number was something like 999, so prepend 1 to the array to account for the carry.

# Complexity
- Time complexity:
The time complexity is $$O(n)$$, where n is the number of digits in the array, as we may need to process each digit once.

- Space complexity:
The space complexity is $$O(1)$$, as we are modifying the input array in place and not using any additional space proportional to the input size.

