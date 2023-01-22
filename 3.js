// String methods

let str = "        Osama Tariq            "
// trim() => remove extra spaces
console.log(str.trim());
// toUpperCase()
console.log(str.toUpperCase());
// toLowerCase()
console.log(str.toLowerCase());
// slice
console.log(str.slice(10,15));


// string is immuateable. so, changes are not reflect in same string. 
// it will be store in other string or replace the string

str.slice(10,15)
console.log(str); // does not have change bcz inmuateable
let str1 = str.slice(10,15)
console.log(str1);
// or
str = str.slice(10,15)
console.log(str);


// replace
let program = "hello world"
program = program.replace("world","JavaScript")
console.log(program);


// explore more methods


