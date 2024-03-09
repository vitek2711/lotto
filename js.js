'use strict'
// Variables
const button = document.querySelector('.button');
let number = document.querySelector('.number');

// Создаем пустой массив для хранения выпавших чисел
let numbersArray = [];

// Функция для генерации случайного числа от 1 до 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Функция для проверки, есть ли число уже в массиве
function isNumberInArray(number) {
    return numbersArray.includes(number);
}

// Функция для вывода произвольного числа и добавления его в массив
function printAndAddRandomNumber() {
    let randomNumber = generateRandomNumber();
    if (!isNumberInArray(randomNumber)) {
        console.log(randomNumber);
        numbersArray.push(randomNumber);
    }
}

// Генерируем числа до тех пор, пока не заполнится весь диапазон
while (numbersArray.length < 100) {
    printAndAddRandomNumber();
}

// События

console.log(numbersArray)