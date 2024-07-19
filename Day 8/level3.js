// 1. Create an object literal called personAccount.It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1500 },
        { description: 'Groceries', amount: 300 }
    ],

    totalIncome() {
        let total = 0;
        for (const income of this.incomes) {
            total += income.amount;
        }
        return total;
    },

    totalExpense() {
        let total = 0;
        for (const expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },

    accountInfo() {
        return `Account Holder: ${this.firstName} ${this.lastName}\n` +
            `Total Income: $${this.totalIncome()}\n` +
            `Total Expense: $${this.totalExpense()}\n` +
            `Account Balance: $${this.accountBalance()}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};
personAccount.addIncome('Investment', 1000);
personAccount.addExpense('Utilities', 200);

console.log(personAccount.accountInfo());

// **** Questions: 2, 3 and 4 are based on the following two arrays:users and products()
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
// 2. Imagine you are getting the above users collection from a MongoDB database.
// a.Create a function called signUp which allows user to add to the collection.If user exists, inform the user that he has already an account.
function signUp(username, email, password) {
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        console.log("Tài khoản đã tồn tại");
        return;
    }

    const newId = (Math.random() + 1).toString(36).substring(2, 7);

    const currentTime = new Date().toLocaleString();

    users.push({
        _id: newId,
        username: username,
        email: email,
        password: password,
        createdAt: currentTime,
        isLoggedIn: false
    });

    console.log("Đăng ký thành công");
}
signUp('NewUser', 'newuser@newmail.com', 'newpassword123');
signUp('Alex', 'alex@alex.com', 'newpassword123')
// b.Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
    const user = users.find(user => user.email === email);

    if (!user) {
        console.log("Tài khoản không tồn tại");
        return;
    }

    if (user.password !== password) {
        console.log("Mật khẩu không chính xác");
        return;
    }

    user.isLoggedIn = true;
    console.log("Đăng nhập thành công");
}
signIn('alex@alex.com', '123123')
signIn('martha@martha.com', 'wrongpassword')
signIn('nonexistent@nonexistent.com', '123456')
// 3. The products array has three elements and each of them has six properties.

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
// a.Create a function called rateProduct which rates the product 
function rateProduct(userId, productId, rate) {
    const user = users.find(user => user._id === userId);
    if (!user || !user.isLoggedIn) {
        console.log("Người dùng phải đăng nhập để đánh giá");
        return;
    }

    const product = products.find(product => product._id === productId);
    if (!product) {
        console.log("Sản phẩm không tồn tại");
        return;
    }

    const existingRating = product.ratings.find(rating => rating.userId === userId);
    if (existingRating) {
        existingRating.rate = rate
        console.log("Đã cập nhật đánh giá thành công");
    } else {
        product.ratings.push({ userId, rate })
        console.log("Đã thêm đánh giá thành công");
    }
}
rateProduct('fg12cy', 'aegfal', 4)
rateProduct('zwf8md', 'eedfcf', 5)
rateProduct('eefamr', 'hedfcg', 3)
rateProduct('nonexistent', 'aegfal', 4)
// b.Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
    const product = products.find(product => product._id === productId);

    if (!product) {
        console.log("Không tìm thấy sản phẩm");
        return;
    }

    if (product.ratings.length === 0) {
        console.log("Chưa có đánh giá nào");
        return;
    }

    let totalRating = 0;
    for (const rating of product.ratings) {
        totalRating += rating.rate;
    }

    const average = totalRating / product.ratings.length;
    console.log(`Trung bình đánh giá của ${productId}: ${average.toFixed(2)}`);
}
averageRating('eedfcf')
averageRating('aegfal')
averageRating('hedfcg')
averageRating('nonexistent')
// 4. Create a function called likeProduct.This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userId, productId) {
    const user = users.find(user => user._id === userId);
    if (!user) {
        console.log("Tài khoản không tồn tại");
        return;
    }

    if (!user.isLoggedIn) {
        console.log("Bạn phải đăng nhập để thích");
        return;
    }

    const product = products.find(product => product._id === productId);
    if (!product) {
        console.log("Sản phẩm không tồn tại");
        return;
    }

    const isLiked = product.likes.includes(userId);

    if (isLiked) {
        product.likes = product.likes.filter(like => like !== userId);
        console.log("Bỏ thích");
    } else {
        product.likes.push(userId);
        console.log("Thích");
    }
}
likeProduct('fg12cy', 'eedfcf')
likeProduct('zwf8md', 'aegfal')
likeProduct('zwf8md', 'aegfal')
likeProduct('eefamr', 'hedfcg')
likeProduct('nonexistent', 'aegfal')
