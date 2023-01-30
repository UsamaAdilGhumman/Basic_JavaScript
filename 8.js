// primitive types vs reference types

// primitive types
// when change value in one variable then it will not change the value in other valiable.
let num1 = 6
let num2 = num1
console.log("num1 = " + num1);
console.log("num2 = " + num2);
num1++
console.log("inc in num1 ");
console.log("num1 = " + num1);
console.log("num2 = " + num2);

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
// reference types
let arr1 = [1,2,3]
let arr2 = arr1
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);
arr1.push(4)
console.log("push in arr1 ");
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);
// arr save the address not the actual value