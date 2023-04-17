'use strict'

document.querySelector('.message').textContent = '🎉Correct Number.';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent;
document.querySelector('.score').textContent;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);


    //When there is no input.

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'
    }

    //When the player wins the game.

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number.';
        document.querySelector('body').style.backgroundColor = '#228B22';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }

    }

    //When the guess is too low.

    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too low 📉.'
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = 'Game Over!💥';
            document.querySelector('.score').textContent = 0;
        }

    }

    //When the guess is too high.

    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too high 📈.'
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = 'Game Over!💥';
            document.querySelector('.score').textContent = 0;
        }
    }

});


document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});