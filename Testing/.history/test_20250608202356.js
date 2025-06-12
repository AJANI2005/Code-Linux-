
let prompt = require("prompt-sync")()

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
    console.log("Calculating...")
    setTimeout(() => {
        if(Number(a) + Number(b) == Number(c)){
            resolve("Correct")
        }else{
            reject("Incorrect")
        }
    }, 2000)
})

const areYouSmart = async () => {
    const output = await result
    console.log(output)
}