// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log("Các phần tử trong mảng words: ", words)
console.log("Chiều dài mảng words: ", words.length)
// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// 4. add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
console.log("Thêm Meat vào đầu mảng: ", shoppingCart)
// 5. add Sugar at the end of you shopping cart if it has not been already added
let checkSugar = shoppingCart.includes("Sugar")
if (!checkSugar) {
    shoppingCart.push("Sugar")
}
console.log("Thêm đường vào cuối: ", shoppingCart)
// 6. remove 'Honey' if you are allergic to honey
const indexHoney = shoppingCart.indexOf('Honey');
if (indexHoney !== -1) {
    shoppingCart.splice(indexHoney, 1);
}
console.log("Xóa honey: ", shoppingCart)
// 7. modify Tea to 'Green Tea'
const indexTea = shoppingCart.indexOf('Tea');
if (indexTea !== -1) {
    shoppingCart[indexTea] = "Green tea";
}
console.log("Thay tea thành green tea: ", shoppingCart)
// 8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
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
    'Kenya'
]

const indexEthiopia = countries.indexOf("Ethiopia")
if (indexEthiopia === -1){
    countries.push("Ethiopia")
    console.log("Thêm Ethiopia nếu không có: ", countries)
} else {
    console.log("In Ethiopia in hoa: ",countries[indexEthiopia].toUpperCase())
} 
// 9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const indexSass = webTechs.indexOf("Sass");
if (indexSass === -1) {
    webTechs.push("Sass");
    console.log("Thêm Sass nếu không có: ", webTechs);
} else {
    console.log("Sass is a CSS preprocess");
}
// 10. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log("Nối hai mảng: ",fullStack)
