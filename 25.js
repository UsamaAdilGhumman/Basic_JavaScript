// arrow functions
// arrow functions don't have this 
// arrow functions take this in surronding
const user1 = {
    firstName: "Osama",
    age:23,
    about: ()=>{
        console.log(this);
        console.log(this.firstName,this.age);
    }
}

user1.about();

console.warn("!!!!!! Short Syntax !!!!!!");
// short Syntax
const user2 = {
    firstName: "Osama",
    age:23,
    about(){
        console.log(this.firstName,this.age);
    }
}

user2.about();