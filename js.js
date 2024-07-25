'use strict'

// Variables
const audio1 = new Audio('tihiy-slabyiy-schelchok.mp3');
const audio2 = new Audio('korotkiy-schelchok-pistoletnoy-oboymyi.mp3');
const applodies = new Audio('applodies.mp3');
const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const leftRight = document.querySelector('.left-right');
let number = document.querySelector('.number');
let allnumbers = document.querySelector('.allnumbers');
let restNumber = document.querySelector('.restnumber');
let restnum = 100;


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

//Функция проигрывания аудиофайла запуска
function playAudio1() {
    audio1.play();
}

//Функция проигрывания аудиофайла сброса

function playAudio2() {
    audio2.play();
}

//Запись выпавшего номера в стек выпавших номеров
function addShownNumbersInArray() {
    let shownNumber = numbersArray[0];
    shownAllNumbers.push(numbersArray[0])
}

// Генерируем числа до тех пор, пока не заполнится весь диапазон
while (numbersArray.length < 100) {
    printAndAddRandomNumber();
};

// Функция показа количества оставшихся шаров
function showRestNumber() {
    restNumber.innerHTML = --restnum;
};

// Показ выпавшего номера
button.addEventListener("click", () => {
    if (numbersArray.length === 100) {
        applodies.play();
    }

    // Щелчок по нажатию
    playAudio1();

    // Показ выпавшего номера по щелчку
    number.innerHTML = numbersArray[0];

    // Добавляем вращние к выпавшему номеру
    number.classList.add('newanimation');

    // Отслеживаем окончание анимации
    number.addEventListener("animationend", AnimationHandler, false);

    function AnimationHandler() {
        // Удаляем класс с анимацией
        number.classList.remove('newanimation');
    };

    // Функция для добавления нового кружка с элементом массива
    function addCircle() {
        // Проверяем, есть ли еще элементы в массиве
        if (numbersArray.length > 0) {
            // Создаем новый кружок
            let circle = document.createElement('div');
            circle.classList.add('circle');
            circle.textContent = numbersArray.shift(); // Берем и удаляем первый элемент массива
            allnumbers.appendChild(circle);
        } if (numbersArray.length === 0) {
            alert("Больше нет шаров в барабане!Конец игры!");
        }
    };

    console.log(numbersArray);
    addCircle();
    showRestNumber();
});

//Очистка выпавшего номера
reset.addEventListener('click', () => {
    location.reload();
});

const numBlock = document.querySelector('.numbers-block');

//Появление/исчезание второго экрана с выпавшими шарами по нажатию на кнопку
leftRight.addEventListener("click", () => {
    playAudio2();
    numBlock.classList.toggle('toggle')
});

console.log(numbersArray)
console.log(shownAllNumbers)