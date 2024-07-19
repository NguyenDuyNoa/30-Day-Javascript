const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: "paul@paul.com",
        skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
// 1. Find the person who has many skills in the users object.
let mostSkilledPerson = null;
let maxSkills = 0;

for (const user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        mostSkilledPerson = user;
    }
}

console.log(`${mostSkilledPerson} là người có nhiều kỹ năng nhất, với ${maxSkills} kỹ năng`);
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let userIsLoggedIn = 0
let pointsAbove50 = 0
for (const user in users) {
    if (users[user].isLoggedIn == true) {
        userIsLoggedIn += 1
    }
    if (users[user].points >= 50) {
        pointsAbove50 += 1
    }
}
console.log(`Số người đã đăng nhập là: ${userIsLoggedIn} \nSố người có điểm trên 50 là: ${pointsAbove50}`)
// 3. Find people who are MERN stack developer from the users object
const mernDevelopers = [];

for (const user in users) {
    if (users[user].skills.includes("MongoDB") &&
        users[user].skills.includes("Express") &&
        users[user].skills.includes("React") &&
        users[user].skills.includes("Node")) {
        mernDevelopers.push(user);
    }
}
console.log("MERN stack developers:", mernDevelopers);
// 4. Set your name in the users object without modifying the original users object
const myName = Object.assign({
    Noa: {
        email: "noa@gmail.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 22,
        isLoggedIn: false,
        points: 40
    }
}, users)
console.log("Đặt tên của tôi vào đối tượng mà không sửa đổi: ",myName)
// 5. Get all keys or properties of users object
const keys = Object.keys(users);
console.log("Lấy key: ",keys);
// 6. Get all the values of users object
const values = Object.values(users);
console.log("Lấy value: ",values);
