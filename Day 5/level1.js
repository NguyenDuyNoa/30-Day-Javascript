//   1. Declare an empty array;
const arrNull = []
//   2. Declare an array with more than 5 number of elements
const arr = [1, 2, 3, 4, 5, 6]
//   3. Find the length of your array
console.log("Chiều dài của mảng arrNull là: ", arrNull.length)
console.log("Chiều dài của mảng arr là: ", arr.length)
//   4. Get the first item, the middle item and the last item of the array
console.log("Phần tử đầu tiên:", arr[0])
console.log("Phần tử giữa:", arr[arr.length / 2])
console.log("Phần tử cuối cùng:", arr[arr.length - 1])
//   5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, '2', 'ba', ["bốn"], [5], 6]
console.log("Chiều dài của mảng mixedDataTypes là:", mixedDataTypes.length)
//   6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//   7. Print the array using console.log()
console.log("Mảng itCompanies có các phần tử là: ", itCompanies)
//   8. Print the number of companies in the array
console.log("Số lượng các công ty trong mảng là: ", itCompanies.length)
//   9. Print the first company, middle and last company
console.log("Công ty đầu tiên là: ", itCompanies[0])
console.log("Công ty giữa là: ", itCompanies[Math.floor(itCompanies.length / 2)])
console.log("Công ty cuối là: ", itCompanies[itCompanies.length - 1])
//   10. Print out each company
console.log("Tên từng công ty là: ", itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])
//   11. Change each company name to uppercase one by one and print them out
console.log("Tên các công ty in hoa: ", itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())
//   12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], "và", itCompanies[6], 'là những công ty CNTT lớn')
//   13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let check = itCompanies.includes('Apple')
check
    ? console.log("Công ty tồn tại trong mảng")
    : console.log("Công ty không tồn tại trong mảng")
//   14. Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            count++;
        }
    }
    if (count > 1) {
        companiesWithMoreThanOneO.push(itCompanies[i]);
    }
}
console.log(companiesWithMoreThanOneO);
//   15. Sort the array using sort() method
const sort = itCompanies.sort()
console.log("Xắp sếp mảng: ", sort)
//   16. Reverse the array using reverse() method
const reverse = itCompanies.reverse()
console.log("Đảo ngược mảng: ", reverse)
//   17. Slice out the first 3 companies from the array
const first3Companies = itCompanies.slice(0, 3)
console.log("Cắt 3 phần tử đầu: ", first3Companies)
//   18. Slice out the last 3 companies from the array
const last3Companies = itCompanies.slice(Math.floor(itCompanies.length) / 2, itCompanies.length - 1)
console.log("Cắt 3 phần tử cuối: ", last3Companies)
//   19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompany = itCompanies.slice(middleIndex, middleIndex + 1);
console.log("Cắt phần tử ở giữa: ", middleCompany)
//   20. Remove the first IT company from the array
console.log("Xóa công ty đầu tiên:", itCompanies.shift())
//   21. Remove the middle IT company or companies from the array
console.log("Xóa công ty ở giữa: ", itCompanies.splice(middleIndex, 1))
//   22. Remove the last IT company from the array
console.log("Xóa công ty cuối: ", itCompanies.pop())
//   23. Remove all IT companies
console.log("Xóa tất cả: ", itCompanies.splice(0, itCompanies.length))
