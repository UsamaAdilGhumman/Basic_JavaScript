// prototype and proto are different 
// what is prototype
function hello(){
    console.log("hello world");
}

hello();
// js function is function and object
console.log(hello.name);

// you can add own properties in function
hello.myOwnProperty = "very unique value"
console.log(hello.myOwnProperty);

// function provide many usefull properties

// fuction prodive free space is called prototype // like empty object {}
console.log(hello.prototype);

// function only provide prototype property
hello.prototype.abc = "abc"
hello.prototype.number = 123
hello.prototype.sing = function(){
    return "lalallalaa ";
}

console.log(hello.prototype);
console.log(hello.prototype.sing());

// create connection prototype and proto
// const userMethods ={
//     aboutMe(){
//         return `My Name is ${this.firstName} and My Age is ${this.age}`;
//     },
//     is18(){
//         return this.age>=18;
//     },
//     sing(){
//         return `to to to na na na `
//     }
// }
function CreateUser(firstName,lastName,email,age,address){
    const user = Object.create(CreateUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
console.log(CreateUser.prototype);
CreateUser.prototype.aboutMe = function(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    }
CreateUser.prototype.is18 = function(){
        return this.age>=18;
    }
CreateUser.prototype.sing = function(){
        return `to to to na na na `
    }
console.log(CreateUser.prototype);
const user1 = CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user1",user1);
const aboutMe = user1.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user1.is18();
console.log("is18: ",is18);
const sing = user1.sing();
console.log("sing: ",sing);



