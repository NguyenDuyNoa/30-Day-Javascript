const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach: Thực thi hàm cho mỗi phần tử (không trả về giá trị).
// map: Tạo mảng mới từ việc biến đổi các phần tử.
// filter: Tạo mảng mới từ các phần tử thỏa mãn điều kiện.
// reduce: Tích lũy các phần tử thành một giá trị duy nhất.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// 3. Use forEach to console.log each country in the countries array.
countries.forEach((countrie) => {
    console.log(countrie)
})
// 4. Use forEach to console.log each name in the names array.
names.forEach((name) => {
    console.log(name)
})
// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
    console.log(number)
})
// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map((countrie) => {
    console.log(countrie.toUpperCase())
})
// 7. Use map to create an array of countries length from countries array.
const newCountriesLength = countries.map((countrie) => {
    console.log(`${countrie} có số ký tự là: `, countrie.length)
})
// 8. Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map((num) => {
    console.log(`Bình phương của ${num} là:`, num * num)
})
// 9. Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((name) => {
    console.log(`Viết hoa ${name} là:`, name.toUpperCase())
})
// 10. Use map to map the products array to its corresponding prices.
function mapProductWithPrice(product) {
    return {
        product: product.product,
        price: product.price === '' || product.price === ' ' ? 0 : product.price
    };
}
const mappedProducts = products.map(mapProductWithPrice);
console.log(mappedProducts);
// 11. Use filter to filter out countries containing land.
const containsLand = countries.filter(country => country.toLowerCase().includes('land'))
console.log(containsLand);
// 12. Use filter to filter out countries having six character.
const countryHavingSixCharacter = countries.filter(country => country.length === 6)
console.log(countryHavingSixCharacter);
// 13. Use filter to filter out countries containing six letters and more in the country array.
const countryHavingSixCharacterAndMore = countries.filter(country => country.length >= 6)
console.log(countryHavingSixCharacterAndMore);
// 14. Use filter to filter out country start with 'E';
const startWithE = countries.filter(country => country.startsWith('E'))
console.log(startWithE)
// 15. Use filter to filter out only prices with values.
const productsWithValidPrices = products.filter(product => {
    const price = product.price;
    return price !== '' && price !== ' ' && !isNaN(parseFloat(price));
});
console.log(productsWithValidPrices);
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}
// 17. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((arr, cur) => arr + cur, 0)
console.log("Tổng mảng num:", sum)
// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesSentence = countries.reduce((accumulator, currentValue, index, array) => {
    if (index === array.length - 1) {
        return `${accumulator} và ${currentValue}`;
    }
    return `${accumulator}, ${currentValue}`;
}, );

console.log(`${countriesSentence} là các quốc gia Bắc Âu`)
// 19. Explain the difference between some and every
// some: Trả về true nếu ít nhất một phần tử thỏa mãn điều kiện. Nếu không có phần tử nào thỏa mãn, trả về false.
// every: Trả về true nếu tất cả các phần tử đều thỏa mãn điều kiện. Nếu có bất kỳ phần tử nào không thỏa mãn, trả về false.

// 20. Use some to check if some names' length greater than seven in names array
const nameGreaterThanSeven = names.some(name => name.length >7)
console.log(nameGreaterThanSeven)
// 21. Use every to check if all the countries contain the word land
const countriesHavingWordLand = countries.every(country => country.includes('land'))
console.log(countriesHavingWordLand)
// 22. Explain the difference between find and findIndex.
// find: Trả về phần tử đầu tiên trong mảng mà thỏa mãn điều kiện. Nếu không tìm thấy, trả về undefined.
// findIndex: Trả về chỉ số của phần tử đầu tiên trong mảng mà thỏa mãn điều kiện. Nếu không tìm thấy, trả về -1.

// 23. Use find to find the first country containing only six letters in the countries array
const findSixLetters = countries.find(country => country.length == 6)
console.log(findSixLetters)
// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const findFirtCountrySixLetters = countries.findIndex(country => country.length == 6)
console.log(findFirtCountrySixLetters,countries[findFirtCountrySixLetters])
// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex(country => country.includes('Norway'))
console.log(findNorway)
// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex(country => country.includes('Russia'))
console.log(findRussia)
