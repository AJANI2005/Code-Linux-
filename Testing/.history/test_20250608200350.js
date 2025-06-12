

const Person = {
    name: "John",
    age: 30
}

const greet = function(name){
    console.log("Hello " + name)
}

const person = Person()
const greetPerson = greet.bind(person, person.name)