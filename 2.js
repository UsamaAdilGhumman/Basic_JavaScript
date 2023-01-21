// Data types in JS
// Number
let num = 1
console.log(num)

num = 2.3
console.log(num)
console.log(typeof num);
console.log("----------------------") //break point
// String
let name = "Osama Tariq"
console.log(name)

name = 'Osama'
console.log(name)
console.log(typeof name);
console.log("----------------------") //break point

// null
let newnull = null
console.log(newnull)
console.log(typeof newnull); // object
// this is error in js, js is not try to correct this eror bcz many frameworks are use this technique
console.log("----------------------") //break point

// undefined -> if value is not initialized
let a;
console.log(a)
console.log(typeof a);
console.log("----------------------") //break point

// Boolean
let flag = true;
console.log(flag);

flag = false
console.log(flag);
console.log(typeof flag);
console.log("----------------------") //break point

// Object
const boy = {
    name: "Osama Tariq",
    class: "BS Computer Science"
}

console.log(boy);
console.log(boy.name);
console.log(boy.class);
console.log(boy[0]); // undefined
console.log(typeof boy);
console.log("----------------------") //break point

// Array
const newNum = [1,2,3,"Osama Tariq",boy]
console.log(newNum);
console.log(newNum[0]);
console.log(newNum[1]);
console.log(newNum[3]);
console.log(newNum[4]);
console.log(newNum[4].name);
console.log(typeof newNum); // arr is defined as object in js
console.log("----------------------") //break point

// BigInt -> largest number in javascript
let mynum = BigInt(1234)
console.log(mynum);
console.log(typeof mynum);
console.log("----------------------") //break point

// Advance JS
// Symbol -> Uniquie Value
let x = Symbol("hello")
let y = Symbol("hello")


console.log(x);
console.log(y);
console.log(x === y); // false
// because Symbol return unique value everytime
// alert(x) // Cannot convert a Symbol value to a string, So, We need to convert it into String
// alert(x.toString())
// to see the description in Symbol
console.log(x.description)
// alert(x.description)
console.log(x.valueOf());

let age = Symbol('age')
let clas = Symbol(19)
const user = {
    name: "osama tariq",
    [age]: 20, // [] are use to add symbol in object
}

console.log(user);

user[clas] = 19 // other method to add symbol in object
console.log(user);
console.log(user.name);
console.log(user.age); // undefined
// to get the value of symbol use []
console.log(user[age]);
console.log(user[clas]);
console.log(typeof x);


for(let key in user){
    console.log(key);  //name
}
// it ignore the Symbol











