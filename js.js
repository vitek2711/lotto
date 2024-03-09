'use strict'

// Variables
const button = document.querySelector('.button');
let number = document.querySelector('.number');
const reset = document.querySelector('.reset');
let allnumbers = document.querySelector('.allnumbers');


// Создаем пустой массив для хранения выпавших чисел
let numbersArray = [];

// Создаем пустой массив для хранения показанных шаров
let shownAllNumbers = [];

// Функция для генерации случайного числа от 1 до 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
};

//Функция для проверки, есть ли число уже в массиве
function isNumberInArray(number) {
    return numbersArray.includes(number);
};

// Функция для вывода произвольного числа и добавления его в массив
function printAndAddRandomNumber() {
    let randomNumber = generateRandomNumber();
    if (!isNumberInArray(randomNumber)) {
        numbersArray.push(randomNumber);
    };
};

//Запись выпавшего номера в стек выпавших номеров
function addShownNumbersInArray() {
    let shownNumber = numbersArray[0];
    shownAllNumbers.push(numbersArray[0])
}

// Генерируем числа до тех пор, пока не заполнится весь диапазон
while (numbersArray.length < 100) {
    printAndAddRandomNumber();
};

//Функция очистки поля вывода

function clear() {
    number.innerHTML = '';
}

// Показ выпавшего номера
button.addEventListener("click", () => {
    number.innerHTML = numbersArray[0];

    // Запсываем значения  в массив выбранных цифр
    shownAllNumbers.push(numbersArray.shift(0))
    allnumbers.innerHTML = shownAllNumbers;

    //Удаляем первый элемент из массива
    numbersArray.shift(0);
    console.log(numbersArray)
});


//Очистка выпавшего номера
reset.addEventListener('click', () => {
    clear();
});

console.log(numbersArray)
console.log(shownAllNumbers)







