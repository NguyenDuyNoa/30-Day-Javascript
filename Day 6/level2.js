// 1. Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
const random = Math.random().toString(36).substring(2)
console.log("Ký tự được random là:", random)
// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'
const randomHexa = Math.random().toString(16).substring(2, 8)
console.log("Số hex ngẫu nhiên:", '#' + randomHexa)
// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
console.log(`Màu RGB là: rgb(${r},${g},${b})`);
// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const uppercaseCountries = [];
for (let i = 0; i < countries.length; i++) {
    uppercaseCountries.push(countries[i].toUpperCase());
}
console.log("Mảng sau khi viết hoa tất cả: ", uppercaseCountries);
// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const lengthCountries = []
for (let i = 0; i < countries.length; i++) {
    lengthCountries.push(countries[i].length);
}
console.log("Chiều dài của các phần tử trong mảng: ", lengthCountries)
// 6. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
let newCoutries = []
for (let i = 0; i < countries.length; i++) {
    newCoutries.push([countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length])
}
console.log("Mảng mới là: ", newCoutries)
// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let landCoutries = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        landCoutries.push(countries[i])
    }
}
landCoutries !== 0
    ? console.log("Các quốc gia có từ land: ", landCoutries)
    : console.log("Không có quốc gia nào có từ land")
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
let iaCoutries = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
        iaCoutries.push(countries[i])
    }
}
iaCoutries !== 0
    ? console.log("Các quốc gia có từ cuối là \"ia\": ", iaCoutries)
    : console.log("Không có quốc gia nào có từ \"ia\" ở cuối từ:")
// 9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let longestCountryName = '';
let maxLength = 0;
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length;
        longestCountryName = countries[i];
    }
}
console.log("Quốc gia có nhiều ký tự nhất là: ", longestCountryName);
// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let fiveCharacters = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        fiveCharacters.push(countries[i])
    }
}
console.log("Các quốc gia có 5 ký tự:", fiveCharacters)
// 11. Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
let longestWord = ''
let maxLengthWord = 0
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > maxLengthWord) {
        maxLengthWord = webTechs[i].length
        longestWord = webTechs[i]
    }
}
console.log("Ngôn ngữ có nhiều từ nhất là:", longestWord)
// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let newWebTechs = []
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log("Mảng mới: ", newWebTechs)
// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let mernAcronym = '';
for (let i = 0; i < mernStack.length; i++) {
    mernAcronym += mernStack[i][0];
}
console.log(mernAcronym);
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i]);
}
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon']
const newFruit = []
for (let i = fruit.length - 1; i >= 0; i--) {
    newFruit.push(fruit[i])
}
console.log(newFruit)
// 16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
// ````

// ```sh
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase())
    }
}
