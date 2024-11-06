// Two Sum II - Input Array Is Sorted
// 
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. Let these two numbers be 
// numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// 
// Return the indices of the two numbers, index1 and index2, added by one as an integer array 
// [index1, index2] of length 2.
// 
// The tests are generated such that there is exactly one solution. You may not use the same 
// element twice.
// 
// Your solution must use only constant extra space.
// 
// Constraints:
// 
// 2 <= numbers.length <= 3 * 10^4
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.


// Function to find two numbers in a sorted array that add up to a target sum
const twoSum = (n, t) => {
  // Initialize two pointers, one at the start and one at the end of the array
  let l = 0,
    r = n.length - 1;
  // Loop until the two pointers meet
  while (l < r) {
    // Calculate the sum of the numbers at the two pointers
    let sum = n[l] + n[r];
    // If the sum matches the target, return the 1-based indices of the numbers
    if (sum === t) {
      return [l + 1, r + 1];
    } 
    // If the sum is less than the target, move the left pointer to the right
    else if (sum < t) {
      l++;
    } 
    // If the sum is greater than the target, move the right pointer to the left
    else {
      r--;
    }
  }
  // Return an empty array if no such pair is found
  return [];
};

// Start timing the execution of the twoSum function
console.time("twoSum Execution Time");
// Call the twoSum function with a sample array and target, and store the result
const result = twoSum([2, 11, 7, 15], 9);
// End timing and log the execution time
console.timeEnd("twoSum Execution Time");

// Log the result of the twoSum function
console.log(result);
