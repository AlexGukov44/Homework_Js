// ДЗ № 1

let isFridgeEmpty = true;

if ( isFridgeEmpty === true ) {
    console.log("холодильник пуст, надо сходить в магазин.");
};

// ДЗ № 2

let age = 17;

if ( age >= 18 ) {
    console.log("доступ разрешён");
} else {
    console.log("доступ запрещён");
};

// ДЗ № 3

let grade = 4;

if ( grade === 5 ) {
    console.log("отлично!");
} else if ( grade === 4 ) {
    console.log("хорошо");
} else if ( grade === 3 ) {
    console.log("удовлетворительно");
} else {
    console.log("требуется пересдача");
};

// ДЗ № 4

// исходный код 
// let hour = 14;

// if ( hour < 12 ) {
//     console.log("доброе утро!");
// } else {
//     console.log("добрый день!");
// };

// вариант с тернарным оператором

let hour = 14;

console.log(( hour < 12 ) ? "доброе утро!" : "добрый день!");

