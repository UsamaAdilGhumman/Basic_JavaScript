// Objects -> Reference Type 
// store data in key value pair
// don't have index
// Object is not iteratable


// create 
const obj = {name:"Osama Tariq",age:22}
console.log(obj);
console.log(typeof obj);

// access data from object
console.log(obj.name);

const person = {
    name:"Osama",
    age:22,
    hobbies:['slepping','eating','resting'],
}

console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[0]);

// Add key value pair
person.gender = "male"
console.log(person);


person.hobbies.push("coding");
console.log(person);

// delete data from object 
delete obj.name;
console.log(obj);

// change data in object
obj.name = "Osama Tariq";
console.log(obj);



// dot vs bracket notation

const myobj = {
    x:"x",
    y:"y",
    "z":"z"
}
console.log(myobj.x);
console.log(myobj['x']);
console.log(myobj.z);
console.log(myobj["z"]);

const myNewObj = {
    x:"x",
    y:"y",
    "x y z":"xyz"
}
// console.log(myNewObj.x y z); // SyntaxError because valiable can't have space
console.log(myNewObj["x y z"]); // bracket notation use for when we have space in variable

const key = "email"
myNewObj[key] = "usama@gmail.com"
console.log(myNewObj);

// iterate object
// for in
// Object.keys

for(let key in myNewObj){
    console.log(key,":",myNewObj[key]);
    console.log(`${key}:${myNewObj[key]}`);
}

console.log(Object.keys(myNewObj));
let flag = Array.isArray(Object.keys(myNewObj));
console.log(flag);

// for of
for(let key of Object.keys(myNewObj)){
    console.log(key,":",myNewObj[key]);
    console.log(`${key}:${myNewObj[key]}`);
}