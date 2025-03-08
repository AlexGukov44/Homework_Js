let textId = document.getElementById("taskWork");
let textLi = document.querySelectorAll("li");

textLi.forEach((textLi, index) => {
    textLi.textContent = `Задача ${index + 1} выполнена`;
}); 


let tasks = [
    "купить молоко",
    "выучить Java Script",
    "пойти на тренировку"
];

let tasksList = document.getElementById("taskAll");
tasksList.innerHTML = "";

tasks.forEach(task => {let taskItem = document.createElement("li");
taskItem.textContent = task;
tasksList.appendChild(taskItem);
});

let newTask = "найти уже в конце концов работу разработчиком и работать в iT, а не вот это вот всё";
let textNew = document.getElementById("taskAll");
let newItem = document.createElement("li");
newItem.textContent = newTask;
textNew.prepend(newItem);
