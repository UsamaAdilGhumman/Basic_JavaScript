function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.aboutMe = function(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    }
CreateUser.prototype.is18 = function(){
        return this.age>=18;
    }
CreateUser.prototype.sing = function(){
        return `to to to na na na `
    }
const user1 = new CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user1",user1);

// it print keys form proto also
for (const key in user1) {
    console.log("key",key);
}
console.warn("!!!! hasOwnProperty !!!!");
// hasOwnProperty -> print key which have only itself of object
for (const key in user1) {
    if(user1.hasOwnProperty(key))
    console.log("key",key);
}

console.warn("!!!!!more about prototype!!!!");
// more about prototype

// js create array using Array class both ways are valid
const number = [1,2,3,4,5,6]
console.log(number);

const num = new Array(1,2,3,4,5);
// check array prototype
console.log(Array.prototype);
console.log(Object.getPrototypeOf(num));

function hello(){
    console.log("hello world");
}
// change prototype type obj to array
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1')
console.log(hello.prototype);





