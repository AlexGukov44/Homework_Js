// ДЗ № 1

let book = {
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: 1840,
    getSummary() {
        return `Название: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}.`
    }
};

console.log(book.getSummary()); // Название: Герой нашего времени, Автор: Михаил Лермонтов, Год издания: 1840.

// ДЗ # 2

let laptop = {
    brand: "apple",
    model: "pro 16",
    processor: "m1 pro",
    price: 150000
};
// 1)
for (let features in laptop) {
    console.log(`${features}: ${laptop[features]}`);
};
/* 
   brand: apple
   model: pro 16
   processor: m1 pro
   price: 150000  
*/
// 2)
Object.entries(laptop).forEach(([key, value]) => console.log(`${key}: ${value}`));
/*
   brand: apple
   model: pro 16
   processor: m1 pro
   price: 150000
*/

// ДЗ 3 

let basicInfo = {
    name: "Александр",
    age: 40
};

let contactInfo = {
    email: "mail@email.ru",
    phone: "89116661313"
};

let preferences = {
    language: "Русский",
    theme: "dark"
};

// 1)
let userProfile = Object.assign({}, basicInfo, contactInfo, preferences);
// 2)
console.log(userProfile);
// 3)
userProfile.theme = "light";
console.log(userProfile);
// 4)
Object.freeze(userProfile);   // заморозка от удаления 

delete userProfile.name;      // попытка удаления 
console.log(userProfile);     // проверка ( удаление не сработало )