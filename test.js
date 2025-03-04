/*
let a = 10;
let b = 4;
let c = 2

console.log(a + b); // 14
console.log(a - b); // 6
console.log(a * b); // 40
console.log(a / b); // 2.5
console.log(a % b); // 2
console.log(a + b * c); //18
console.log((a + b) * c); //28


let x = 10;
let y = 8;

console.log(x > y); // 10>8 = true
console.log(x < y); // 10<8 = false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x == y); // false // не важен тип данных
console.log(x === y); // false // важен тип данных 
console.log('не равно и строго не равно');
console.log(x != y); // true // не важен тип данных
console.log(x !== y); // true // важен тип данных 


let z = 5;

z += 5; // z = z + 5 = 10
console.log(z);

console.log(a + b > x + z);  // (10 + 4) > (10 + 5)

// шпаргалка для себя ( не очевидные знаки)
/* && => И   (проверяет все уловия и возвращает TRUE если они верны)
   || => ИЛИ (проверяет все условия и возвращает TRUE если хотя бы одно верно)
   !  => НЕ  (меняет значение на противоположное )


let lessons = true;
let time = false;

if (lessons && time) {
    console.log("хорошо, ты можешь идти гулять!");
} else {
    console.log("Ты не можешь идти гулять!");
}

let money = true;
let coupon = false;

if (money || coupon) {
    console.log('Ты можешь приобрести мороженое!');
} else {
    console.log("Сегодня останешься без мороженого...");
}


let lightOn = true;

if (!lightOn) {     // меняет значение с TRUE на FALSE 
    console.log("Свет уже выключен, всё в порядке.");
} else {
    console.log("Свет включен, выключи его!"); // выходит эта строка 
}


let keys = true; // ключи с собой 
let phone = false; // телефон забыли 
let ironOff = true; // утюг выключен 

if ((keys && phone) && ironOff) {
    console.log("выходите из дома");
} else {
    console.log("не выходите из дома");
}


// 5 урок (функции)

function sayHello() {
    console.log("привет!");
}

// вызов функции 
sayHello();

function welcomeUser(user) {
    console.log("привет," + user + "!");
}

// вызов функции с аргументом 
welcomeUser("Наташа");



function addNumbers(a, d) {
    console.log(a + d);
}

addNumbers(3, 7);
addNumbers(2527, 8986);


function sumNumbers(c, d) {
    return c + d;
}

let sum = sumNumbers(5, 7);
console.log(sum);




function calcArea(width, height) {
    if (width <= 0 || height <= 0) {
        return "данные не корректны";
    }
    return width * height;
}
// return останавливает работу функции 
console.log(calcArea(5, 10));



// урок № 6 

for (let i = 0; i < 5; i++) {
    console.log(`количество шагов: ${i}`);
}

let counter = 0;
while (counter < 5) {
    console.log(`счетчик: ${counter}`);
    counter++;
}

let number = 10;
do {
    console.log(`число: ${number}`);
    number++;
} while(number < 5);

*/

// урок №7

let numbers = [1, 2, 3, 4, 5, 6];   // массив чисел 

let fruits = ["яблоко", "апельсин", "манго"];  // массив строк
fruits[2] = "банан";

let mixed = [2, "яблоко", true];    // масив с разными типами 

console.log(numbers[0]);
console.log(fruits[2]);
console.log(mixed[1]);

// push, unshift, indexOf, includes, forEach, map, filter, sort, join
// pop - удаляет последний элемент
// shift - удаляет первый элемент 

let vegetables = ["огурец", "картошка", "баклажан"];
vegetables.push("морковь");   // добавить в конец
vegetables.unshift("чеснок"); // добавить в начало 


console.log(vegetables);
console.log(vegetables.join(". "));   // обьединяет ( запятая добавлена как рпзделитель между элементами)
console.log(vegetables.indexOf("чеснок")); // узнать индекс элемента 
console.log(vegetables.includes("лук"));   // узнать наличие элемента

vegetables.forEach((vegetables, index) => {  // выполняет функцию для каждого элемента
    console.log(`${index}: ${vegetables}`);
});

let multiplication = numbers.map(numbers => numbers * 2); // создает новый масив, преобразуя элементы
console.log(multiplication);

let even = numbers.filter(numbers => numbers % 2 === 0); // вывод чётных чисел
let ogg = numbers.filter(numbers => numbers % 2 !== 0);  // вывод не чётных чисел
console.log(even);
console.log(ogg);

const products = [
    {name: "ноутбук", price: 50000},
    {name: "смартфон", price: 30000},
    {name: "планшет", price: 20000},
    {name: "наушники", price: 5000},
    {name: "клавиатура", price: 5000}
];

products.sort((a, b) => a.price - b.price); // сортровка в данном случае от меньшего к большему
console.log("сортировка по цене:");
console.log(products);

const chancellery = ["карандаш", "ручка", "ластик"];
for (let i = 0; i < chancellery.length; i++) {
    console.log(`концелярия: ${chancellery[i]}`);
}

chancellery.forEach((chancellery) => {
    console.log(`концелярия: ${chancellery}`);
});

const user1 = {
    firstName: "Мария",
    lastName: "Петрова",
    age: 25,
    isEmployed: false,
    contact: {
        email: "marina@mail.com",
        phone: "89004562323"
    },
    hobbies: ["танцы", "рисование"],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const user2 = {
    firstName: "Алексей",
    lastName: "Сидоров",
    age: 32,
    isEmployed: true,
    contact: {
        email: "aleksey@mail.com",
        phone: "89004569090"
    },
    hobbies: ["футбол", "музыка"],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let people = [user1, user2];
console.log(people);

for (let i = 0; i < people.length; i++) {
    const currentUser = people[i];
    console.log(`${currentUser.getFullName()} имеет хобби: ${currentUser.hobbies.join(", ")}`);
};
    