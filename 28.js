// add new method in object 
// suppose add million methods then add reference million time (problem)
const userMethods ={
    aboutMe(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    },
    is18(){
        return this.age>=18;
    },
    sing(){
        return `to to to na na na `
    }
}
function CreateUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.aboutMe = userMethods.aboutMe
    user.is18 = userMethods.is18
    user.sing = userMethods.sing
    return user;
}

const user5 = CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
const aboutMe = user5.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user5.is18();
console.log("is18: ",is18);
const sing = user5.sing();
console.log("sing: ",sing);


// solution (next file)










