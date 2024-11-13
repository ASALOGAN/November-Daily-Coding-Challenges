// Problem: Move Zeroes
//
// Description:
// Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
//
// Constraints:
// 1 <= nums.length <= 10^4

// Function to determine if two strings are anagrams
const isAnagram = (s, t) => {
    // If the lengths of the strings are not equal, they cannot be anagrams
    if (s.length !== t.length) return false;

    // Object to store the frequency of each character in the first string
    const count = {};

    // Iterate over each character in the first string
    for (let char of s) {
        // Increment the count for each character in the first string
        count[char] = (count[char] || 0) + 1;
    }

    // Iterate over each character in the second string
    for (let char of t) {
        // If a character in the second string is not found in the count object or its count is zero, return false
        if (!count[char]) return false;
        // Decrement the count for each character found in the second string
        count[char]--;
    }

    // If all characters match in frequency, the strings are anagrams
    return true;
};

// Example usage:
// Check if "anagram" and "nagaram" are anagrams
console.log(isAnagram("anagram", "nagaram")); // Output: true
// Check if "rat" and "car" are anagrams
console.log(isAnagram("rat", "car")); // Output: false
