'use strict'
let gameNumber
let userGuess






const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}


gameNumber = Math.floor(Math.random() * 100);
userGuess = prompt('Угадай число от одного до 100');


const game = function (userGuess) {




    function lesser(number) {
        number = prompt('Загаданное число меньше')
        game(number)
    }
    function bigger(number) {
        number = prompt('Загаданное число больше')
        game(number)
    }
    function notAnumber(number) {
        number = prompt('Введите число')
        game(number)
    }



    if (userGuess > gameNumber) { //Загаданное число меньше
        lesser()
    }
    else if (userGuess < gameNumber && userGuess >= 1) { //Загаданное число больше
        bigger()
    }
    else if (!isNumber(userGuess) && userGuess != null) { //Введите число
        notAnumber()
    }
    else if (userGuess == gameNumber) { //Поздравляю, Вы угадали!!!
        alert('Поздравляю, Вы угадали!!!')
    }
    else if (userGuess == null) { //'Игра окончена'
        alert('Игра окончена')
    }
}

game(userGuess)