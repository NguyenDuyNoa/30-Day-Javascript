// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 1. Sort the array and find the min and max age
const sort = ages.sort()
console.log("Mảng đã sắp xếp: ", sort)
console.log("Tuổi thấp nhất: ", sort[0])
console.log("Tuổi cao nhất: ", sort[sort.length - 1])
// 2. Find the median age(one middle item or two middle items divided by two)
let middleAge;
if (ages.length % 2 === 0) {
    const middleIndex = ages.length / 2;
    middleAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    const middleIndex = Math.floor(ages.length / 2);
    middleAge = ages[middleIndex];
}
console.log("Tuổi trung bình:", middleAge);
// 3. Find the average age(all items divided by number of items)
const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;
console.log("Độ tuổi trung bình:", averageAge);
// 4. Find the range of the ages(max minus min)
console.log("Khoảng tuổi là: ", sort[sort.length - 1] - sort[0])
// 5. Compare the value of (min - average) and (max - average), use abs() method 
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);
console.log("Độ chênh lệch tuyệt đối giữa min và average:", diffMin);
console.log("Độ chênh lệch tuyệt đối giữa max và average:", diffMax);
// 6. Slice the first ten countries from the countries array
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
    // 'VietNam'
]
console.log("Mười quốc gia đầu tiên: ", countries.slice(0, 10))
// 7. Find the middle country(ies) in the countries array
const middleCountry = Math.floor(countries.length / 2)
if ( countries.length % 2 == 0){
    console.log("Quốc gia ở giữa là:", countries[middleCountry - 1], 'và', countries[middleCountry])
} else {
    console.log("Quốc gia ở giữa là:", countries[middleCountry - 1])
}
// 8. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let halfLength = Math.ceil(countries.length / 2);
let firstHalf = countries.slice(0, halfLength);
let secondHalf = countries.slice(halfLength);
console.log("Nửa đầu:", firstHalf);
console.log("Nửa sau:", secondHalf);
