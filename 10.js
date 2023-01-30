// loops in array

let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let fruits = ["apple","banana","grapes"]
let i = 0;


while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

do{
    i--;
    console.log(fruits[i]);
}while(i>0)

// for of Loop  -> return value
console.log("------------------------> for of looop");
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop -> return index
for(let index in fruits){
    console.log(index);
}

