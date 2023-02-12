// proto , prottype , class
const user = {
    firstName: "Osama",
    lastName:"Adil",
    email:"osama.adil@gmail.com",
    age:23,
    address:"House Number Street Number ",
    aboutMe(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    },
    is18(){
        return this.age>=18;
    }
}
console.log("user",user);

// function (that function create object) 
// 2. add key-value pair
// 3. return object 

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.aboutMe = function(){
        return `My Name is ${this.firstName} and My Age is ${this.age}`;
    }
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}
const user1 = createUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
console.log("user1",user1);
const aboutMe = user1.aboutMe();
console.log("aboutMe: ",aboutMe);
const is18 = user1.is18();
console.log("is18: ",is18);

// this method make copy the aboutMe & is18 function everytime (problem)
const user2 = createUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
const user3 = createUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")
const user4 = createUser("Usama","Tariq","usama.tariq@gmail.com",22,"abcdef ghi")

// solution (next file)