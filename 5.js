// if else condition

let num = 13
if(num%2 === 0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}



// truthy and falsy value

// falsy value 

// 1. false
// 2. ""
// 3. null
// 4. undefined
// 5. 0


// truthy value 
// 1. "abc"
// 2. 1,-1

let mynum = ""
if(mynum){
    console.log("mynum : ",mynum);
}else{
    console.log("no value ")
}

// ternary operator
let age = 2
let drink = (age >=5) ? "tea" : "milk"
console.log(age,drink);

// and or operator
// && => and
// || => or 

// nested if else
// prompt("enter number ") // use to take number from user


// switch Statement
let day = 5
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}


