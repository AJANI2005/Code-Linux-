import prompt from "prompt-sync"

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


let a = prompt("Enter a number: ")
let b = prompt("Enter another number: ")
let c = prompt("What is the result? ")
const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(a + b == c){
            resolve("Correct")
        }else{
            reject("Incorrect")
        }
    }, 5000)
})

result.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})