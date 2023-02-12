// Block scope vs function scope

// let and const are block scope
// var is function scope


{
    const firstName = "Osama";
    console.log(firstName);
}
// console.log(firstName);

// var can accessible in outside the block
{
    var firstName = "Tariq";
}
console.log(firstName);

// default parameters

// befor es6
// const sum = (a,b)=> {
//     if(typeof b === "undefined"){
//         b = 1
//     }
//     console.log(a+b);
// }

// latested 
const sum = (a,b=0)=> {
    console.log(a+b);
}

sum(4)

// rest parameters
// remaining paramets are save in c
const myfun = (a,b,...c)=>{
    console.log("a: ",a);
    console.log("b: ",b);
    console.log("c: ",c);
}
myfun(1,2,3,4,4,5,5,8)


// program addall numbers

const addAll = (...numbers)=>{
    console.log("num: ",numbers);
    console.log(Array.isArray(numbers));
    let sum = 0;
    for(let number of numbers){
        // console.log(number);
        sum = sum + number;
    }
    console.log("sum: ",sum);
}

addAll(1,2,3,4,5,6,7,8,9)


console.warn("parameters destructuring");
// parameters destructuring
// it is use with object

const person = {
    name: "osama",
    gender: "male",
    age: 23
}

const fun = ({name,gender})=>{
    console.log("name: ",name);
    console.log("gender: ",gender);
}

fun(person)