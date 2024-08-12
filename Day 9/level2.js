const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Russia",
  "Poland",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Portugal",
];
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const total = products
  .filter((item) => item.price !== "" && !isNaN(item.price)) // Lọc các sản phẩm có giá hợp lệ
  .map((item) => Number(item.price)) // Chuyển đổi giá thành số
  .reduce((sum, price) => sum + price, 0); // Tính tổng giá

console.log("Tổng giá: ", total); // Kết quả: 27
// 2. Find the sum of price of products using only reduce reduce(callback))
const totalOnlyReduce = products.reduce((sum, item) => {
  const price = parseFloat(item.price); // Chuyển đổi giá thành số
  return !isNaN(price) ? sum + price : sum; // Cộng giá nếu hợp lệ, nếu không thì bỏ qua
}, 0);

console.log("Tổng giá chỉ dùng reduce: ", totalOnlyReduce);
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countries.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}

console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("den"));
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countFirstLetter(countries) {
  const letterCount = {};

  countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase(); // Lấy chữ cái đầu tiên và chuyển thành chữ hoa
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });
  console.log(letterCount);
  const result = Object.keys(letterCount).map((letter) => ({
    letter: letter,
    count: letterCount[letter],
  }));

  return result;
}

console.log(countFirstLetter(countries));
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(countries) {
  return countries.slice(0, 10).map((country) => country);
}
console.log(getFirstTenCountries(countries));
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(countries) {
  return countries.slice(countries.length - 10, countries.length); //hoặc slice(-10)
  // .map((country) => country);
}
console.log(getLastTenCountries(countries));
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function findMostCommonFirstLetter(countries) {
  const letterCount = {};

  countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });

  // Tìm chữ cái có số lần xuất hiện nhiều nhất
  let mostCommonLetter = "";
  let maxCount = 0;

  for (const letter in letterCount) {
    if (letterCount[letter] > maxCount) {
      maxCount = letterCount[letter];
      mostCommonLetter = letter;
    }
  }

  return { letter: mostCommonLetter, count: maxCount };
}
console.log(findMostCommonFirstLetter(countries));
