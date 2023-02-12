// Callback functions

function myfun(a){
    console.log(a);
    a();
}

function myfun2(){
    console.log("hello i am fun2");
}

myfun(myfun2)


// convention to write callback

function newfun(callback){
    console.log("i am working!!!");
    callback(2,3);
}


function sum(a,b){
    console.log("callback fun : ",a+b);
}

newfun(sum)