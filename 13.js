// Computed properties

const key1 = "objkey1"
const key2 = "objkey2"
const key3 = "objkey3"
const key4 = "objkey4"

const value1 = "value1"
const value2 = "value2"

const obj = {
    [key1]: value1,
    [key2]: value2
}
obj[key3] = value1;
obj[key4] = value2;

console.log("obj : ",obj);


// spread operator in array
const newArray1 = [...'abc']
const newArray2 = [...'12345678910']
console.log("newArray1 : ",newArray1);
console.log("newArray2 : ",newArray2);


// spread operator in obj 
// obj have unique keys

const obj1 = {
    [key1]: value1,
    [key2]: value2
}
const obj2 = {
    [key3]: value1,
    [key4]: value2
}
const newObj = {...obj1,...obj2}
console.log(newObj);
const newObj1 = {...obj1,...obj2, key45:"value45"}
console.log(newObj1);
const myObj = {..."abcdef"}
console.log(myObj);
console.warn("!Object destructuring!");

// Object destructuring

const bank ={
    bankName: "Allied Bank",
    countryName:"Pakistan",
    location:"Lahore",
    anotherlocation:"Islambad",
}

const {bankName,countryName} = bank;
// when change the name of variable so, location change into myloc
const {location:myloc} = bank;
// other remaining properties can save using spread operator
const {bankName:nbank,countryName:country,...newbank} = bank;

console.log("bankName : ",bankName);
console.log("countryName : ",countryName);
console.log("myloc : ",myloc);
console.log("nbank: ",nbank);
console.log("country : ",country);
console.log("newbank : ",newbank);





