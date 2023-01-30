// Array Destructuring
const myName = ['Osama', 'Tariq','Ghumman'];
let [firstName, lastName] = myName

console.log(firstName, lastName);

let [first, last, caste] = myName

console.log(first, last, caste);

const myNumber = [1]
let [num1,num2,num3] = myNumber

console.log(num1, num2, num3); // 1 undefined undefined

const myArray = [4, 5, 6]
let [num4,,num6] = myArray

console.log(num4,num6);

const myNewNumber = [1,2,3,4,5,6,7,8,9,10];
let [,,,,num5,...EndArray] = myNewNumber
console.log(EndArray); // create new array
