// call ,apply ,bind methods

function myfun(){
    console.log("hello world!");
}

myfun();
myfun.call();

const user1 = {
    firstName: "Osama",
    age:23,
    about: function(){
        console.log(this.firstName,this.age);
    }
}

user1.about();

const user2 = {
    firstName: "adil",
    age:24,
}
// call ma us object ka name pass krra ga jis ka liya this use krna ha
user1.about.call(user2); // adil 24

function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}
const user3 = {
    firstName: "adil",
    age:24,
    about: function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
    }
}
const user4 = {
    firstName: "tariq",
    age:29,
}
const user5 = {
    firstName: "abcdef",
    age:29,
}
about.call(user5,"cricket");

console.warn("!!!apply!!!!");
// apply
// apply ma bs array as a argument gy ga
about.apply(user5,["cricket","blah blah"]);

console.warn("!!!bind!!!!");
const func = about.bind(user4,"cricket","blah blah");
func()

console.warn("!!!! don't do mistake !!!");
// don't do mistake
const myfunc = user3.about.bind(user1);
myfunc();

