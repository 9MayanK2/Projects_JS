let random_no = Math.floor(Math.random() * 100) + 1;

let userInput = document.querySelector('input');
let btn = document.querySelector('button');
let prevGuess = document.querySelector('.prev_guess');
let remGuess = document.querySelector('.rem_guess');
let g = document.querySelector('.guess');
let container = document.querySelector('.container');

let prev_guess = [];
let rem_guess = 1;

let playGame = true;

let p = document.createElement('p');
let h2 = document.createElement('h2');

if (playGame) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}



function validateGuess(guess) {
    // check number 
    if (isNaN(guess)) {
        alert(`Enter Valid number`);
    } else if (guess < 1) {
        alert('Enter number greater than 1');
    } else if (guess > 100) {
        alert('Enter number less than 100');
    } else {
        prev_guess.push(guess);
        if (rem_guess == 10) {
            displayGuess(guess);
            displayGuess(guess);
            endGame();
        }
        else {
            displayGuess(guess);
            checkNumber(guess);
        }
    }
}

function checkNumber(guess) {
    if (guess === random_no) {
        displayMessage(`Congrats you guess it random number is ${random_no}`);
        endGame();
    } else if (guess < random_no) {
        displayMessage(`Your number is too less`);
    } else {
        displayMessage(`Your number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    g.innerText += `${guess},`;
    remGuess.innerText = `Guess Remaining : ${10 - rem_guess}`
    rem_guess++;
}

function displayMessage(message) {
    p.innerHTML = `<p>${message}<\p>`;
    container.append(p);
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    h2.classList.add('button');
    h2.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    container.append(h2);
    playGame = false;
    startGame();
}

function startGame() {
    const el = document.querySelector('#newGame');
    el.addEventListener('click', (e) => {
        let random_no = Math.floor(Math.random() * 100) + 1;
        userInput.value = '';
        userInput.removeAttribute('disabled');
        prev_guess = [];
        rem_guess = 1;
        remGuess.innerText = `Guess Remaining : ${11 - rem_guess}`
        container.removeChild(h2);
        // prevGuess.innerText=`Previous Guess  : ${g.innerText = ``}`;
        g.innerHTML='';
        playGame = true;
    })
}

