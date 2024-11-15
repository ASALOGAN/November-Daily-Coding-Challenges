/*
Problem: Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3^x.

Constraints:

-2^31 <= n <= 2^31 - 1
*/

// Function to determine if a given integer 'n' is a power of three
const isPowerOfThree = (n) => {
    // If 'n' is less than or equal to 0, it cannot be a power of three
    if (n <= 0) return false;
    // Continuously divide 'n' by 3 as long as it is divisible by 3
    while (n % 3 === 0) {
        // Update 'n' to be the result of the division
        n /= 3;
    }
    // If 'n' is reduced to 1, it is a power of three; otherwise, it is not
    return n === 1;
};
