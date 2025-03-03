// ДЗ № 1

for (i = 1; i <= 10; i++) {
    console.log(`число; ${i}`);
}

// ДЗ № 2

 let i = 1;
 while ( i <= 10 ) {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
 }

 // ДЗ № 3
 

 let number = 1;
 do {
    number = Math.floor((Math.random() * 10) + 1);
    console.log(`загадано: ${number}`);
 } while (number !== 7);


 // ДЗ № 4

 let count = 1;
 do {
    console.log(`число: ${count}`);
    count = count * 2;
 } while (count <= 100);
