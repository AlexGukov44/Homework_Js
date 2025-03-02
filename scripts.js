//  ДЗ № 1

function combineValue(number, text) {
    if (number <= 0){
        return "Некоррктное значение";
    } else if (number == 1){
        return text = "1 яблоко";
    } else {
        return number + " " + text;
    }
}

console.log(combineValue(5, "яблок")); // 5 яблок   и добавил отработку варианта с 1 яблоком :)


// ДЗ № 2

function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(6)); // 12     6 умноженое на 2 


// ДЗ № 3

function convertToNumber(text) {
    return Number(text);
}

console.log(convertToNumber("666"));  // тут происходит магия, текст становится числом )) (но только числовое значение)


// ДЗ № 4

numbers = [5, 4, 9]; // либо = [] пустой 


function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return "массив пустой";
    }
    return Math.max(...numbers);
}

let maxNumber = findMaxNumber(numbers);
if (maxNumber === "массив пустой") {
    console.log("массив пустой");
} else {
    console.log("самое большое число в массиве = " + maxNumber);
};
 // 9 либо ПУСТОЙ   

 даааа вот тут конечно пришлось по копатся в интернете. ))
 