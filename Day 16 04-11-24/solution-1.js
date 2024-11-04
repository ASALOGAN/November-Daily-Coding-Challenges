// plusOne is a function that takes an array of digits and increments the number they represent by one.
const plusOne = (digits) => {
    // Iterate over the digits array from the last element to the first.
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, increment it by 1.
        if (digits[i] < 9) {
            digits[i]++;
            // Return the modified array as no further changes are needed.
            return digits;
        }
        // If the current digit is 9, set it to 0 and continue to the next digit.
        digits[i] = 0;
    }
    // If all digits were 9, prepend 1 to the array to account for the carry over.
    digits.unshift(1);
    // Return the modified array.
    return digits;
};

console.log(plusOne([1,2,3]));
