

const person = {
    name: "John",
    age: 30
}

const greet = function(name){
    console.log("Hello " + name)
}

const greetPerson = greet.bind(person, person.name)
greetPerson()