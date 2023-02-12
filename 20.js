// Array Important methods

// foreach
// map
// filter
// reduce

console.warn("!!!!foreach!!!!!");
// foreach
// no make new array
// no return 
const numbers = [2,3,4,5,6,7,8]

const multiplyBy2 = (number,index)=>{
    console.log(`index of ${index} number ${number} -> ${number}*3 = ${number*3}`);
}

// multiplyBy2(numbers[0],0)
// multiplyBy2(numbers[1],1)

// for(let index in numbers){
//     multiplyBy2(numbers[index],index)
// }

numbers.forEach(multiplyBy2)
numbers.forEach((number,index)=>{
    console.log(`index of ${index} number ${number} -> ${number}*3 = ${number*3}`);
})

const users = [
    {userId:1,firstName:"Osama",gender:"male"},
    {userId:2,firstName:"Adil",gender:"male"},
    {userId:3,firstName:"Tariq",gender:"male"},
    {userId:4,firstName:"Nimra",gender:"female"},
]

users.forEach(({firstName},index)=>{
    console.log(`firstName of index ${index} is ${firstName}`);
})

console.warn("!!!!Map!!!!!");
// map
// always make new array
// always return 
const newArray = numbers.map((number,index)=>{
    console.log(`index of ${index} number ${number} -> ${number}*3 = ${number*3}`);
    return number*number;
})

console.log(newArray);

const userNames = users.map(({firstName})=>{
    return firstName;
})

console.log(userNames);

console.warn("!!!!!!!! filter method !!!!!!");
// filter function
// make new array
// add those values which return true;

const even = numbers.filter((number)=>{
    return number%2 === 0
})

console.log(even);


console.warn("!!!!!!!! Reduce method !!!!!!");
// Reduce method

// sum of numbers in array

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log("sum: "+sum);

// working of reduce method
// 2,3,4,5,6,7,8
// accumulator , currentValue , return
// 2                3               5
// 5                4               9
// 9                5               14
// 14               6               20
// 20               7               27
// 27               8               35

// we can pass initial value also in reduce method
const totalsum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},100)

console.log("totalsum: ",totalsum);

const userCart = [
    {productId:1,productName:"mobile",price:2000},
    {productId:2,productName:"laptop",price:30000},
    {productId:3,productName:"tv",price:120000},
    {productId:4,productName:"pant",price:2000},
    {productId:5,productName:"shirt",price:1000},
]

const totalPrice = userCart.reduce((totalPrice,{price})=>{
    return totalPrice+price
},0)

console.log("totalPrice : ",totalPrice);

console.warn("!!!!!! Sort Method !!!!!");
// Sort Method
// mutable means change the value in original array
// js assume number in string and then find in acii table

// 0 => 48
// 1 => 49
// 2 => 50
// 3 => 51
// 4 => 52
// 5 => 53
// 6 => 54
// 7 => 55
// 8 => 56
// 9 => 57
const allNum = [4,2,5,200,10298,73873,123]
// 200 => check only 1st digit ascii so, 2 ascii 50
// in js this array is  [52,50,53,50,49,55,49]
// then sort this aray
allNum.sort(); 
console.log(allNum); // [10298, 123, 2, 200, 4, 5, 73873]

// if we have string array then it sort perfect
userNames.sort();
console.log(userNames); // ['Adil', 'Nimra', 'Osama', 'Tariq']
// captial ascii is small then small ascii

allNum.sort((a,b)=>{
    return a-b;
})
allNum.sort((a,b)=>a-b)  // Assending
console.log(allNum);

// a-b -> positive -> (greater then 0) -> b,a
// 4-2 -> 2 (positive) -> 2,4
// a-b -> negative -> a,b
// 2-5 -> -3 -> 2,5

allNum.sort((a,b)=>b-a) // deassending
console.log(allNum);


// example
// price lowtohigh hightolow

const products = [...userCart]
console.log(products);
// lowtohigh
const lowtohigh = products.slice(0).sort(({price:a},{price:b})=>a-b)
console.log("lowtohigh : ",lowtohigh);
// hightolow
const hightolow = products.slice(0).sort(({price:a},{price:b})=>b-a)
console.log("hightolow : ",hightolow);

console.warn("!!!!find method !!!!!");
// find method
// first occurance 
const fruits = [ "apple", "orange", "banana", "mango", "pineapple","app","org" ];
const ans = fruits.find(fruit=>fruit.length === 3)
console.log("fruit ",ans);

const user = [...users]
const findUser = user.find(({firstName})=>firstName==="Nimra")
console.log("findUser : ",findUser);

console.warn("!!!!!!!every method!!!!!!");
// every method
// every method return true when all elements fulfil the condition
//every method return false when one of all elements not fulfil the condition
const num = [2,4,6,8,10]

const iseven = num.every(num=>num%2===0)
console.log("iseven: ",iseven);

const cartPrice = userCart.every(({price})=>price>1000)
console.log("cartPrice: ",cartPrice);

console.warn("!!!!Some method !!!!!");
// Some method
// any number in array which match the condition return -> true

const newNumber = [3,5,6,7]
const anyeven = newNumber.some((num)=>num%2===0)
console.log("anyeven : ",anyeven);

console.warn("!!!!fill method !!!!!");
// fill method
// change in original array
// value start end

const myArray = new Array(10).fill(-1);
console.log("Array : ",myArray);

myArray.fill(0,2,6)
console.log("Array : ",myArray);

console.warn("!!!!splice method !!!!!");
// splice method
// change in original array
// start delete insert

const itemArray = ["item1","item2","item3","item4"]
// delete 
// also return delete item
const deleteItem = itemArray.splice(1,1)
console.log("itemArray : ",itemArray);
console.log("deleteItem : ",deleteItem);

// insert
itemArray.splice(3,0,"inserted item")
console.log("itemArray : ",itemArray);

// delete and insert
itemArray.splice(1,2,"inserted item10","inserted item9")
console.log("itemArray : ",itemArray);














