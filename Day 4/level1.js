// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
let age = prompt("Nhập tuổi của bạn: ")
console.log(`Tuổi của bạn là: ${age}`)
if (parseFloat(age) > 18){
    console.log("Bạn đã đủ tuổi để lái xe.")
} else {
    console.log(`Bạn cần ${18-parseFloat(age)} tuổi nửa để lái xe`)
}
// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
let yourAge = parseFloat(prompt("Nhập tuổi của bạn:"))
let myAge = 22;
if (yourAge > myAge){
    console.log(`Bạn lớn hơn tôi ${yourAge-myAge} tuổi`)
} else {
    console.log(`Bạn nhỏ hơn tôi ${myAge-yourAge} tuổi`)
}
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
// using if else
if (a > b) {
    console.log(`${a} lớn hơn ${b}`)
} else {
    console.log(`${a} nhỏ hơn ${b}`)
}
// ternary operator.
a > b
    ? console.log(`${a} lớn hơn ${b}`)
    : console.log(`${a} nhỏ hơn ${b}`)
// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
let number = parseFloat(prompt("Nhập vào một số: "));
if (number % 2 === 0) {
    console.log(`${number} là số chẵn`)
}
else {

    console.log(`${number} là số lẻ`);
}
