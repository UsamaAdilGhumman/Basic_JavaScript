// closures

function outerFunction(){
    function innerFunction(){
        console.log("hello world!!!!");
    }
    return innerFunction
}

const ans = outerFunction();
console.log(ans);
ans();

// when function return from memory then it takes local variables also.

// function + local memory is called closures

console.warn("!!!!closure Example 1!!!!!");
function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName
}

const fullName = printFullName("Osama","Tariq");
console.log(fullName);
fullName();

console.warn("!!!!closure Example 2!!!!!");
// closure Example 2
function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const returnHello = hello("arg");
returnHello();

console.warn("!!!!closure Example 3!!!!!");
// closure Example 3

function myFun(power){
    return function(number){
        return number ** power
    }
}

const myAns = myFun(3);
console.log(myAns(3));

console.warn("!!!!! Short Syntax !!!!!");

const fun = power => number => number ** power

const mynewAns = fun(3);
console.log(mynewAns(3));


console.warn("!!!!closure Example 4!!!!!");
// closure Example 4

function exampleFun(){
    let i = 1;
    return function () {
        if(i === 1){
            console.log("Hy! I am Calling....");
            i++;
        }else{
            console.log("I am Already Calling.....");
        }
    }
}

const exam = exampleFun();
exam();
exam();
exam();

const exam1 = exampleFun();
exam1();
exam1();
exam1();