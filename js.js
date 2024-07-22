'use strict'

// Variables
var audio1 = new Audio('tihiy-slabyiy-schelchok.mp3');
var audio2 = new Audio('korotkiy-schelchok-pistoletnoy-oboymyi.mp3')
const button = document.querySelector('.button');
let number = document.querySelector('.number');
const reset = document.querySelector('.reset');
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

//Функция очистки поля вывода
function clear() {
    number.innerHTML = '';
    allnumbers.innerHTML = '';
    shownAllNumbers.length = 0;
}

// Функция показа количества оставшихся шаров
function showRestNumber() { 
   restNumber.innerHTML = --restnum;
};

// Показ выпавшего номера
button.addEventListener("click", () => {
    // Щелчок по нажатию
    playAudio1();
    // Показ выпавшего номера по щелчку
    number.innerHTML = numbersArray[0];

    // Функция для добавления нового кружка с элементом массива
function addCircle() {
    // Проверяем, есть ли еще элементы в массиве
    if (numbersArray.length > 0) {
      // Создаем новый кружок
      let circle = document.createElement('div');
      circle.classList.add('circle');
      circle.textContent = numbersArray.shift(); // Берем и удаляем первый элемент массива
      allnumbers.appendChild(circle);
    } else {
      alert("Больше нет элементов для добавления!");
      clear();
    }
  };
    console.log(numbersArray)
    addCircle()
    showRestNumber()
});



//Очистка выпавшего номера
reset.addEventListener('click', () => {
    playAudio2()
    clear();
});

console.log(numbersArray)
console.log(shownAllNumbers)







