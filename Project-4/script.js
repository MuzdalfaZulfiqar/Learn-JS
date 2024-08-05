
let random = Math.floor(Math.random()*100 + 1);

let submitButton =  document.querySelector("#subt")
let userInput =  document.querySelector("#guessField")
let guessSlot =  document.querySelector(".guesses")
let remaining =  document.querySelector(".lastResult")
let lowOrHigh =  document.querySelector(".loworHigh")
let startOver =  document.querySelector(".resultParas")


const p = document.createElement('p')


let prevGuess = [];
let numberOfAttempts = 1;

let playGame = true;

if(playGame){
    submitButton.addEventListener("click", function(event){
        event.preventDefault()
        let userInputValue = parseInt(userInput.value)
        validateGuess(userInputValue)
    })
}

function validateGuess(guess){
    // valiadate the type
    if(isNaN(guess)){
        alert("Please enter valid number")
    }
    else if(guess < 1){
        alert("Please enter number greater than 1")
    }
    else if (guess >100){
        alert("Please enter number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numberOfAttempts == 11){
            displayGuess(guess)
            displayMessage(`Game over and the number was ${random}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    // main game logic here
    if(guess == random){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess<random){
        displayMessage(`Number is tooo low`)
    }
    else{
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    // clean the input
    userInput.value = ""
    guessSlot.innerHTML += `${guess},`
    numberOfAttempts++;
    remaining.innerHTML = `${11-numberOfAttempts}`
}
function displayMessage(message){
// dom interaction
        lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
     userInput.value = "";
     userInput.setAttribute('disabled', '')
     p.classList.add('button')
     p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
     startOver.appendChild(p);
     playGame = false;
     newGame()
}
function newGame(){
    const newGameButton =  document.querySelector('newGame')
    newGameButton.addEventListener("click", ()=>{
        random = Math.floor(Math.random()*100 + 1);
        prevGuess = []
        numberOfAttempts = 1
        guessSlot.innerHTML=""
        remaining.innerHTML =  `${11-numberOfAttempts}`
        playGame = true
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame =true
    })
}