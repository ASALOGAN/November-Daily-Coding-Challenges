// Function to find the length of the longest increasing subsequence in an array
function lengthOfLIS(nums) {
  // Initialize an array to store the smallest tail of all increasing subsequences
  const lis = [];

  // Iterate over each number in the input array
  for (const num of nums) {
    // Use binary search to find the correct position to insert the current number
    let left = 0,
      right = lis.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      // If the middle element is less than the current number, search in the right half
      if (lis[mid] < num) {
        left = mid + 1;
      } else {
        // Otherwise, search in the left half
        right = mid;
      }
    }

    // If the current number is greater than all elements in lis, append it
    if (left === lis.length) {
      lis.push(num);
    } else {
      // Otherwise, replace the element at the found position with the current number
      lis[left] = num;
    }
  }

  // The length of lis is the length of the longest increasing subsequence
  return lis.length;
}

// Example usage: should output 4, as the longest increasing subsequence is [2, 3, 7, 101]
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));