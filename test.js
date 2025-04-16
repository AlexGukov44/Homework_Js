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



// уррок № 8

const user = {
    name: "Анна",
    age: 25,
    isStudent: true
};
delete user.age;  // удаляет ключь в обьекте 

for (let key in user) {    // перебор свойств с for
    console.log(`${key}: ${user[key]}`)
}    

Object.keys(user).forEach(key => console.log(`${key}: ${user[key]}`)); // перебор с forEach ( ключ )

Object.values(user).forEach(value => console.log(value)); // перебор values ( по значению ) 

Object.entries(user).forEach(([key, value]) => console.log(`${key}: ${value}`)); // перебор (ключ: значение)

console.log(user);
console.log(user.name);    // доступ к обьекту ( в данном случае name )

const house = new Object();
house.developerComplex = "ПИК";
house.nameComplex = "Исеть Парк";
house.yearComplex = 2022;

console.log(house);

const products = [
    {name: "ноутбук", price: 50000},
    {name: "смартфон", price: 30000},
    {name: "планшет", price: 20000},
    {name: "наушники", price: 5000},
    {name: "клавиатура", price: 5000}
];

console.log(products);

const fruit = { name: "Яблоко" };
const obj = Object.create(fruit);
console.log(obj.name);   // вывод содержимого без системных символов 


let flower = {
    name: "Роза"
};

let characteristics = {
    color: "Красный",
    height: 25
};

let combined = Object.assign({}, flower, characteristics); // обьединение обькетов
console.log(combined);

Object.freeze(combined); // заморозка обьекта от изменений 
delete combined.height;  // удаление не сработало 



// урок № 9

let text = document.querySelector("p"); // связь по тегу ( р )
let textClass = document.querySelector(".hello"); // связь по классу ( .hello )
let textAll = document.querySelectorAll("p"); // связь на все теги ( р ) 

let textId = document.getElementById("helloText"); // связь по идентификатору ( helloText )
textId.textContent = "Привет";  // замена текста по идентификатору на ( Привет )
textId.style.color = "lightblue"; // замена стилей (цвета) по идентификатору на ( lightblue ) 
textId.remove(); // удаление по идентификатору ( helloText )

let textNew = document.createElement("p"); // добавление элемента 
textNew.textContent = "новый текст"; // к примеру новый текст
document.body.appendChild(textNew); // пример добавления в тег <body> в конец 
document.body.prepend(textNew); // пример добавления в тег <body> в начало 
document.querySelector(".box").prepend(textNew); // пример добавления по классу ( вох ) в начало

// вывод данных из массива 

let fruits = ["яблоко", "мандарн", "манго"];
let changeTextArray = document.querySelector("array"); // по классу ( array )
changeTextArray.innerText = fruits.join(", ");

// вывод из обьекта 

let obj = {
    name: "Никита",
    age: 30,
    city: "Москва"
};

let changeTextObj = document.querySelector(".obj"); // берем класс ( obj )
const values = Object.values(obj);                  // берем значение обьекта ( obj )
changeTextObj.innerText = values.join(", ");        // выводим текстом обьединяем чере ( , )



// урок № 10

let button = document.querySelector("button");

button.onclick = function() {   // старый способ обработчика по селектору
    alert("вы нажали кнопку!");
};

button.addEventListener("click", function() { // новый способ вместо click пишем любой обработчик
    alert("вы нажали кнопку.");
});


let boxColor = document.getElementById("boxColor");

boxColor.addEventListener("mouseover", () => { // при наведении курсора 
    boxColor.style.backgroundColor = "green";
});
boxColor.addEventListener("mouseout", () => { // при отведении курсора 
    boxColor.style.backgroundColor = "blue";
});


// обработка события input

let input = document.getElementById("inputText"); // обработка ввода
let output = document.getElementById("output");   // обработка вывода

output.textContent = "ваше сообщение: " + input.value;  // дублируем из вывода для отображения до ввода

input.addEventListener("input", function() {  // перенос введённого в вывод
    output.textContent = "ваше сообщение: " + input.value;
});

input.addEventListener("keyup", (event) => {  // при отпускании клавиши
    output.textContent = `ваше сообщение: ${event.target.value}`;
});

//  обработка keydown    это нажатие клавиш 

let outputKey = document.getElementById("outputKey");

document.addEventListener("keydown", function(event) {  // event это событие 
    outputKey.textContent = "вы нажали: " + event.key;  // отоброжение события
});



// упрок № 11


// массив данных 
const user =[
    { name: "Анна", age: 25 },
    { name: "Михаил", age: 15 },
    { name: "Иван", age: 16},
    { name: "Мария", age: 18},
    { name: "Дмитрий", age: 12},
    { name: "София", age: 20}
];

// получение элементов из DOM 
let showAdultsButton = document.getElementById("showAdults");

let showChildrenButton = document.getElementById("showChildren");

let userList = document.getElementById("userList");

// функция для получения списка людей 

function showUsers(userArray) {
    userList.innerHTML = " ";
    userArray.forEach( user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}, ${user.age} лет`;
        userList.appendChild(listItem);
    });
};

// обработчик события вывода взрослых 

showAdultsButton.addEventListener("click", () => {
    const adults = user.filter(user => user.age >= 18);
    showUsers(adults);
});

// обработчик события вывода детей 

showChildrenButton.addEventListener("click", () => {
    const children = user.filter(user => user.age < 18);
    showUsers(children);
});



// урок 12

// вы планируете выйти гулять. 
//если на улице дождь => взять зонтик
//если на улице солнце => взять очки  


// if
// let weather = "солнечно";

// if ( weather === "солнечно" ) {
//     console.log("возьмите очки");
// };

// if else

// let weather = "солнечно";
// if ( weather === "дождь" ) {
//     console.log("возмите зонт");
// } else {
//     console.log("возмите очки");
// };

// if else   if else 

// let weather = "облачно";

// if (weather === "дождь") {
//     console.log("возмите зонтик");
// } else if (weather == "солнечно") {
//     console.log("возмите очки");
// } else {
//     console.log("не понятно, что брать!");
// };

// тернарный оператор ?

//let weather = "облачно";

//console.log((weather === "дождь") ? "возмите зонт" : "возмите очки" );

// let message = (weather === "дождь")
//     ? "возмите зонтик"
//     : (weather === "солнечно")
//         ? "возмите очки"
//         : "не прнятно, что брать!";

// console.log(message);


// switch

let weather = "снег";

switch (weather) {
    case "дождь":
        console.log("возмите зонтик");
        break;
    case "солнечно":
        console.log("возмите очки");
        break;
    case "снег":
        console.log("наденте пуховик и шапку");
        break;
    case "облачно":
        console.log("наденьте куртку");
        break;
    default:
        console.log("непонятная погода, сидите дома!");
};


// урок № 13

let formSignUp = document.getElementById("signupForm");

formSignUp.addEventListener("submit", function(event) {
    event.preventDefault();

    // список полей 

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // блок для ошибок 

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    // сброс текста в ошибке

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    if (!username) {
        usernameError.textContent = "Введите имя пользователя";
        isValid = false;
    }

    const emailPattern = /^[s@]+@[^\s@]+.[^\s@]+$/;

    if (!email) {
        emailError.textContent = "Введите email";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Некорректный email";
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Введите пароль";
        isValid = false;
    } else if (password.length <6 ) {
        passwordError.textContent = "Пароль должен быть не менее 6 символов";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "пароли не совпадают";
        isValid = false;
    }
     
    if (isValid) {
        alert("форма отправлена успешно!");
    }
});



// урок № 14

localStorage.setItem('username', 'annblok');
localStorage.setItem('fallowers', '100.000');

//let username = localStorage.getItem('username');
let fallowers = localStorage.getItem('fallowers');

console.log(`У пользователя ${username} ${fallowers} подписчиков`);


localStorage.removeItem('fallowers'); // удалить параметр
localStorage.clear();                 // удалить всё  

let total = localStorage.length;      // узнать количество элементов в localStorage
console.log(`В localStorage хранится ${total} элементов`);



// цикл для отображения всех данных которые есть 

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`ключ: ${key}, значение: ${value}`);
};


// цикл для всех ключей которые усть 

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`ключ ${i + 1}: ${key}`);
};


// практика 

let usernameInput = document.getElementById('username');
let saveBtn = document.getElementById('saveBtn');
let showBtn = document.getElementById('showBtn');
let deleteBtn = document.getElementById('deleteBtn');
let output = document.getElementById('output');

// функция для отображения имен 

function showName() {
    let dataName = localStorage.getItem('username');
    if (dataName) {
        output.textContent = `сохранённое имя: ${dataName}`;
    } else {
        output.textContent = 'имя не найдено';
    }
};

saveBtn.addEventListener('click', () => {
    let username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        usernameInput.value = '';
        output.textContent = `имя ${username} сохранено`;
    } else {
        output.textContent = 'введие имя перед сохранением';
    }
});

showBtn.addEventListener('click', showName);

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    output.textContent = 'имя удалено';
})


// урок № 15 


// извлечение данных из localStorage в #favorites

function getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteTrecks')) || [];
};

// сохранение списка #favorites в localStorage

function saveFavorites(favorites) {
    localStorage.setItem('favoriteTrecks', JSON.stringify(favorites));
};

// отображение в #favorites и кнопки удалить 

function updateFavoritesDisplay() {
    let favorites = getFavorites();
    let favoritesBox = document.getElementById('favorites');
    let trackElements = document.querySelectorAll('#tracks .track');

    favoritesBox.innerHTML = '';

    favorites.forEach(track => {
        let trackBox = document.createElement('div');
        trackBox.className = 'favorite';

        let trackName = document.createElement('span');
        trackName.textContent = track;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'удалить';
        removeButton.addEventListener('click', () => {
            removeFavorite(track);
        });

        trackBox.appendChild(trackName);
        trackBox.appendChild(removeButton);
        favoritesBox.appendChild(trackBox);
    });
    trackElements.forEach(trackElement => {
        let trackName = trackElement.querySelector('span').textContent;
        let svg = trackElement.querySelector('svg');
        svg.style.fill = favorites.includes(trackName) ? '#e12d20' : '#fff';
    });  
};


// добавить трек в #favorites

function addFavorite(trackName) {
    let favorites = getFavorites();
    if (!favorites.includes(trackName)) {
        favorites.push(trackName);
        saveFavorites(favorites);
        updateFavoritesDisplay();
    }
};

// удалить трек из #favorites

function removeFavorite(trackName) {
    let favorites = getFavorites().filter(track => track !== trackName);
    saveFavorites(favorites);
    updateFavoritesDisplay();
};

// обработчик событий click для кнопки 

function initializeButtons() {
    document.querySelectorAll('#tracks .track button').forEach(button => {
        let trackName = button.parentElement.querySelector('span').textContent;
        button.addEventListener('click', () => {
            addFavorite(trackName);
        })
    })
};

// иниализация при загрузке страницы 

window.onload = () => {
    initializeButtons();
    updateFavoritesDisplay();
};


// урок № 16

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('привет! меня зовут ' + this.name);
    }
    celebrateBirthday() {
        this.age++;
        console.log('ура! мне теперь ' + this.age + ' лет!');
    }
};

let user1 = new User('Николай', 25);
user1.sayHello();
user1.celebrateBirthday();


// наследование extends

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издаёт звук`);
    }
};
class Doc extends Animal {
    speak() {
        console.log(`${this.name} лает!`);
    }
};

let nameAnimal = new Animal('гав');
nameAnimal.speak();

let nameDoc = new Doc('шарик');
nameDoc.speak();



//  урок № 17

fetch('https://goweather.herokuapp.com/weather/Moscow')
    .then(function(response) {
        return response.json();
})
    .then(function(data) {
        let weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
        <p>${data.temperature}</p>
        <p>${data.wind}</p>
        <p>${data.description}</p>
        `;
    })
    .catch(function(error) {
        console.error('ошибка получения данных');
    });
    


// урок 18 

fetch('https://goweather.herokuapp.com/weather/Moscow')
    .then(function(response) {
        return response.json();
})
    .then(function(data) {
        let weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
        <p>${data.temperature}</p>
        <p>${data.wind}</p>
        <p>${data.description}</p>
        `;
        if (data.forecast && data.forecast.length > 0) {
            let forecastContainer = document.createElement('div');
            forecastContainer.classList.add('forecast');
            forecastContainer.innerHTML = `<h2>Прогноз погоды на ближайшие дни</h2>`;
            weatherContainer.appendChild(forecastContainer);

            data.forecast.forEach(function(dayForecast, index) {
                let dayContainer = document.createElement('div');
                dayContainer.classList.add('forecast-item');
                dayContainer.innerHTML = `
                <p>${index + 1}</p>
                <p>${dayForecast.temperature}</p>
                <p>${dayForecast.wind}</p>
                `;
                forecastContainer.appendChild(dayContainer);
            });
        }
    })
    .catch(function(error) {
        console.error('ошибка получения данных');
    });
    
    

    // урок № 20

    // простая анимация 

    const box = document.querySelector('.box');
    box.addEventListener('click', () => {
        box.style.transform = 'translateX(100px)';
    });

    //  setInterval()
        
    const boxSetInterval = document.querySelector('._interval');
    boxSetInterval.addEventListener('click', () => {
        let position = 0;
        const interval = setInterval(() => {
            position += 5;
            boxSetInterval.style.transform = `translateX(${position}px)`;

            if (position >= 100) {
                clearInterval(interval);
            }
        }, 20);
    });

    //   setTimeout()

    const boxSetTimeout = document.querySelector('._timeout');
    boxSetTimeout.addEventListener('click', () => {
        let position = 0;

        function move() {
            position += 5;
            boxSetTimeout.style.transform = `translateX(${position}px)`;

            if (position < 100) {
                setTimeout(move, 20);
            }
        }

        move();
    });

    //    requestAnimationFrame()    синхронизируется с герцовкой экрана  и не работает на не активной вкладке 

    const square = document.querySelector('.square');
    let position = 0;

    function animate() {
        position += 2;
        square.style.left = `${position}px`;
        if (position > window.innerWidth) {
            position = -50;
        }
        requestAnimationFrame(animate);
    }

    animate();
    

    //  урок № 21


    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(MotionPathPlugin,TextPlugin)
        gsap.to('#box', { x: 300, duration: 2 })
            .then(() => gsap.to('#box', { y: 200, duration: 2 }))
            .then(() => gsap.to('#box', { rotation: 360, duration: 2 }))
            .then(() => gsap.to('#boxBlue', { rotation: 360, duration: 2 }));
        gsap.to('#circle', {
            duration: 2,
            repeat: -1,
            motionPath: {
                path:"#motionPath",
                align: "#MotionPath",
                alignOrigin: [0.5, 0.5]
            }
        });
        gsap.to("#text", {
            duration: 2,
            text: "This is the new text",
            ease: "none",
        });
    });

    

    // урок № 22

    let swiper = new Swiper(".swiperInfo", {
        slidesPerView: 3,   // отоброжает 3 блока 
        spaceBetween: 30,   // растояние между блоками 30 рх 
        pagination: {
            l: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });



// урок № 25

const object = document.querySelector('.object');
let x = 0;
let y = 0;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
        case 'ArrowRight':
            x += 10;
            break;
    }
    object.style.transform = `translate(${x}px, ${y}px)`;
});

object.addEventListener('mousedown', () => {
    object.style.opacity = 0;

    setTimeout(() => {
        object.style.opacity = 1;
    }, 2000);
});



// урок № 26

const canvas = document.getElementById('game');
const ctx = document.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 3,
    color: '#dfc252',
    dx: 0,
    dy: 0,
};

function drawPlayer(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

const dots = [];
let dotCount = 20;
let dotRadius = 10;
let dotColor = '#10375c';

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        drawPlayer(dot.x, dot.y, dot.radius, dot.color);
    }
}

function createDots() {
    for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({
            x,
            y,
            radius: dotRadius,
            color: dotColor,
        });
    }
}
createDots();

function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x - player.radius < 0)
        player.x = player.radius;

    if (player.x + player.radius > canvas.width)
        player.x = canvas.width - player.radius;

    if (player.y - player.radius < 0)
        player.y = player.radius;

    if (player.y + player.radius > canvas.height)
        player.y = canvas.height - player.radius;
}

function checkCollision() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const distance = Math.sqrt(Math.pow(player.x - dot.x, 2) + Math.pow(player.y - dot.y, 2));

        if (distance < player.radius + dot.radius) {
            dots.splice(i, 1);
            break;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer(player.x, player.y, player.radius, player.color);
    drawDots();
    updatePlayer();
    checkCollision();

    if (dots.length === 0) {
        ctx.fillStyle = '#fff';
        ctx.font = '40px Tahoma';
        ctx.fillText('поздравляем!', 50, canvas.height / 2);
        return;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
    }
});

gameLoop();
*/
// ещё вариант  который работает  не нашел отличае и проьлему 
/*
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 3,
    color: '#dfc252',
    dx: 0,
    dy: 0,
};

function drawPlayer(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

const dots = [];
let dotCount = 20;
let dotRadius = 10;
let dotColor = '#10375c';

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        drawPlayer(dot.x, dot.y, dot.radius, dot.color);
    }
}

function createDots() {
    for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({
            x,
            y,
            radius: dotRadius,
            color: dotColor,
        });
    }
}
createDots();

function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x - player.radius < 0)
        player.x = player.radius;

    if (player.x + player.radius > canvas.width)
        player.x = canvas.width - player.radius;

    if (player.y - player.radius < 0)
        player.y = player.radius;

    if (player.y + player.radius > canvas.height)
        player.y = canvas.height - player.radius;
}

function checkCollision() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const distance = Math.sqrt(Math.pow(player.x - dot.x, 2) + Math.pow(player.y - dot.y, 2));

        if (distance < player.radius + dot.radius) {
            dots.splice(i, 1);
            break;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer(player.x, player.y, player.radius, player.color);
    drawDots();
    updatePlayer();
    checkCollision();

    if (dots.length === 0) {
        ctx.fillStyle = '#fff';
        ctx.font = '40px Tahoma';
        ctx.fillText('поздравляем!', 50, canvas.height / 2);
        return;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
    }
});

gameLoop()

*/

// урок № 27

// запуск сцены 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('game').appendChild( renderer.domElement );

// освещение 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// отрисовка зеленой платформы 

const playerGeometry = new THREE.BoxGeometry(1, 0.2, 1);       // (ширина, высота, глубина)
const playerMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // задаем цвет
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.y = -3;
scene.add(player);

let moveLeft = false;
let moveRight = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') moveLeft = true;
    if (event.code === 'ArrowRight') moveRight = true;
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') moveLeft = false;
    if (event.code === 'ArrowRight') moveRight = false;
});

// красные обьекты 

const obstacles = [];

function createObstacle() {
    const size = Math.random() * 0.5 + 0.2;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const obstacle = new THREE.Mesh(geometry, material);
    obstacle.position.x = (Math.random() - 0.5) * 10;
    obstacle.position.y = 5;
    obstacle.userData = { speed: Math.random() * 0.02 + 0.01 };
    scene.add(obstacle);
    obstacles.push(obstacle);
}

const obstacleInterval = setInterval(createObstacle, 1000);

// счет 

let score = 0;
const scoreElement = document.getElementById('score');

function animate() {
    requestAnimationFrame(animate);

    if (moveLeft) player.position.x -= 0.05;
    if (moveRight) player.position.x += 0.05;

    player.position.x = Math.max(-5, Math.min(5, player.position.x));

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i];
        obstacle.position.y -= obstacle.userData.speed;

        if (checkCollision(player, obstacle)) {
            endGame();
            return;
        }

        if (obstacle.position.y < -5) {
            scene.remove(obstacle);
            obstacles.splice(i, 1);
            score += 1;
            scoreElement.textContent = `счёт: ${score}`;
        }
    }

    function checkCollision(obj1, obj2) {
        const box1 = new THREE.Box3().setFromObject(obj1);
        const box2 = new THREE.Box3().setFromObject(obj2);
        return box1.intersectsBox(box2);
    }

    function endGame() {
        alert(`игра окончена! ваш счёт: ${score}`);
    }

    obstacles.forEach(obstacle => {
        obstacle.userData.speed += 0.00001;
    });

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();