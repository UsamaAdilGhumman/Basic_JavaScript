// methods
// function inside object 
// arrow function not allow in methods
// this keyword
const person = {
    firstName: "Osama",
    age:23,
    aboutMe: function(){
        console.log(this);
        console.log(`Hy! My Name is ${this.firstName} and My age is ${this.age}`);
    }
}

console.log("person", person);
person.aboutMe();

function aboutMe(){
    console.log(`Hy! My Name is ${this.firstName} and My age is ${this.age}`);
}

const person1 = {
    firstName: "Adil",
    age:23,
    aboutMe: aboutMe
}
const person2 = {
    firstName: "Tariq",
    age:50,
    aboutMe: aboutMe
}

console.log("person1: ", person1);
person1.aboutMe();

console.log("person2: ", person2);
person2.aboutMe();


console.log(this);

function myfun(){
    "use strict"
    console.log(this);
}
myfun();
