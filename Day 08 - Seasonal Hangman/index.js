// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')
const sunglass = document.getElementsByClassName('sunglasses')[0];

// Set the word to guess
const word = "gift";
// 6 guesses for the 6 parts of the snowman
let guesses = 6
let guessArr = []
let guessedLetters = new Set()

function startGame() {
    renderGuessArr();
    renderGuess();
    renderKeyboard();
}

function renderGuessArr() {
    guessArr = Array(word.length).fill('-');
}

function renderGuess() {
    const guess = guessArr.map(char => `<div class="guess-char">${char}</div>`).join(''); guessContainer.innerHTML = guess;
}

function checkGuess(event) {
    const guessedLetter = event.target.id;
    if (guessedLetters.has(guessedLetter)) return;
    guessedLetters.add(guessedLetter);
    if (word.includes(guessedLetter)) {
            updateGuessArr(guessedLetter);
            renderGuess();
    } else {
        guesses--;
        removeSnowmanPart();
    }
    disableGuessedLetter(event.target);
    checkGameStatus();
}    

function updateGuessArr(letter) { 
    for (let i = 0; i < word.length; i++) { 
        if (word[i] === letter) { 
            guessArr[i] = letter; 
            }
      } 
}

function disableGuessedLetter(button) { 
    button.disabled = true; 
    button.style.cursor = 'not-allowed';
}

function checkGameStatus() {
    if (guesses === 0) {
        if (guessArr.includes('-')) {
        guessContainer.innerHTML = `<div class="message">You Lose!</div>`;
        document.querySelector('.puddle').style.visibility = 'visible';
        }
    } else if (!guessArr.includes('-')) {
        guessContainer.innerHTML = `<div class="message">You Win!</div>`;
        document.querySelector('.sunglasses').style.visibility = 'visible';
        reinstateSnowman();
    }
}

function removeSnowmanPart() {
    if (guesses === 5) {
        snowmanParts[5].style.visibility = 'hidden'; 
    } else if (guesses === 4) {
        snowmanParts[4].style.visibility = 'hidden'; 
    } else if (guesses === 3) {
        snowmanParts[3].style.visibility = 'hidden'; 
    } else if (guesses === 2) {
        snowmanParts[2].style.visibility = 'hidden'; 
    } else if (guesses === 1) {
        snowmanParts[1].style.visibility = 'hidden'; 
    } else if (guesses === 0) {
        snowmanParts[0].style.visibility = 'hidden'; 
    }
}

function reinstateSnowman() {
    for (let part of snowmanParts) {
        part.style.visibility = 'visible';
    }
}

startGame();
