// Clone Array
let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [1,2,3,4,5,6,7,8,9]
arr1.push(10);
console.log(arr1, arr2);
console.log(arr1 === arr2); // different addresss

let arr3 = arr2.slice(0);
console.log(arr3);

let arr4 = arr2.slice(1).concat([15,16]);
console.log(arr4);

let arr5 = [].concat(arr1,[12,13])
console.log("arr5 ",arr5);

// spread operator
// Copy of array
let arr6 = [1,2,3,4,5,6,7,8,9];
let arr7 = [...arr6];
console.log("arr7",arr7);

let arr8 = [...arr6, 10];
console.log("arr8",arr8);

