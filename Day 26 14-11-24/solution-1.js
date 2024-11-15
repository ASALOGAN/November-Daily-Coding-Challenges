/**
 * Problem:
 * Find the Index of the First Occurrence in a String
 * 
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Constraints:
 * 1 <= haystack.length, needle.length <= 104
 * haystack and needle consist of only lowercase English characters
 */

// Function to find the index of the first occurrence of 'needle' in 'haystack'
const strStr = (haystack, needle) => {
    // If 'needle' is an empty string, return 0 as per problem statement
    if (needle === "") return 0;
    // Use the built-in indexOf method to find the first occurrence of 'needle' in 'haystack'
    // Returns the index if found, otherwise returns -1
    return haystack.indexOf(needle);
};
