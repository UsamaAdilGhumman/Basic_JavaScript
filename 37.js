// getter & setters
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
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new Person("Osama","Tariq",12);
console.log(user.fullName);
user.firstName = "Ali";
user.lastName = "Ahmad";
console.log(user.fullName);
user.setName("Nimra","Saif")
console.log(user.fullName);
user.fullName = "Tariq Mahmood"
console.log(user.fullName);


