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

let people = document.getElementById("people");

let sortButton = document.getElementById("sortButton");

let status;
if ( user.age < 18 ) {
    status = "взрослый";
} else {
    status = "ребёнок";
};

// функция для получения списка людей 

function showUsers(userArray) {
    userList.innerHTML = " ";
    userArray.forEach( user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}, ${user.age} лет, ${status}`;
        userList.appendChild(listItem);
    });
};

// сортировка по возрасту 

function sortAge(a, b) {
    return a.age - b.age;
}

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

// обработчик события вывод всех людей 

people.addEventListener("click", () => {
    showUsers(user);
});

// обработчик сортировки по возрасту 

sortButton.addEventListener("click", () => {
    const sortUser = [...user].sort(sortAge);
    showUsers(sortUser);
});
