'use strict'

// CONST//
const audio1 = new Audio('tihiy-slabyiy-schelchok.mp3');
const audio2 = new Audio('korotkiy-schelchok-pistoletnoy-oboymyi.mp3');
const applodies = new Audio('applodies.mp3');
const fon = new Audio('sportloto.mp3');
const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const leftRight = document.querySelector('.left-right');
const numBlock = document.querySelector('.numbers-block');
// VARIABLES //
let number = document.querySelector('.number');
let allnumbers = document.querySelector('.allnumbers');
let restNumber = document.querySelector('.restnumber');
let restnum = 100;
restNumber.innerHTML = '100';
let totalnum = document.querySelector('.totalnum');
let play = document.querySelector('.play');
let stopAudio = document.querySelector('.stop');

//ARRAYS//
// Создаем пустой массив для хранения выпавших чисел
let numbersArray = [];
// Создаем пустой массив для хранения показанных шаров
let shownAllNumbers = [];

//FUNCTIONS//
// Функция для генерации случайного числа от 1 до 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
};
// Функция для вывода произвольного числа и добавления его в массив
function printAndAddRandomNumber() {
    let randomNumber = generateRandomNumber();
    if (!isNumberInArray(randomNumber)) {
        numbersArray.push(randomNumber);
    };
};
//Функция для проверки, есть ли число уже в массиве
function isNumberInArray(number) {
    return numbersArray.includes(number);
};
//Запись выпавшего номера в стек выпавших номеров
function addShownNumbersInArray() {
    shownAllNumbers.push(numbersArray[0])
}
// Функция показа количества оставшихся шаров
function showRestNumber() {
    restNumber.innerHTML = --restnum;
};
// Генерируем числа до тех пор, пока не заполнится весь диапазон
while (numbersArray.length < 100) {
    printAndAddRandomNumber();
};

//EVENTS//
// Показ выпавшего номера
button.addEventListener("click", () => {
    if (numbersArray.length === 100) {
        //Звук аплодисментов
        applodies.play();
    }
    // Звук выпадающего шара
    audio1.play();
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
        } else if (numbersArray.length === 0) {
            alert("Больше нет шаров в барабане!Конец игры!");
        }
    };
    //Обработка сеанса окончания игры
    if (numbersArray.length === 0) {
        number.innerHTML = '0';
        location.reload();
    }
    addCircle();
    showRestNumber();
});

//Очистка выпавшего номера по нажатию на кнопку
reset.addEventListener('click', () => {
    audio2.play();
    location.reload();
});

//Появление или исчезание второго экрана с выпавшими шарами по нажатию на кнопку
leftRight.addEventListener("click", () => {
    //Звук переключения появления и скрытия экрана с выпавшими шарами
    audio2.play();
    numBlock.classList.toggle('toggle')
});

//Настройка воспроизведения фоновой музыки по клику
play.addEventListener('click', () => {
    audio2.play();
    fon.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});

//Настройка остановки фоновой музыки по клику
stopAudio.addEventListener('click', () => {
    audio2.play();
    fon.pause();
});
console.log(numbersArray)
console.log(shownAllNumbers)