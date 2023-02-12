// clone objects using obj.assign
const obj1 ={
    key1:"value1",
    key2:"value2"
}

const obj2 = obj1
obj1.key3 = "value3"

console.log("obj1: ",obj1);
console.log("obj2: ",obj2);

const obj3 = {...obj1}
obj1.key4 = "value4"

console.log("obj1: ",obj1);
console.log("obj3: ",obj3);

// another method

const obj4 = Object.assign({},obj1)
obj1.key5 = "value5"

console.log("obj1: ",obj1);
console.log("obj4: ",obj4);

// optional chaining
const user = {
    firstName:"Osama",
    age:22,
    address:{houseNumber:1234}
}
console.log(user.firstName);
console.log(user.address);
// it check first user exist then address exist then houseNumber
// if user not exist return undefined not check furthure
// if user exist check address if address not exist return undefined not check furthure
console.log(user?.address?.houseNumber);




