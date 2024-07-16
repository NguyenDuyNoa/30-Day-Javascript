// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, knownValue, knownVariable = 'y') {
    let result;
    if (knownVariable === 'y') {
        if (a === 0) {
            throw new Error("Hệ số a không thể bằng 0 khi giải cho x.");
        }
        result = (-b * knownValue - c) / a;
    } else if (knownVariable === 'x') {
        if (b === 0) {
            throw new Error("Hệ số b không thể bằng 0 khi giải cho y.");
        }
        result = (-a * knownValue - c) / b;
    } else {
        throw new Error("Biến đã biết phải là 'x' hoặc 'y'.");
    }
    return result;
}

let a = 2, b = 3, c = -6, y = 1, x = 1;
console.log(`Phương trình ${a}x + ${b}y + ${c} = 0, với y = ${y}, x = ${solveLinEquation(a, b, c, y, 'y')}`); // Output: x = -1.5
console.log(`Phương trình ${a}x + ${b}y + ${c} = 0, với x = ${x}, y = ${solveLinEquation(a, b, c, x, 'x')}`); // Output: y = 1.3333
// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log(`Phương trình có một nghiệm kép: x = ${x}`);
    } else {
        console.log("Phương trình vô nghiệm");
    }
}

console.log(solveQuadEquation())
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))
// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1, 2, 3, 4, 5]);
// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    console.log(formattedDateTime);
}
showDateTime();
// 5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}
console.log(swapValues(3, 5))
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(arr) {
    let reverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse
}
console.log(reverseArray(['A', 'B', 'C']))
// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// 14. Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// 15. Writ a function which generates a randomUserIp.

// 16. Write a function which generates a randomMacAddress
// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE