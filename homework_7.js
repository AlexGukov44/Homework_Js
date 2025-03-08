// ДЗ № 1

const movie = [
    "железный человек 1",
    "железный человек 2",
    "железный человек 3",
    "доктор Стрендж",
    "война бесконечности"
];

movie.push("финал"); // добавлен фильм "финал"
movie.pop()          // удален фильм "финал" в конце массива
console.log(movie);  // вывод резултата


// ДЗ № 2

const numbers = [12, 5, 8, 130, 44];
let big = numbers.filter(numbers => numbers > 10); // вывод чисел больше 10
console.log(numbers);


// ДЗ № 3

const books = [
    {title:"Мастер и Маргарита", pages: 450},
    {title:"Преступоение и наказание", pages: 550},
    {title:"Евгений Онегин", pages: 300}
];

books.sort((a, b) => a.pages - b.pages);
console.log("сортировка по количеству страниц:");
console.log(books);


// ДЗ № 4

const students = [
    {name:"Аня", grade: 4},
    {name:"Иван", grade: 5},
    {name:"Маша", grade: 3},
    {name:"Сергей", grade: 2},
    {name:"Катя", grade: 4}
];

let excellent = students.filter(students => students.grade > 4); 
console.log("отличник:")
console.log(excellent);  // выводит Ивана с оценкой 5 (> 4)

let worst = students.filter(students => students.grade <= 3).map(students => students.name);
console.log(worst);      // выводит Маша и Сергей 
console.log(`худшие студенты: ${worst.join(", ")}`); // эксперимент ))
