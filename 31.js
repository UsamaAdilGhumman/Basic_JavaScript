// new keyword

function dummyUser(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
dummyUser.prototype.sing = function(){
    return "lalalallalllalalla";
}
const user = new dummyUser("Osama","Tariq")
console.log("user: ", user);

// new keyword
// 1) create empty object this -> {}
// 2) return empty object
// 3) auto create proto link

console.log("sing: ", user.sing());

// construction function
// function which create with new keyword first letter will be capital
function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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
const user1 = new CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user1",user1);
const aboutMe = user1.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user1.is18();
console.log("is18: ",is18);
const sing = user1.sing();
console.log("sing: ",sing);


