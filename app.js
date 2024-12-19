console.log("Привет, мир!");
/*
// чутка переменных, убираю, так как буду создавать объект
let myName = "Nikita"; // строка
let age = 35; // число
let isProgrammer = false; // булев тип
console.log(myName, age, isProgrammer)
*/

let myPerson = {
    myName: "Никита",
    age: 35,
    isProgrammer: false,
    greet: function() {
        console.log(`Привет ${this.myName}! Тебе уже ${this.age}?`)
    }

}

console.log(myPerson.myName);
myPerson.greet();

// тут пробуем if else
if (myPerson.age >= 30) {
    console.log ("Ты скуфяра");
}
else {
    console.log ("Ты молодой ещё");
}

if (myPerson.isProgrammer == true) {
    console.log ("Ты красава");
}
else {
    console.log (`Ты нищук, ${myPerson.myName}!`);
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