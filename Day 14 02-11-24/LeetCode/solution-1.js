/*
Problem: Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Constraints:

-2^31 <= x <= 2^31 - 1
*/


// Function to determine if a given integer is a palindrome
var isPalindrome = function (x) {
  // Convert the integer to a string
  let s = "" + x;
  // Iterate over the first half of the string
  for (let i = 0; i < s.length / 2; i++) {
    // Compare characters from the start and end of the string
    if (s[i] != s[s.length - 1 - i]) {
      // If any characters don't match, it's not a palindrome
      return false;
    }
  }
  // If all characters match, it is a palindrome
  return true;
};

// Test cases to verify the function
console.log(isPalindrome(121)); // true, because 121 is a palindrome
console.log(isPalindrome(-121)); // false, because negative numbers are not palindromes
console.log(isPalindrome(10)); // false, because 10 is not a palindrome
