// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.split(' ').filter(word => word.toLowerCase() === 'love').length)
// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let count = 'You cannot end a sentence with because because because is a conjunction'
console.log((count.match(/because/gi)).length)
// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanText = sentence.replace(/[^\w\s]/gi, ''); // Remove all non-word characters except spaces
let words = cleanText.split(/\s+/); // Split by one or more whitespace characters
let wordFrequency = {};
words.forEach(word => {
    word = word.toLowerCase(); // Convert to lowercase to normalize
    if (word in wordFrequency) {
        wordFrequency[word]++;
    } else {
        wordFrequency[word] = 1;
    }
});

// Step 4: Find the most frequent word
let mostFrequentWord = '';
let maxFrequency = 0;

for (let word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        maxFrequency = wordFrequency[word];
        mostFrequentWord = word;
    }
}

console.log('Cleaned Text:', cleanText);
console.log('Most Frequent Word:', mostFrequentWord, 'appeared', maxFrequency, 'times');

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// Tách các từ trong văn bản
let wordss = text5.split(' ');

// Khởi tạo biến lưu tổng thu nhập hàng năm
let annualIncome = 0;

// Duyệt qua từng từ trong mảng words
for (let i = 0; i < wordss.length; i++) {
    let word = wordss[i];

    // Nếu từ hiện tại là một số và từ tiếp theo là "euro" thì xử lý
    if (!isNaN(word) && wordss[i + 1] === 'euro') {
        annualIncome += parseInt(word); // Cộng số vào tổng thu nhập
    }
}

console.log('Tổng thu nhập hàng năm:', annualIncome, 'euro');
