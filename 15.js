// functions

// functions declearation
function myfun(){
    console.log("hello world");
}
myfun();
myfun();

function sum(num1,num2){
    console.log(num1+num2);
}

sum(1,2)
sum(8,2)
sum(1.0,3.5)

function isEven(num){
    return num%2 === 0
}

console.log(isEven(2)); 
console.log(isEven(5));

function findInArray(anyArray,target){
    for(let index in anyArray){
        if(anyArray[index] === target){
            console.log(`target num found in ${index} index`);
            return;
        }
    }
    console.log("-1");
    return -1
}


findInArray([343434,2,4,5,2,6,343,25,45],3)

// function expersion
const singSong = function (){
    console.log("happy birthday to you ....");
}

singSong()

// arrow functions
const newFunction = ()=>{
    console.log("hello new arrow function");
}

newFunction()

const isEvenArrowFun = num => num%2 === 0

console.log(isEvenArrowFun(4)); 
console.log(isEvenArrowFun(67)); 
