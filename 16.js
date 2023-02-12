// hoisting
// function in last but we can call in first

// hoisting work only in func decleartion

hello();

function hello(){
    console.log("hello");
}

// helloworld();  // error bcz hoisting work only in func decleartion
// const helloworld = () => {
//     console.log("hello");
// }

// function inside function

const app = () => {
    const sum = (num1,num2) => num1+ num2

    console.log(sum(2,3));
}

app()

// lexical scope

