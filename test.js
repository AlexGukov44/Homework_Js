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

*/

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