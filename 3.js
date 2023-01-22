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


// converstion string to number
let mynum = "12345678";
console.log(typeof mynum);
console.log(typeof +mynum); // number 
// only add (+) symbol on first

// converstion number to string
let mystr = 1234
console.log(typeof mystr);
console.log(typeof (mystr + ""));  // string
// only add (+ "") with number

// Other Method
let age = 20
console.log(typeof age);
age = String(age)
console.log(typeof age);
age = Number(age)
console.log(typeof age);

// string concatenation
let myName = "Osama";
let myFather = "Tariq";
let fullName = myName + myFather
console.log(fullName); // OsamaTariq
fullName = myName + " " + myFather
console.log(fullName)

let newnum1 = "17"
let newnum2 = "10"
let newstring = newnum1 + newnum2;
console.log(newstring); // 1710
newstring = +newnum1 + +newnum2; // convert str to num
console.log(newstring); // 27
console.log("---------------------------");


// template string
// my name is osama and my age is 27.
let aboutMe = `my name is ${myName} and my age is ${+newnum1 + +newnum2}.`
console.log(aboutMe);




// explore more methods


