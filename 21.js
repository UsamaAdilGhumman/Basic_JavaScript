// iterables
// jin pa ham for of laga skta ha
// string , array are iterables
// object is not iterables

const firstName = "Osama"
for(let char of firstName){
    console.log("char: ",char);
}

const itemArray = ["item1","item2","item3","item4"]
for(let item of itemArray){
    console.log("item: ",item);
}

// array like objects
// jin ka pass length property howti ha
// or jin ko ham index sa access kr skta ha
// example string

console.log(firstName.length);
console.log(firstName[3]);

console.warn("!!!!!! sets !!!!!!!");
//sets (it is iterables )
//  store data
//  sets have its own methods
// no index-base access
// order is not guaranteed
// unique items only (no duplicate allowed)

const numbers = new Set([2,3,4]);
console.log("numbers: ",numbers);
numbers.add(1)
numbers.add(itemArray)
// different address
numbers.add(["item1","item2","item3","item4"])
numbers.add(["item1","item2","item3","item4"])

console.log("numbers: ",numbers);

// no index-base access
console.log("numbers: ",numbers[3]); // undefined 

// has 
console.log(numbers.has(1));

for(let num of numbers){
    console.log("numbers: ",num);
}

const myArray = [2,3,4,5,3,3,2,2,3,3,5,6,7,5,7]
const uniqueArray = new Set(myArray)
console.log("uniqueArray: ",uniqueArray);
console.log("uniqueArray size : ",uniqueArray.size);

console.warn("!!!!!! map !!!!!!!");
// map
// iterables
// stored data in order fashion
// store key-value paire (like object)
// duplate keys not allowed

// different b/w maps and objects
// objects only have string or Symbol as key

// in map you can use anything as key
// like arrays, numbers, string

// object literal
const person = {
    name: "osama",
    age:23,
    1:"one"
}
console.log(person.name);
console.log(person["name"]);

for(let value in person){
    console.log("value: ", value);
}


const users = new Map()
console.log("users: ", users);
users.set("firstName","OSama")
users.set("age",22)
users.set(1,"one")
users.set([1,2,3],"onetwothree")
users.set({one:1},"one")
console.log("users: ", users);
console.log(users.get("firstName")); 
console.log(users.keys()); 

for(let key of users.keys()){
    console.log("key: ", key, typeof key);
}

for(let key of users){
    console.log("key: ", key, typeof key, Array.isArray(key));
}

for(let [key,value] of users){
    console.log("key: value ", key,value);
}

const myUser = new Map([["firstName","osama"],["age",22]])
console.log(myUser);

const person1 = {
    id:1,
    name:"osama",
}
const userInfo = new Map();
userInfo.set(person1,{"gender":"male",age:"22"})
console.log("userInfo : ",userInfo);

console.log(userInfo.get(person1).age);


















