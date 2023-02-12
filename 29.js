const obj1 ={
    key1:"value1",
    key2:"value2"
}

const obj2 ={
    key3:"value3",
    key4:"value4"
}

// there is one more way to create empty object
const obj3 = Object.create(obj1);
console.log("obj3: ",obj3);
obj3.key3 ="value3";
console.log("obj3 key3 : ",obj3.key3);
console.log("obj3 key2 : ",obj3.key2);

// create => if key found in call object then print
//  create => if key not found then find in passed object create(obj1);
obj3.key2 ="unique";
console.log("obj3 key2 : ",obj3.key2);


console.log("obj3: ",obj3);
// in js if value not found then js check Prototype

// __proto__ & [[Prototype]] are same
console.log("obj3 __proto__ : ",obj3.__proto__);


// suppose add million methods then add reference million time (problem)
// solution here
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
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user5 = CreateUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user5",user5);
const aboutMe = user5.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user5.is18();
console.log("is18: ",is18);
const sing = user5.sing();
console.log("sing: ",sing);












