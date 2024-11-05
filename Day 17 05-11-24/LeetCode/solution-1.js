// Define a function using a fat arrow syntax to check for duplicates in an array
const containsDuplicate = (nums) => {
    // Create a new Set to store unique numbers
    const numSet = new Set();
    // Iterate over each number in the input array
    for (let num of nums) {
        // Check if the number is already in the Set
        if (numSet.has(num)) {
            // If it is, return true indicating a duplicate is found
            return true;
        }
        // Otherwise, add the number to the Set
        numSet.add(num);
    }
    // If no duplicates are found, return false
    return false;
}
