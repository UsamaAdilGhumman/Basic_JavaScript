// lexical environmennt, scope chain

const lastName = "Tariq"

const printName = function(){
    const firstName = "Osama";
    console.log(firstName);
    // if not able in local then check in parent
    console.log(lastName);
}
printName();

console.log("!!!!!!!!!!!!!");

const print = function(){
    const firstName = "Osama";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
print();