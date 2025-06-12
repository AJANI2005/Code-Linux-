

const person = {
    name: "John",
    age: 30
}

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
Person.prototype.greet = function(){
    console.log("Hello " + this.name)
}

jack = new Person("Jack", 20)
jack.greet()
