// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortByName = countries
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
console.log("Sort by name:", sortByName);

const sortByCapital = countries
  .slice()
  .sort((a, b) => a.capital.localeCompare(b.capital));
console.log("Sort by capital:", sortByCapital);

const sortByPopulation = countries
  .slice()
  .sort((a, b) => a.population - b.population);
console.log("Sort by population:", sortByPopulation);
// 2. *** Find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
function mostSpokenLanguages(countries, topN) {
  const languageCount = {};

  // Duyệt qua tất cả các quốc gia và cập nhật số lượng người nói cho mỗi ngôn ngữ
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (languageCount[language]) {
        languageCount[language] += country.population;
      } else {
        languageCount[language] = country.population;
      }
    });
  });

  // Chuyển đối tượng thành mảng và sắp xếp theo số lượng người nói
  const sortedLanguages = Object.entries(languageCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, topN);

  // Chuyển đổi mảng thành định dạng mong muốn
  return sortedLanguages.map(([country, count]) => ({ country, count }));
}

console.log(
  "Mười ngôn ngữ được dùng nhiều nhất: ",
  mostSpokenLanguages(countries, 10)
);

// 3. *** Use countries_data.js file create a function which create the ten most populated countries
// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
function mostPopulatedCountries(countries, topN) {
  const sortedCountries = countries
    .slice()
    .sort((a, b) => a.population - b.population);

  return sortedCountries.slice(0, topN);
}

console.log(
  "Mười quốc gia đông dân nhất: ",
  mostPopulatedCountries(countries, 10)
);
