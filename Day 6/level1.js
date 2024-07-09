// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i < 11; i++) {
    console.log("Số i từ 0 đến 10 với for: ", i)
}
let i = 0
while (i < 11) {
    console.log("Số i từ 0 đến 10 với while: ", i)
    i++
}

let j = 0
do {
    console.log("Số i từ 0 đến 10 với do while: ", j)
    j++
} while (j < 11)
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i > 0; i--) {
    console.log("Số i từ 10 đến 0 với for: ", i)
}

let m = 10
while (m > 0) {
    console.log("Số i từ 10 đến 0 với while: ", m)
    m--
}

let p = 10
do {
    console.log("Số i từ 10 đến 0 với do while: ", p)
    p--
} while (p > 0)
// 3. Iterate 0 to n using for loop
let n = 12
for (let i = 0; i <= n; i++) {
    console.log("Số từ 0 đến n: ", i)
}
// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for (let i = 1; i <= 7; i++) {
    console.log("In ra #: ", '#'.repeat(i))
}
// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = `, i * i)
}
// 6. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for (let i = 1; i <= 10; i++) {
    console.log(`${i} \t ${i * i} \t ${i * i * i}`);
}
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Các số chẵn từ 0 đến 100 là: ", i)
    }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("Các số lẻ từ 0 đến 100 là: ", i)
    }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(num) {
    if (num <= 1) return false; // Số 0 và 1 không phải là số nguyên tố
    if (num <= 3) return true;  // Số 2 và 3 là số nguyên tố
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Kiểm tra các ước số từ 5 đến căn bậc hai của num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log("Các số nguyên tố từ 0 đến 100 là:", i);
    }
}
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("Tổng từ 0 đến 100 là: ", sum)
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumChan = 0;
let sumLe = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 == 0
        ? sumChan += i
        : sumLe += i;
}
console.log("Tổng các số chẵn từ 0 đến 100 là: ", sumChan, ". Và tổng các số lẻ từ 0 đến 100 là:", sumLe)
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
let arr = [sumChan,sumLe]
console.log("Mảng tổng chẵn và tổng lẻ là: ",arr)
// 13. Develop a small script which generate array of 5 random numbers
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
}
console.log("Mảng ngẫu nhiên: ",randomArray);
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomArray2 = [];
while (randomArray2.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100);
    if (!randomArray2.includes(randomNumber)) {
        randomArray2.push(randomNumber);
    }
}
console.log("Mảng ngẫu nhiên không trùng: ",randomArray2);
// 15. Develop a small script which generate a six characters random id:
// 5j2khz
const randomId = Math.random().toString(36).substring(2, 8);
console.log("id ngẫu nhiên gồm sáu ký tự: ",randomId);