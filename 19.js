// function return function

function myfun(){
    function hello(a,b,c){
        console.log("hello world");
        console.log(a,b,c);
    }
    return hello
}

const ans = myfun()
ans(1,2,4);


// High Order function
// which input function or return function