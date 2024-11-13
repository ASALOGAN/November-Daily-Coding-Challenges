// Problem: Valid Anagram
// Given two strings s and t, return true if t is an 
// anagram of s, and false otherwise.
//
// Constraints:
// 1 <= s.length, t.length <= 5 * 10^4
// s and t consist of lowercase English letters.

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
