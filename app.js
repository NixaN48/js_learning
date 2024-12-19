console.log("Привет, мир!");

// чутка переменных
let myName = "Nikita"; // строка
let age = 35; // число
let isProgrammer = false; // булев тип
console.log(myName, age, isProgrammer)

// тут пробуем if else
if (age >= 30) {
    console.log ("Ты скуфяра");
}
else {
    console.log ("Ты молодой ещё");
}

if (isProgrammer == true) {
    console.log ("Ты красава");
}
else {
    console.log (`Ты нищук, ${myName}!`);
}

// проверка шаблонной многострочной строки
const multiLineString = `
Нифига себе
Ничего себе
Афигеть!
`;
console.log(multiLineString);

for (let i = 1; i <= 5; i++) {
    console.log(`Было у меня ${i-1} шишек. Ударился я головой, и стало у меня ${i} шишек.`);
}