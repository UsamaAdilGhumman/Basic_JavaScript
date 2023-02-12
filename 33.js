// es6 > introduce class 
// class keyword
// class are fake this use function in backend
class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("constructor called ");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    aboutMe(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return `to to to na na na `
    }
}
const user1 = new CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user1",user1);
const aboutMe = user1.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user1.is18();
console.log("is18: ",is18);
const sing = user1.sing();
console.log("sing: ",sing);
console.log(Object.getPrototypeOf(user1));