// 1. Using console.log() print out the following statement:
    // The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
// 2. Using console.log() print out the following quote by Mother Teresa:
    // "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof 10 === typeof Number(10));
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(Math.round('9.8')) == 10)
// 5. Check if 'on' is found in both python and jargon
let language1 = 'python'
let language2 = 'jargon'
console.log(language1.includes('on') & language2.includes('on'))
// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes('jargon'))
// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101))
// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*51) + 50)
// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*256))
// 10. Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
console.log(js.charAt(Math.floor(Math.random()*(js.length))))
// 11. Use console.log() and escape characters to print the following pattern.
    // 1 1 1 1 1
    // 2 1 2 4 8
    // 3 1 3 9 27
    // 4 1 4 16 64
    // 5 1 5 25 125
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let text1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(text1.substring(text1.includes('because because because')))
console.log(text1.replace(' because because because', ''))