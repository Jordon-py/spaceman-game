**Phase 1: Concise & Educational JavaScript Methods Cheat Sheet*



---

## 1. String Methods

### `length`
```js
const greeting = "Hello, World!";   // Declare a string
console.log(greeting.length);       // Output the number of characters: 13
```

### `toUpperCase()` / `toLowerCase()`
```js
const word = "JavaScript";
console.log(word.toUpperCase());    // Convert to "JAVASCRIPT"
console.log(word.toLowerCase());    // Convert to "javascript"
```

### `includes()`
```js
const phrase = "Learning JavaScript is fun";
console.log(phrase.includes("fun")); // Check if substring "fun" exists, returns true
```

### `replace()`
```js
const sentence = "I love apples";
const updated = sentence.replace("apples", "bananas");  
// Replaces "apples" with "bananas"

console.log(updated); // Outputs: "I love bananas"
```

---

## 2. Array Methods

### `push()` / `pop()`
```js
const fruits = ["apple", "banana"]; 
fruits.push("orange");          // Add "orange" at the end 
console.log(fruits);            // ["apple", "banana", "orange"]

const lastItem = fruits.pop();   // Remove the last item, "orange"
console.log(lastItem);           // "orange"
```

### `shift()` / `unshift()`
```js
const queue = [1, 2, 3];
const first = queue.shift();     // Remove the first element: 1
console.log(first);              // Output: 1

queue.unshift(0);                // Add 0 at the beginning
console.log(queue);              // [0, 2, 3]
```

### `map()`
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); 
// Multiply each number by 2, build a new array

console.log(doubled);  // [2, 4, 6]
```

### `filter()`
```js
const values = [5, 10, 15, 20];
const aboveTen = values.filter(val => val > 10);  
// Keep only numbers above 10

console.log(aboveTen); // [15, 20]
```

### `reduce()`
```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, current) => acc + current, 0);
// Accumulate sum starting with 0

console.log(total); // 10
```

---

## 3. Object Methods

### `Object.keys()` / `Object.values()` / `Object.entries()`
```js
const car = { brand: "Tesla", model: "Model 3" };

console.log(Object.keys(car));     // ["brand", "model"]
console.log(Object.values(car));   // ["Tesla", "Model 3"]
console.log(Object.entries(car));  // [["brand","Tesla"], ["model","Model 3"]]
```

### `hasOwnProperty()`
```js
const person = { name: "Alice", age: 30 };

console.log(person.hasOwnProperty("name")); // true: direct property
console.log(person.hasOwnProperty("email")); // false: property doesn't exist
```

---

## 4. Utility Methods

### `parseInt()` / `parseFloat()`
```js
console.log(parseInt("42"));      // Convert "42" to integer 42
console.log(parseFloat("3.14"));  // Convert "3.14" to float 3.14
```

### `setTimeout()` / `setInterval()`
```js
setTimeout(() => {
  console.log("This runs after 2 seconds"); // Delays execution once
}, 2000);

const intervalId = setInterval(() => {
  console.log("This runs every second");
}, 1000);

// clearInterval(intervalId); // Stop the repeating action if needed
```

### `console.log()`
```js
const data = { key: "value" };
console.log("Debug Info:", data); // Print "Debug Info:" and the data object
```

---

## 5. Basic Control Flow & Syntax

### `if`, `else`, `else if`
```js
const x = 10;
if (x > 10) {
  console.log("x is greater than 10");
} else if (x === 10) {
  console.log("x is exactly 10");
} else {
  console.log("x is less than 10");
}
```

### `for` / `while` loops
```js
// for loop example
for (let i = 0; i < 3; i++) {
  console.log(i);   // Runs 3 times: 0, 1, 2
}

// while loop example
let j = 0;
while (j < 3) {
  console.log(j);   // Runs while j < 3
  j++;
}
```
