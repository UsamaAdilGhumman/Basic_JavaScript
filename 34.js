// class practice & extends keyword
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

const animal1 = new Animal("puppy",12);
console.log("animal1 : ",animal1);
console.log(animal1.eat());
console.log(animal1.isCute());

class Dog extends Animal{

}

// object or instance
const puppy = new Dog("puppy",1)
console.log("puppy: ",puppy);
console.log(puppy.eat());

