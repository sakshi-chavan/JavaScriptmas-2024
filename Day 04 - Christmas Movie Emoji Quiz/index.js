import { films } from '/data.js';

const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-btn');
const messageContainer = document.getElementsByClassName('message-container')[0];
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0];

let filmObjectArray = [...films];
let currentMovie;
let guessCount;

const getRandomMovie = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    currentMovie = array[randomIndex];
    array.splice(randomIndex, 1);
};

const renderEmoji = () => {
    emojiCluesContainer.innerHTML = currentMovie.emoji.join(' ');
};

const updateMessage = (message) => {
    messageContainer.innerHTML = message;
};

const enableInputs = () => {
    guessInput.disabled = false;
    submitButton.disabled = false;  
};

const disableInputs = () => {
    guessInput.disabled = true;
    submitButton.disabled = true; 
};

const pauseTheAppFor3Sec = () => {
    disableInputs();
    setTimeout(() => {
        if (filmObjectArray.length === 0) {
            guessInput.value = '';
            updateMessage("That's all folks!");
        } else {
            startGame();
        }
    }, 3000);
};

const compareAnswer = (answer) => {
    const { title } = currentMovie;
    if (title.toLowerCase() === answer.toLowerCase()) {
        updateMessage("Correct!");
        pauseTheAppFor3Sec();
    } else {
        guessCount--;
        if (guessCount === 0) {
            updateMessage(`The film was: ${currentMovie.title}!`);
            pauseTheAppFor3Sec();
        } else {
            updateMessage(`Incorrect! You have ${guessCount} more ${guessCount > 1 ? 'guesses' : 'guess'} remaining.`);
        }
    }
};

const handleGuessSubmission = (event) => {
    event.preventDefault();
    const guessValue = guessInput.value;
    compareAnswer(guessValue);
};

const startGame = () => {
    guessCount = 3;
    getRandomMovie(filmObjectArray);
    renderEmoji();
    updateMessage(`You have ${guessCount} guesses remaining.`);
    enableInputs();
    guessInput.value = '';
};

if (guessForm) {
    guessForm.addEventListener('submit', handleGuessSubmission);
}
startGame();

