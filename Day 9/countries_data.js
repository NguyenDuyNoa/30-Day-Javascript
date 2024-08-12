const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    languages: ['Croatian'],
    population: 4190669,
    flag: 'https://restcountries.eu/data/hrv.svg',
    currency: 'Croatian kuna'
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    languages: ['Spanish'],
    population: 11239004,
    flag: 'https://restcountries.eu/data/cub.svg',
    currency: 'Cuban convertible peso'
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    languages: ['Dutch', '(Eastern) Punjabi', 'English'],
    population: 154843,
    flag: 'https://restcountries.eu/data/cuw.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    languages: ['Greek (modern)', 'Turkish', 'Armenian'],
    population: 847000,
    flag: 'https://restcountries.eu/data/cyp.svg',
    currency: 'Euro'
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    languages: ['Czech', 'Slovak'],
    population: 10558524,
    flag: 'https://restcountries.eu/data/cze.svg',
    currency: 'Czech koruna'
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    languages: ['Danish'],
    population: 5717014,
    flag: 'https://restcountries.eu/data/dnk.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    languages: ['French', 'Arabic'],
    population: 900000,
    flag: 'https://restcountries.eu/data/dji.svg',
    currency: 'Djiboutian franc'
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    languages: ['English'],
    population: 71293,
    flag: 'https://restcountries.eu/data/dma.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    languages: ['Spanish'],
    population: 10075045,
    flag: 'https://restcountries.eu/data/dom.svg',
    currency: 'Dominican peso'
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    languages: ['Spanish'],
    population: 16545799,
    flag: 'https://restcountries.eu/data/ecu.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    languages: ['Arabic'],
    population: 91290000,
    flag: 'https://restcountries.eu/data/egy.svg',
    currency: 'Egyptian pound'
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    languages: ['Spanish'],
    population: 6520675,
    flag: 'https://restcountries.eu/data/slv.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    languages: ['Spanish', 'French'],
    population: 1222442,
    flag: 'https://restcountries.eu/data/gnq.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    languages: ['Tigrinya', 'Arabic', 'English'],
    population: 5352000,
    flag: 'https://restcountries.eu/data/eri.svg',
    currency: 'Eritrean nakfa'
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    languages: ['Estonian'],
    population: 1315944,
    flag: 'https://restcountries.eu/data/est.svg',
    currency: 'Euro'
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    languages: ['Amharic'],
    population: 92206005,
    flag: 'https://restcountries.eu/data/eth.svg',
    currency: 'Ethiopian birr'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    languages: ['English'],
    population: 2563,
    flag: 'https://restcountries.eu/data/flk.svg',
    currency: 'Falkland Islands pound'
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    languages: ['Faroese'],
    population: 49376,
    flag: 'https://restcountries.eu/data/fro.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
    population: 867000,
    flag: 'https://restcountries.eu/data/fji.svg',
    currency: 'Fijian dollar'
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    languages: ['Finnish', 'Swedish'],
    population: 5491817,
    flag: 'https://restcountries.eu/data/fin.svg',
    currency: 'Euro'
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: ['French'],
    population: 66710000,
    flag: 'https://restcountries.eu/data/fra.svg',
    currency: 'Euro'
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    languages: ['French'],
    population: 254541,
    flag: 'https://restcountries.eu/data/guf.svg',
    currency: 'Euro'
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    languages: ['French'],
    population: 271800,
    flag: 'https://restcountries.eu/data/pyf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    languages: ['French'],
    population: 140,
    flag: 'https://restcountries.eu/data/atf.svg',
    currency: 'Euro'
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    languages: ['French'],
    population: 1802278,
    flag: 'https://restcountries.eu/data/gab.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    languages: ['English'],
    population: 1882450,
    flag: 'https://restcountries.eu/data/gmb.svg',
    currency: 'Gambian dalasi'
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    languages: ['Georgian'],
    population: 3720400,
    flag: 'https://restcountries.eu/data/geo.svg',
    currency: 'Georgian Lari'
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: 'https://restcountries.eu/data/deu.svg',
    currency: 'Euro'
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    languages: ['English'],
    population: 27670174,
    flag: 'https://restcountries.eu/data/gha.svg',
    currency: 'Ghanaian cedi'
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    languages: ['English'],
    population: 33140,
    flag: 'https://restcountries.eu/data/gib.svg',
    currency: 'Gibraltar pound'
  },
  {
    name: 'Greece',
    capital: 'Athens',
    languages: ['Greek (modern)'],
    population: 10858018,
    flag: 'https://restcountries.eu/data/grc.svg',
    currency: 'Euro'
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    languages: ['Kalaallisut'],
    population: 55847,
    flag: 'https://restcountries.eu/data/grl.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    languages: ['English'],
    population: 103328,
    flag: 'https://restcountries.eu/data/grd.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    languages: ['French'],
    population: 400132,
    flag: 'https://restcountries.eu/data/glp.svg',
    currency: 'Euro'
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    languages: ['English', 'Chamorro', 'Spanish'],
    population: 184200,
    flag: 'https://restcountries.eu/data/gum.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://restcountries.eu/data/gtm.svg',
    currency: 'Guatemalan quetzal'
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://restcountries.eu/data/ggy.svg',
    currency: 'British pound'
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://restcountries.eu/data/gin.svg',
    currency: 'Guinean franc'
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    languages: ['Arabic'],
    population: 27478000,
    flag: 'https://restcountries.eu/data/yem.svg',
    currency: 'Yemeni rial'
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://restcountries.eu/data/zmb.svg',
    currency: 'Zambian kwacha'
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://restcountries.eu/data/zwe.svg',
    currency: 'Botswana pula'
  }
]
