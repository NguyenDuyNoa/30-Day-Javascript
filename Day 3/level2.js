// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt("Nhập vào đáy: ")
let height = prompt("Nhập vào chiều cao: ")
alert("Diện tích tam giác là: " + 0.5*parseFloat(base)*parseFloat(height))
// 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = prompt("Nhập cạnh a: ")
let b = prompt("Nhập cạnh b: ")
let c = prompt("Nhập cạnh c: ")
alert("Chu vi hình tam giác là: " + (parseFloat(a)+parseFloat(b)+parseFloat(c)))
// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Nhập chiều dài: ")
let width = prompt("Nhập chiều rộng: ")
alert("Diện tích hình chữ nhật: " + parseFloat(length)*parseFloat(width))
alert("Chu vi hình chữ nhật: " + ((parseFloat(length)+parseFloat(width))*2))
// 2. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt("Nhập vào bán kính: ")
alert("Chu vi đường tròn là: " + 2*3.14*parseFloat(r) + "\nDiện tích hình tròn là: " + 3.14*parseFloat(r)*parseFloat(r))
// 3. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Phương trình: y = 2x - 2
// Độ dốc
let slope = 2;
console.log("Slope (m):", slope);
// Giao điểm với trục y
let yIntercept = -2; // Khi x = 0
console.log("Y-intercept (b):", yIntercept);
// Giao điểm với trục x
let xIntercept = 1; // Khi y = 0, giải phương trình 0 = 2x - 2
console.log("X-intercept:", xIntercept);
// 4. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// Tọa độ điểm
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
// Tính độ dốc
let slope1 = (y2 - y1) / (x2 - x1);
// Hiển thị kết quả
console.log("Slope (m) between points (2, 2) and (6, 10):", slope1);
// 5. Compare the slope of above two questions.
console.log("So sánh hai độ dốc (slope) trên: ", slope == slope1)
// 6. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//Tính y
let x = prompt("Nhập giá trị của x:");
x = parseFloat(x);
let y = x * x + 6 * x + 9;
alert(`Với x = ${x}, y = ${y}`);

//Tính x khi y = 0 , đó là phương trình bậc hai
function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        return [x];
    } else {
        return []; // Phương trình không có nghiệm thực
    }
}

// Hệ số của phương trình bậc hai
let d = 1;
let e = 6;
let f = 9;

// Giải phương trình bậc hai
let solutions = solveQuadratic(d, e, f);

// Hiển thị kết quả
if (solutions.length === 2) {
    alert(`Phương trình có hai nghiệm: x1 = ${solutions[0]}, x2 = ${solutions[1]}`);
} else if (solutions.length === 1) {
    alert(`Phương trình có một nghiệm: x = ${solutions[0]}`);
} else {
    alert("Phương trình không có nghiệm thực");
}

// 7. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hourDo = prompt ("Nhập giờ: ")
let ratePerHour = prompt("Nhập mức lương theo giờ: ")
alert("Lương của bạn là: " + parseFloat(hourDo)*parseFloat(ratePerHour))
// 8. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Noa"
console.log(myName.length > 7 ? " Dài" : "Ngắn")
// 9. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let myLastName = 'Nguyễn'
console.log(`Tên của tôi, ${myName} thì ngắn hơn họ của tôi, ${myLastName}`)
// 10. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// I am 225 years older than you.
let myAge = 250
let yourAge = 25
console.log(`Tôi hơn bạn ${myAge-yourAge}`)
// 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let ageYear = prompt("Nhập năm sinh của bạn: ")
console.log(`Tuổi của bạn là ${2024 - parseFloat(ageYear)}.` , (2024 - parseFloat(ageYear)) > 18 ? "Bạn đủ tuổi lái xe" : `Bạn không đủ tuổi lái xe, bạn cần đợi thêm ${18 - (2024 - parseFloat(ageYear))} năm`)
// 2. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let years = prompt("Nhập vào số năm: ")
let secondInYear = 365*24*60*60
console.log(`Bạn đã sống ${parseFloat(years)*secondInYear} giây `)
// 1. Create a human readable time format using the Date time object
// 2. YYYY-MM-DD HH:mm
// 3. DD-MM-YYYY HH:mm
// 4. DD/MM/YYYY HH:mm
let newNow = new Date();

let year = newNow.getFullYear();
let month = String(newNow.getMonth() + 1).padStart(2, '0'); // Thêm 1 vào tháng vì tháng bắt đầu từ 0
let day = String(newNow.getDate()).padStart(2, '0');
let hours = String(newNow.getHours()).padStart(2, '0');
let minutes = String(newNow.getMinutes()).padStart(2, '0');

console.log(`Định dạng YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`Định dạng DD-MM-YYYY HH:mm: ${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`Định dạng DD/MM/YYYY HH:mm: ${day}/${month}/${year} ${hours}:${minutes}`);
