// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
firstName = "Noa"
lastName = "Nguyễn"
country = "Việt Nam"
city = "Hồ Chí Minh"
age = "22"
isMarried = false
year = 2024

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
// 2. Check if type of '10' is equal to 10
console.log(typeof ('10') == 10)
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
// 4. Boolean value is either true or false.
console.log(true)
// 5. Write three JavaScript statement which provide truthy value.
console.log(5 == 3)
console.log(firstName == 'Nguyễn')
console.log(5 != "5")
// 6. Write three JavaScript statement which provide falsy value.
console.log(firstName == 'Noa')
console.log(lastName === 'Nguyễn')
console.log(5 == '5')
// 7. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 8. 4 > 3 true
console.log("4 > 3: ", 4 > 3)
// 9. 4 >= 3 true
console.log("4 >= 3: ", 4 >= 3)
// 10. 4 < 3 false
console.log("4 < 3: ", 4 < 3)
// 11. 4 <= 3 false
console.log("4 <= 3: ", 4 <= 3)
// 12. 4 == 4 true
console.log("4 == 4: ", 4 == 4 )
// 13. 4 === 4 true
console.log("4 === 4: ", 4 === 4 )
// 14. 4 != 4 false
console.log("4 != 4: ", 4 != 4 )
// 15. 4 !== 4 false
console.log("4 !== 4: ", 4 !== 4 )
// 16. 4 != '4' false
console.log("4 != '4': ",4 != '4')
// 17. 4 == '4' true
console.log("4 == '4': ",4 == '4')
// 18. 4 === '4' false
console.log("4 === '4': ",4 === '4')
// 19. Find the length of python and jargon and make a falsy comparison statement.
console.log("Length of python and jargon (!=): ", 'python'.length != 'jargon'.length)
// 20. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 21. 4 > 3 && 10 < 12 true
console.log("4 > 3 && 10 < 12: ", 4 > 3 && 10 < 12)
// 22. 4 > 3 && 10 > 12 false
console.log("4 > 3 && 10 > 12: ", 4 > 3 && 10 > 12)
// 23. 4 > 3 || 10 < 12 true
console.log("4 > 3 || 10 < 12: ", 4 > 3 || 10 < 12)
// 24. 4 > 3 || 10 > 12 true
console.log("4 > 3 || 10 > 12: ", 4 > 3 || 10 > 12)
// 25. !(4 > 3) false
console.log("!(4 > 3): ", !(4 > 3))
// 26. !(4 < 3) true
console.log("!(4 < 3): ", !(4 < 3))
// 27. !(false) true
console.log("!(false): ", !(false))
// 28. !(4 > 3 && 10 < 12) false
console.log("!(4 > 3 && 10 < 12): ", !(4 > 3 && 10 < 12))
// 29. !(4 > 3 && 10 > 12) true
console.log("!(4 > 3 && 10 > 12): ", !(4 > 3 && 10 > 12))
// 30. !(4 === '4') true
console.log("!(4 === '4'): ", !(4 === '4'))
// 31. There is no 'on' in both dragon and python
console.log("Có \"on\" trong \"dragon\" và \"python\": ", "dragon".includes('on') &&  "python".includes('on'))
// 32. Use the Date object to do the following activities
let now = new Date()
// 33. What is the year today?
console.log("Năm nay là: ",now.getFullYear())
// 34. What is the month today as a number?
console.log("Tháng nay là: ", now.getMonth())
// 35. What is the date today?
console.log("Hôm nay thứ: ", now.getDate())
// 36. What is the day today as a number?
console.log("Ngày hôm nay: ", now.getDay())
// 37. What is the hours now?
console.log("Giờ này là: ", now.getHours())
// 38. What is the minutes now?
console.log("Phút này là: ", now.getMinutes())
// 39. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log("Số giât từ ngày January 1, 1970 đến nay: ", now.getTime())