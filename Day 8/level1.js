// 1. Create an empty object called dog
const dog = {}
// 2. Print the the dog object on the console
console.log("Object dog: ", dog)
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Bug'
dog.legs = 4
dog.color = 'white'
dog.age = 3
dog.bark = function () {
    return "woof woof"
}
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name) 
console.log(dog.legs) 
console.log(dog.color) 
console.log(dog.age) 
console.log(dog.bark()) 
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'cogi'
dog.getDogInfo = function(){
    return `Tên của chú chó là: ${this.name} có ${this.legs} chân, lông màu ${this.color} và được ${this.age}`
}
console.log(dog.getDogInfo())