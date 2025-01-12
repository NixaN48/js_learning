
console.log(`Привет, мир!
Я пробую освоить JS`);

// ----- 25.12.2024 || Решаю задачки -----

// Задача: Найти минимальное число в массиве
// Дан массив:

let numbers = [45, 2, 78, 34, 5, 89];

// Напиши код, который найдёт минимальное число в массиве и выведет его в консоль. Постарайся использовать разные подходы, если получится.

// Первый способ, через форыч. Код перебирает числа в массиве по порядку, и обновляет переменную каждый раз, когда находит число меньше.
let number = numbers[0];
numbers.forEach(function(num, index) {
    if (number > num) {
        number = num; 
    }
})
console.log(number);

// Второй способ

let minValue = numbers.reduce((min, current) => {
    return current < min ? current : min;
});
console.log(minValue);