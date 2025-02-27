// ДЗ №1

( + , - , * , / , % ) => арифметические операторы 
== означет РОВНО(без учёта типа данных) , === означет строго РОВНО(с учетом типа данных)
&& => проверяет одно либо все условия, если все верны возврощает TRUE 

// ДЗ №2

let a = 8;

console.log(a % 3); // 2
console.log(a * 2); // 16
console.log(a + 10); // 18

// ДЗ №3

let isRainy = true;
let hasCoat = false;

console.log(isRainy && !hasCoat); // true
console.log(isRainy || !hasCoat); // true
console.log(!isRainy);            // false


// ДЗ №4

let age = prompt("укажите свой возраст", "0");
if (age < 18) {
    alert("доступ закрыт");
} if (age >= 18) {
    alert("доступ открыт");
}