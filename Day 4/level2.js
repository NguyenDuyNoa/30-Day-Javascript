// 1. Write a code which can give grades to students according to theirs scores:
// -  80-100, A
// -  70-89, B
// -  60-69, C
// -  50-59, D
// -  0-49, F
let num = parseFloat(prompt("Nhập vào điểm của bạn:"));
let grades = parseFloat(num);

switch (true) {
    case (grades >= 80 && grades <= 100):
        console.log("Bạn đạt điểm A");
        break;
    case (grades >= 70 && grades <= 89):
        console.log("Bạn đạt điểm B");
        break;
    case (grades >= 60 && grades <= 69):
        console.log("Bạn đạt điểm C");
        break;
    case (grades >= 50 && grades <= 59):
        console.log("Bạn đạt điểm D");
        break;
    case (grades >= 0 && grades <= 49):
        console.log("Bạn đạt điểm F");
        break;
    default:
        console.log("Điểm của bạn nhập không nằm trong khoảng 0 đến 100");
}
// 7. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// -  September, October or November, the season is Autumn.
// -  December, January or February, the season is Winter.
// -  March, April or May, the season is Spring
// -  June, July or August, the season is Summer
let month = prompt("Nhập vào tên tháng bằng tiếng Anh:").toLowerCase();
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log("Mùa hiện tại là mùa Thu.");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("Mùa hiện tại là mùa Đông.");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Mùa hiện tại là mùa Xuân.");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Mùa hiện tại là mùa Hè.");
        break;
    default:
        console.log("Tên tháng bạn nhập không hợp lệ.");
}
// 12. Check if a day is weekend day or a working day. Your script will take day as an input.
//   What is the day  today? Saturday
//   Saturday is a weekend.
//   What is the day today? saturDaY
//   Saturday is a weekend.
//   What is the day today? Friday
//   Friday is a working day.
//   What is the day today? FrIDAy
//   Friday is a working day.
let day = prompt("Hôm nay là ngày gì?").toLowerCase();
switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${capitalizeFirstLetter(day)} là ngày làm việc.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${capitalizeFirstLetter(day)} là ngày cuối tuần.`);
        break;
    default:
        console.log("Tên ngày bạn nhập không hợp lệ.");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
