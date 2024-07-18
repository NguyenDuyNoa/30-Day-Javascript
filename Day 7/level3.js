//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratedByUser() {
    // const n = parseInt(prompt("Nhập vào số ký tự:"))
    // const m = parseInt(prompt("Nhập vào số id cần tạo:"))
    const n = 2; m = 3;

    function generateUserId(n) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let userId = '';

        for (let i = 0; i < n; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters[randomIndex];
        }
        return userId;
    }

    let userIds = []

    for (let i = 0; i < m; i++) {
        userIds.push(generateUserId(n))
    }
    return userIds
}
console.log("Số id được tạo ra là:", userIdGeneratedByUser())
//2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
console.log("Màu rgb ramdom:", rgbColorGenerator())
//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numOfColors) {
    const hexDigits = '0123456789ABCDEF';
    const colors = [];

    function generateHexaColor() {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hexDigits.length);
            hexColor += hexDigits[randomIndex];
        }
        return hexColor;
    }

    for (let i = 0; i < numOfColors; i++) {
        colors.push(generateHexaColor());
    }

    return colors;
}
let ramdomHexColor = arrayOfHexaColors(5)
console.log("5 màu thập lục bất kỳ:", ramdomHexColor);
//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(numOfColors) {
    function generateRgbColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`
    }

    let colors = []
    for (let i = 0; i < numOfColors; i++) {
        colors.push(generateRgbColor());
    }
    return colors
}
let ramdomRgbColor = arrayOfRgbColors(3)
console.log("3 màu RGB bất kỳ:", ramdomRgbColor)
//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexColor) {
    hexColor = hexColor.replace('#', '');

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(`Chuyển màu hex ở trên từ ${ramdomHexColor[0]} sang`, convertHexaToRgb(ramdomHexColor[0]));
//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbColor) {
    const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return hexColor.toUpperCase();
}

console.log(`Chuyển màu RGB ở trên từ ${ramdomRgbColor[0]} sang`, convertRgbToHexa(ramdomRgbColor[0]));

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(type, num) {
    if (type == 'hexa') {
        const hexDigits = '0123456789ABCDEF';
        const colors = [];

        function generateHexaColor() {
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                const randomIndex = Math.floor(Math.random() * hexDigits.length);
                hexColor += hexDigits[randomIndex];
            }
            return hexColor;
        }

        for (let i = 0; i < num; i++) {
            colors.push(generateHexaColor());
        }

        return colors;
    }

    if (type == 'rgb') {
        function generateRgbColor() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return `rgb(${red},${green},${blue})`
        }

        let colors = []
        for (let i = 0; i < num; i++) {
            colors.push(generateRgbColor());
        }
        return colors
    }
}
console.log(generateColors('hexa', 4))
console.log(generateColors('rgb', 3))
//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5];
console.log("Mảng ban đầu:", originalArray);
console.log("Mảng sau khi sáo trộn:", shuffleArray(originalArray));
//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    let factorial = 1
    let factorialString = ''
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
        factorialString = factorialString + i
        i < num
            ? factorialString = factorialString + ' * '
            : factorialString = factorialString + ' = '
    }
    factorialString += factorial
    return factorialString
}
console.log("Giai thừa của 4 là:", factorial(4))
//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(...arr) {
    arr == ''
        ? console.log("Rỗng")
        : console.log("Không rỗng")
}
isEmpty(12)
//11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(num) {
    let sum = 0
    let sumString = ''
    for (let i = 1; i <= num; i++) {
        sum += i

        sumString = sumString + i
        i < num
            ? sumString = sumString + ' + '
            : sumString = sumString + ' = '
    }
    sumString += sum
    return sumString
}
console.log("Tổng từ 1 đến 5 là:", sum(5))
//12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.log(`Dữ liệu nhập vào phải là số, dữ liệu ở index ${i} không phải là số`)
        }
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += i
    }
    return sum
}
console.log("Tổng 1 mảng bất kỳ: ", sumOfArrayItems([1, 2, '3']))
//13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            temp += 1
            console.log(`Dữ liệu nhập vào phải là số, dữ liệu ở index ${i} không phải là số`)
        }
    }
    let average = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            average += arr[i]
        }
    }
    return (average / (arr.length - temp))
}
console.log("Trung bình 1 mảng bất kỳ: ", average([1, 2, '3', 4, 5]))
//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(arr) {
    if (arr.length < 5) {
        console.log("Không tìm thấy")
    }
    arr[4] = arr[4].toUpperCase()
    return arr
}
console.log("Viết hoa phần tử thứ 5:", modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
//15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    if (num < 2) {
        return "không là số nguyên tố";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "không là số nguyên tố";
        }
    }

    return "là số nguyên tố";
}
console.log("Số 10 có phải là số nguyên tố:", isPrime(10))
//16. Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(arr) {
    let uniqueItems = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (uniqueItems.has(arr[i])) {
            return false;
        }
        uniqueItems.add(arr[i]);
    }

    return true;
}

console.log(areAllItemsUnique([1, 2, 3, 4, 5, 3]));
console.log(areAllItemsUnique(['a', 'b', 'c', 'a']));
//17. Write a function which checks if all the items of the array are the same data type.
function areAllItemsSameType(arr) {
    if (arr.length === 0) {
        return "Mảng có cùng kiểu dữ liệu";
    }

    const firstType = typeof arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
            return "Mảng không cùng kiểu dữ liệu";
        }
    }
    return "Mảng có cùng kiểu dữ liệu";
}
console.log(areAllItemsSameType([1, 2, 3, 4, 5]));
console.log(areAllItemsSameType([1, '2', 3, 4, 5]));
console.log(areAllItemsSameType(['a', 'b', 'c', 'd']));
console.log(areAllItemsSameType(['a', 2, 'c', 'd']));

//18. JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variableName) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variableName);
}
console.log(isValidVariable("validName"));
console.log(isValidVariable("_validName"));
console.log(isValidVariable("$validName"));
console.log(isValidVariable("1invalidName"));
console.log(isValidVariable("invalid-name"));
console.log(isValidVariable("invalid name"));
console.log(isValidVariable("validName123"));
//19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    let numbers = [];

    while (numbers.length < 7) {
        let randomNum = Math.floor(Math.random() * 10);

        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}
console.log(sevenRandomNumbers())

//20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
    let copiedArray = countries.slice();
    copiedArray.reverse();
    return copiedArray;
}
let countries = ['USA', 'Canada', 'Australia', 'Germany'];
let reversedCountries = reverseCountries(countries);

console.log(reversedCountries);
console.log(countries);
