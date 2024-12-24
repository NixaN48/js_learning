/*
console.log("Привет, мир!");

// чутка переменных, убираю, так как буду создавать объект
let myName = "Nikita"; // строка
let age = 35; // число
let isProgrammer = false; // булев тип
console.log(myName, age, isProgrammer)
*/


// let myPerson = {
//     myName: "Никита",
//     age: 35,
//     isProgrammer: false,
//     greet: function() {
//         console.log(`Привет ${this.myName}! Тебе уже ${this.age}?`)
//     }

// }

// console.log(myPerson.myName);
// myPerson.greet();

// // тут пробуем if else
// if (myPerson.age >= 30) {
//     console.log ("Ты скуфяра");
// }
// else {
//     console.log ("Ты молодой ещё");
// }

// if (myPerson.isProgrammer == true) {
//     console.log ("Ты красава");
// }
// else {
//     console.log (`Ты нищук, ${myPerson.myName}!`);
// }

// // проверка шаблонной многострочной строки
// const multiLineString = `
// Нифига себе
// Ничего себе
// Афигеть!
// `;
// console.log(multiLineString);

// for (let i = 1; i <= 5; i++) {
//     console.log(`Было у меня ${i-1} шишек. Ударился я головой, и стало у меня ${i} шишек.`);
// }


// let newPerson = {
//     pName: "John",
//     pAge: 20,
//     pGreet: function() {
//         console.log(`Привет! Меня зовут ${this.pName}!`)    
//     },
// }

// newPerson.pGreet();

/*
//-ЗАДАЧКИ_1------------------------------------------------------------------
console.log(`Дан массив "apple", "banana", "cherry", "orange", "grape".
1. Выведи в консоль первый и последний элементы массива.
2. Замени "banana" на "kiwi".
3. Удалите последний элемент и выведи обновленный массив.
`)

let fruits = ["apple", "banana", "cherry", "orange", "grape"];

//Решение 1
console.log(`Решения:`);
console.log(`1. ${fruits.at(0)}, ${fruits.at(-1)}.`);

//GPT показаль альтернативный вариант, например для старых браузеров: console.log(`1. ${fruits[0]}, ${fruits[fruits.length - 1]}.`);

//Решение 2
// fruits.forEach((value, index) => {fruits[index]=value==="banana"?"kiwi":value});

//Более наглядный способ
fruits.forEach(function(value, index) {
    if (value==="banana") {
        fruits[index]="kiwi"
    };
    console.log(`Было ${value}, а стало ${fruits[index]}.`);
});

//Решение 3
fruits.pop();
console.log(`Я удалил последний элемент массива, и вот результат:`)
fruits.forEach((value, index) => {console.log(`${index}: ${fruits[index]}`)})
*/


//---ЗАДАЧКИ_2-----------------------------------------------
//Найти наибольшее число:
/*
let numbers = [10, 5, 20, 15, 30, 25];

let biggest = numbers[0];
numbers.forEach((value) => {
    if (value > biggest) biggest = value;
});
console.log(biggest);

console.log(numbers.reduce((max, value) => (value > max ? value : max), numbers[0]));

*/

// Задача: Подсчёт количества определённого элемента в массиве
// Напиши код, который подсчитывает, сколько раз "apple" встречается в этом массиве.

//Моё решение:
/*
let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

let appleCount = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") appleCount++; 
}
console.log(appleCount);
*/


/*
// Альтернативное решение:
let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

let appleCount = 0
for (let fruit of fruits) {
    if (fruit === "apple") {
        appleCount++;
    }
}
console.log(appleCount);
*/

// ----ЗАДАЧКА-------------
//Задача: Найти сумму чисел в массиве
let numbers = [5, 10, 15, 20, 25];

/*
let sum = 0;
for (number of numbers) {
    sum = sum + number;
}
console.log(sum);
*/

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//fgjhdslkfjsdlfjldsk
//fgjhdslkfjsdlfjldsksdf