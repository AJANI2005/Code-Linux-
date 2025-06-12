

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

const greet = function(name){
    console.log("Hello " + name)
}

const greetPerson = greet.bind(person, person.name)
greetPerson()