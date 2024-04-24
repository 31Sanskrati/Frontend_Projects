let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.gusses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPass')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else if (guess <= 0) {
        alert('Please enter a number greater than 0')
    } else {
        prevGuess.push(guess)
        updateGuess(guess)
        if (numGuess === 10) {
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame()
        }
        else {
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Won! Random number was ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Guess litte higher`)
    } else if (guess > randomNumber) {
        displayMessage(`Guess litte lower`)
    }
}

function updateGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="new_game">Restart</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    newGameButton = document.querySelector('#new_game')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guessSlot.innerHTML = ''
        numGuess = 0
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}