/*-------------- Constants -------------*/

/* -------------User's guess input---------------*/
const guessedLettersDiv = document.getElementById('guessedLetters');
const currentWordDiv = document.getElementById('currentWord');
const submitButton = document.getElementById('submitButton').addEventListener('click',handleGuess);
const guessInput = document.getElementById('guessInput').addEventListener('input', handleGuess);              


const timerDisplay = document.getElementById('timerDisplay');                        /*------------- Start Timer Button ----------*/
const startButton = document.getElementById('startButton').addEventListener('click', startTimer);  
const resetButton = document.getElementById('resetButton').addEventListener('click', initializeGame);


const spacemanCanvas = document.getElementById('spacemanCanvas');
const ctx = spacemanCanvas.getContext('2d');

const dbzWordList = [
  "kamehameha",
  "supersaiyan",
  "dragonball",
  "frieza",
  "goku",
  "vegeta",
  "saiyan",
  "cell",
  "trunks",
  "gohan",
  "piccolo",
  "bulma",
  "yamcha",
  "tien",
  "chi",
  "nappa",
  "raditz",
  "bardock",
  "gotenks",
  "gogeta"
];

/*---------- Variables (state) ---------*/

let lettersGuessed = [];
let secretWord = '';
let remainingTime = 120;
let timeInterval = null;
let endgame = false;
let startGameFlag = false;

/*-------------- Functions -------------*/

function initializeGame(resetButton) {
  endgame = false;
  startGameFlag = false;
  secretWord = getSecretWord().split('');
  lettersGuessed = [];
  remainingTime = 120;
  clearInterval(timeInterval);

  
  currentWordDiv.innerHTML = '';            // Clear previous displays
  guessedLettersDiv.textContent = 'Guessed Letters: _';
  clearCanvas();
  console.log(`secretWord: ${secretWord}`);

  // Display the secret word as underscores
  secretWord.forEach((letter, i) => {
    console.log(`${letter, i}`);
    let letterSpan = document.createElement('span');
    letterSpan.setAttribute('id', `letter-${i}`);
    letterSpan.classList.add('letter');
    letterSpan.textContent = '_ ';
    currentWordDiv.appendChild(letterSpan);
  });

  // Reset the timer display
  timerDisplay.textContent = `Time: ${remainingTime}s`;
}


// SECRET WORD ---------------------

function getSecretWord() {          
  let randomIndex = Math.floor(Math.random() * dbzWordList.length);
  let selectedWord = dbzWordList[randomIndex].toLowerCase();
  return selectedWord;
}

// ------ USER GUESS -------------------------

function handleGuess(event) {
  if (endgame) return; // Prevent actions if the game has ended
  if (event.type === 'click' || event.key === 'Enter') {
    let guessedLetter = event.guessInput;
    event.guessInput = ''; // Clear input field

  
    lettersGuessed.push(guessedLetter);
    updateGuessedLetters();

    if (secretWord.includes(guessedLetter)) {
      revealLetters(guessedLetter);
      feedbackDiv.textContent = `Nice! "${guessedLetter.toUpperCase()}" is in the word.`;
      if (checkWinCondition()) {
        endGame(true);
      }
    } else {
      let wrong = guessedLetter.document.createElement(dispatchEvent, => );
      drawSpaceman();
      if (lettersGuessed.length >= secretWord.length + 5) { // Adjusted condition for losing
        endGame(false);
      }
    }
  }
}

function updateGuessedLetters() {
  guessedLettersDiv.textContent = `Guessed Letters: ${lettersGuessed.join(', ').toUpperCase()}`;
}

function revealLetters(letter) {
  secretWord.forEach((char, i) => {
    if (char === letter) {
      let letterSpan = document.getElementById(`letter-${i}`);
      letterSpan.textContent = `${char.toUpperCase()} `;
    }
  });
}

function checkWinCondition() {
  return secretWord.every((letter, i) => {
    let letterSpan = document.getElementById(`letter-${i}`);
    console.log(`Letter Span ${letterSpan}`);
    return letterSpan.textContent.trim() === letter.toUpperCase();
  });
}

function endGame(won) {
  endgame = true;
  clearInterval(timeInterval);
  if (won) {
    alert('Congratulations! You achieved SuperSaiyan status!');
  } else {
    alert(`Game Over! The word was "${secretWord.join('').toUpperCase()}". Better luck next time!`);
    revealAllLetters();
  }
}

function revealAllLetters() {
  secretWord.forEach((char, i) => {
    let letterSpan = document.getElementById(`letter-${i}`);
    letterSpan.textContent = `${char.toUpperCase()} `;
  });
}

function startTimer() {                                           // Initiate Timer
  if (timeInterval || endgame) return; // Prevent multiple intervals or starting after game ends
  startGameFlag = true;
  timeInterval = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = `Time: ${remainingTime}s`;
    if (remainingTime <= 0) {
      clearInterval(timeInterval);
      endGame(false); // Player loses
    }
  }, 1000);
}

/*-------------- Canvas Drawing -------------*/


if (startButton === "click") {
  
  initializeGame()
  
} else {
  (resetButton === "click");
  
  {
    initializeGame()
  }  
}