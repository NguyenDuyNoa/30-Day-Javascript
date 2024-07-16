// 1. Declare a function fullName and it print out your full name.
function fullName1() {
    let lastName = 'Duy Noa'
    let firstName = "Nguyễn"
    console.log(firstName, lastName)
}
fullName1()
// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName) {
    console.log(firstName, lastName)
}
fullName2("Nguyễn", "Noa")
// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    return a + b
}
console.log("Tổng của a và b là:", addNumbers(5, 10))
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function area(length, width) {
    return length * width
}
console.log("Diện tích của hình chữ nhật với cạnh a, b:", area(5, 4))
// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}
console.log(`Diện tích của hình chữ nhật với cạnh a, b: `, perimeterOfRectangle(2, 6))
// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volume(a, b, c) {
    return a * b * c
}
console.log("Thể tích hình chữ nhật cạnh a, b, c là: ", volume(2, 3, 4))
// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let pi = Math.PI
    return pi * r * r
}
console.log("Diện tích hình tròn với bán kính r là: ", areaOfCircle(4))
// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(r) {
    let pi = Math.PI
    return 2 * pi * r
}
console.log("Chu vi hình tròn với bán kính r là: ", circumference(4))
// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume
}
console.log("Mật độ của 1 chất với khối lượng và thể tích là: ", density(20, 4))
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return distance / time
}
console.log("Tốc độ với quảng đường 20km và thời gian 4 tiếng là: ", speed(20, 4), "km/h")
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass) {
    let gravity = 9.81
    return mass * gravity
}
console.log("Trọng lượng của một chất có khối lượng 3 kg là: ", weight(3))
// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
    return (oC * 9 / 5) + 32
}
console.log("Nhiệt độ F tương ứng với 100 oC: ", convertCelsiusToFahrenheit(100))
// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function bmi(weight, height) {
    return weight / (height * height)
}
let result = bmi(70, 1.72)
console.log("Với chỉ số bmi là: ", result, "thì")
if (result < 18.5) {
    console.log("Bạn thiếu cân")
}
if (result > 18.5 & result < 24.9) {
    console.log("Cân nặng bạn bình thường")
}
if (result > 25 & result < 29.9) {
    console.log("Bạn thừa cân")
}
if (result > 30) {
    console.log("Bạn béo phì")
}
// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(number) {
    switch (number) {
        case 1:
        case 2:
        case 3:
            console.log("Mùa xuân");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Mùa hạ");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Mùa thu");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Mùa đông");
            break;
        default:
            console.log("Số không hợp lệ");
    }
}
checkSeason(2);
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log(findMax(1, 6, 3))
