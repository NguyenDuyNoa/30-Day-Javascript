// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 day
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
let month = prompt("Nhập vào tên tháng bằng tiếng Anh:").toLowerCase();
let year = parseInt(prompt("Nhập vào năm:"));
let days;
switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        days = 31;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        days = 30;
        break;
    case 'february':
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days = 29; // Năm nhuận
        } else {
            days = 28;
        }
        break;
    default:
        console.log("Tên tháng bạn nhập không hợp lệ.");
        days = null;
}

if (days) {
    console.log(`Tháng ${capitalizeFirstLetter(month)} có ${days} ngày.`);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
