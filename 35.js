// super keyword
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1
    }
    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is ${this.age} and ${this.speed}`
    }
}

const puppy = new Dog("puppy",1,12)
console.log("puppy: ",puppy);
console.log(puppy.run());
console.log(puppy.eat());

