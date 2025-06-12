
let prompt = require("prompt-sync")()

const person = {
    name: "John",
    age: 30
}

const greet = function(intelligience){
    console.log("Hello " + this.name + ", you are " + intelligience)
}
person.greet = greet.bind(person)


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
    try{
        let res = await result
        person.greet(res)
    }catch(err){
        person.greet(err)
    }

}
areYouSmart()