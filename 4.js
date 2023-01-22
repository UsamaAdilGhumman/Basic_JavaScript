// == vs ===

// == -> only check value 
// === -> check value and datatype

let num1 = 123
let num2 = "123"
console.log(num1 == num2); // true bcz only check value not data type
console.log(num1 === num2); // false bcz check value and datatype

// comparison operator
console.log(num1>=num2);


// != vs !==
console.log(num1 !== num2); // check value and datatype
console.log(num1 != num2); // only check value not data type


// truthy and falsy value