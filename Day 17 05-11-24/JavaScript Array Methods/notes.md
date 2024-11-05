### JavaScript Array Methods

#### 1. `.map()`
- **Description**: The `.map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
- **Syntax**: `array.map(callback(currentValue[, index[, array]])[, thisArg])`
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // Output: [2, 4, 6, 8]
  ```

#### 2. `.filter()`
- **Description**: The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
- **Syntax**: `array.filter(callback(element[, index[, array]])[, thisArg])`
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  ```

#### 3. `.reduce()`
- **Description**: The `.reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
- **Syntax**: `array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Output: 10
  ```

#### 4. `.find()`
- **Description**: The `.find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.
- **Syntax**: `array.find(callback(element[, index[, array]])[, thisArg])`
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const found = numbers.find(num => num > 2);
  console.log(found); // Output: 3
  ```

#### 5. `.forEach()`
- **Description**: The `.forEach()` method executes a provided function once for each array element.
- **Syntax**: `array.forEach(callback(currentValue[, index[, array]])[, thisArg])`
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  numbers.forEach(num => console.log(num * 2));
  // Output:
  // 2
  // 4
  // 6
  // 8
  ```
