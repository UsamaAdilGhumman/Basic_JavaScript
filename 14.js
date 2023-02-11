// objects inside array

const users = [
    {userId:1,firstName:"Osama",gender:"male"},
    {userId:2,firstName:"Adil",gender:"male"},
    {userId:3,firstName:"Tariq",gender:"male"},
    {userId:4,firstName:"Nimra",gender:"female"},
]
console.log("users: ",users);

for(let user of users){
    console.log("user: ",user);
    console.log("userId: ",user.userId);
    console.log("firstName: ",user.firstName);
}
// nested destructuring
console.warn("nested destructuring");
const [user1,user2,,{firstName,gender}] = users;
console.log("user1: ",user1);
console.log("user2: ",user2);
console.log("firstName: ",firstName);
console.log("gender : ",gender);


