const countries = [
    'Ireland',
    'Canada',
    'Albania',
    'Bolivia',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Japan',
    'Kenya',
    'South Korea',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1. Copy countries array(Avoid mutation)
const countriesCopy = countries.slice();
console.log("Mảng sao chép là: ", countriesCopy)
// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = countriesCopy.sort();
console.log("Mảng đã sắp xếp: ", sortedCountries)
// 3. Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();
console.log("Mảng webTechs đã sắp xếp: ", webTechs)
console.log("Mảng mernStack đã sắp xếp: ", mernStack)
// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const landCoutries = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land"))
        landCoutries.push(countries[i])
}
console.log("Các nước có chữ land: ", landCoutries)
// 5. Find the country containing the hightest number of characters in the countries array
let maxLength = 0
let maxLengthWord = ''
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length
        maxLengthWord = countries[i]
    }
}
console.log("Tên quốc gia dài nhất là: ", maxLengthWord)
// 7. Extract all the countries containing only four characters from the countries array and print it as array
let fourWord = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 4) {
        fourWord.push(countries[i])
    } 
}
console.log("Các quốc gia có 4 ký tự: ",fourWord)
// 8. Extract all the countries containing two or more words from the countries array and print it as array
let twoOrMoreWords = []
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes(" ")){
        twoOrMoreWords.push(countries[i])
    }
}
console.log("Các quốc gia có từ 2 chữ: ",twoOrMoreWords)
// 9. Reverse the countries array and capitalize each country and stored it as an array
console.log("Đảo ngược mảng:", countries.reverse())