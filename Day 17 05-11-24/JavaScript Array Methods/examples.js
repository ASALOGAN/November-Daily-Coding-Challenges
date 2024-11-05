
// Example of .map() with an object array
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const userNames = users.map(user => user.name.toUpperCase());
console.log(userNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

// Example of .filter() with a condition on object properties
const adults = users.filter(user => user.age >= 30);
console.log(adults); // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

// Example of .reduce() to calculate total age
const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
console.log(totalAge); // Output: 90

// Example of .forEach() to log user details
users.forEach(user => console.log(`${user.name} is ${user.age} years old`));
// Output:
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 35 years old
