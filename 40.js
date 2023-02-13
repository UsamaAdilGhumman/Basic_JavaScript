// function execution context // local execution context
// jb b function call how ga tw new execution context create how ga
let foo = "foo";
console.log(foo);
function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Osama","Tariq");
console.log(personName);