

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


a = input("Enter a number: ")
b = input("Enter another number: ")
c = input("What is the result? ")
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