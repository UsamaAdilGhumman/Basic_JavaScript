// js is synchrones language
// js is single thread language
// compilation
// Js Compile the code first
// 3 phase of compile
// 1. Tokenize / lexical
// 2. parssing / AST (Abstract syntax tree)
// 3. Code Genrationn
// why compilation
// 1.) Early Error checking
// 2.) Identify appro. scope of variables
// code executes
// how javascript code executes
// in js code executes in execution context
// sab sa phaly golbal execution context create howta ha
// what is golbal execution context?
// 1. creation phase
// 2. code execution phase
// what is local execution context?
// closures


// var ka case ma code excute sa phaly undefind value set how gati ha
// golbal execution
// sab sa phaly sab variables and functions memoery ma create how gy ga
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Osama";
console.log(firstName);

console.log("!!!!!!!!!!!!!!");
// hositing
// varibale or functions phaly hi ban gy tha is liya load how gy ga
console.log(this);
console.log(window);
console.log(myfunc);
console.log(fullName);

// function decleartaion
function myfunc(){
    console.log("this is my function");
}
var firstName = "Osama";
var lastName = "Tariq";
var fullName = firstName + " " + lastName;
console.log(fullName);

console.log("!!!!!!!!!!!!!!");


console.log(myNewFun);
// function expression case
var myNewFun = function(){
    console.log("this is my function");
}
console.log(myNewFun);

// let case ma uninitializated
// golbal execution
// Uncaught ReferenceError: Cannot access 'first' before initialization
// console.log(first);
let first = "Osama";
console.log(first);

// hositing 
// let and const hositing howti ha?
// yes, ya memory ma ban tw gata ha lakin uninitializated howta ha

// Uncaught ReferenceError: last is not defined
// console.log(last);