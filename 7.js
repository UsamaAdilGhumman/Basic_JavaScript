// Intro to arrays
// array is reference type
// order collection of items

const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
console.log(arr[1]);

// array is muteable


arr[1] = 7;
console.log(arr);

// reference type is means object in javascript
console.log(typeof arr);  // object

const obj = {}; // object literal
console.log(typeof obj);

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

// array push pop

arr.push("apple"); // add in last
console.log(arr);

// pop return the item
arr.pop();  // remove from last
console.log(arr);

// array shift unshift

// shift return the item
arr.shift(); // remove from first
console.log(arr);

arr.unshift("orange"); // add in first
console.log(arr);

