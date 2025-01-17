/*-------------- Constants -------------*/ 
const lettr = document.getElementById('letter-0')
const guessedLettersDiv = document.getElementById('guessedLetters');
const currentWordDiv = document.getElementById('currentWord');
const submitButton = document.getElementById('submitButton');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback'); 

// Timer stuff
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let dbzWordList = [
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

/*---------- Variables (State) ---------*/
let lettersGuessed = [];
let secretWord = [];
let remainingTime = 120;
let timeInterval = null;
let endgame = false;

/*-------------- Event Listeners -------------*/
// Ensure all event listeners pass functions as callbacks
submitButton.addEventListener('click', handleGuess);
guessInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') handleGuess(event);
});
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', initializeGame);

/*-------------- Functions -------------*/


// Initializes or resets the game
function initializeGame() {
  endgame = false;
  secretWord = getSecretWord().split(''); // Get a new secret word
  console.log(secretWord);
  lettersGuessed = [];
  remainingTime = 120;
  clearInterval(timeInterval);

  // Reset display areas
  currentWordDiv.innerHTML = '';
  guessedLettersDiv.textContent = 'Guessed Letters: _';
  feedback.textContent = '';

  // Display the secret word as underscores
  secretWord.forEach((_, index) => {
    const span = document.createElement('span');
    span.id = `letter-${index}`;
    span.className = 'letter';
    span.textContent = '_ ';
    currentWordDiv.appendChild(span);
  });

  // Reset the timer display
  timerDisplay.textContent = `Time: ${remainingTime}s`;

  // Clear guess input field
  guessInput.value = '';
}


// Selects a random word from the word list. 
function getSecretWord() {
  const randomIndex = Math.floor(Math.random() * dbzWordList.length);
  console.log(randomIndex);
  return dbzWordList[randomIndex].toLowerCase();
}

function handleGuess(event) {
  if (endgame) return; // Prevent actions if the game has ended
  
  event.preventDefault(); // Prevent form submission if inside a form

  const guessedLetter = guessInput.value.toLowerCase();

  // Simple validation: single letter a-z
  if (guessedLetter.length !== 1 || guessedLetter < 'a' || guessedLetter > 'z') {
    feedback.textContent = 'Enter a single letter (A-Z).';
    guessInput.value = '';
    return;
  }

  if (lettersGuessed.includes(guessedLetter)) {
    feedback.textContent = `You already guessed "${guessedLetter.toUpperCase()}".`;
    guessInput.value = '';
    return;
  }

  lettersGuessed.push(guessedLetter);
  updateGuessedLetters();

  if (secretWord.includes(guessedLetter)) {
    revealLetters(guessedLetter);
    feedback.textContent = `"${guessedLetter.toUpperCase()}" is correct!`;
    if (checkWinCondition()) endGame(true);
  } else {
    feedback.textContent = `"${guessedLetter.toUpperCase()}" is incorrect.`;
    if (lettersGuessed.length >= secretWord.length + 5) endGame(false);
  }

  // Clear input field
  guessInput.value = '';
}


// Updates the display of guessed letters
function updateGuessedLetters() {
  guessedLettersDiv.textContent = `Guessed Letters: ${lettersGuessed.join(', ').toUpperCase()}`;
}


// Reveals the correctly guessed letter(s)
function revealLetters(letter) {
  secretWord.forEach((char, index) => {
    if (char === letter) {
      const span = document.getElementById(`letter-${index}`);
      span.textContent = `${char.toUpperCase()} `;
    }
  });
}


// Checks if the user has guessed all letters correctly
function checkWinCondition() {
  return secretWord.every((char, index) => {
    const span = document.getElementById(`letter-${index}`);
    return span.textContent.trim() === char.toUpperCase();
  });
}


// Ends the game
function endGame(won) {
  endgame = true;
  clearInterval(timeInterval);
  if (won) {
    feedback.textContent = 'You won! SuperSaiyan status achieved!';
  } else {
    feedback.textContent = `Game Over! The word was "${secretWord.join('').toUpperCase()}".`;
    revealAllLetters();
  }
}


// Reveals all letters of the secret word
function revealAllLetters() {
  secretWord.forEach((char, index) => {
    const span = document.getElementById(`letter-${index}`);
    span.textContent = `${char.toUpperCase()} `;
  });
}


// Starts the game timer and the game
function startTimer() {
  if (timeInterval || endgame) return; // Prevent multiple intervals or starting after game ends
  initializeGame();
  startButton.disabled = true; // Disable the start button to prevent multiple starts
  timeInterval = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = `Time: ${remainingTime}s`;
    if (remainingTime <= 0) {
      clearInterval(timeInterval);
      endGame(false);
    }
  }, 1000);
}

/*-------------- Initialize Game on Load -------------*/
// Removed automatic initialization to start the game with the Start Timer button
