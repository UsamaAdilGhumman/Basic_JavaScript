// state methods and properties
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName,lastName] = name.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static classInfo(){
        return "this is person class"
    }
    eat(){
        return `${this.firstName} is eating`
    }
    isSuperCute(){
        return this.age<=1
    }
    isCute(){
        return true;
    }
    static des = "static property"
}

// state methods and properties only access by class name
// state methods and properties not need object
const user = new Person("Osama","Tariq",12);
console.log(user.eat());
console.log(Person.classInfo());
console.log(Person.des);

