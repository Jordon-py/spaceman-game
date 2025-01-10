/*My choice of game
    **Spaceman**
"Spaceman" is a simple guessing game similar to "Hangman." Players guess letters to uncover a hidden word, and each incorrect guess progresses a visual representation of a spaceman until it's fully drawn (representing failure).

---

- *Spaceman_Reloaded*

- 1. Create Game Variables:
        countdown timer to add urgency and excitement to the game.
        activeGameWord

        - 2. Display Instructions:

- 3. Main Game Loop:

- 4. End of Game:
*/

/*-------------- Constants -------------*/
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const guessedLettersDiv = document.getElementById('guessedLetters');
const feedbackDiv = document.getElementById('feedback');
const resetButton = document.getElementById('resetButton');
const spacemanCanvas = document.getElementById('spacemanCanvas');
const timerDisplay = document.getElementById('time');



const spaceList = [
  "Planets",   // (7 letters)
  "Asteroid",  // (8 letters)
  "Universe",  // (8 letters)
  "Galactic",  // (8 letters)
  "Darkmatter",// (10 letters)
  "Starfield", // (9 letters)
  "Spacewalk", // (9 letters)
  "Telescope"  // (9 letters)
];


console.log(guessedLettersDiv);
console.log(spaceList);
console.log(guessInput);
console.log(guessButton);
console.log(feedbackDiv);
console.log(resetButton);
console.log(spacemanCanvas);
console.log(timerDisplay);


/*---------- Variables (state) ---------*/
let lettersGuessed = []
let secretWord = 120
let remainingTime = ''
let timeInterval;




/*----- Cached Element References  -----*/


  /*-------------- Functions -------------*/

// reset guesses, update UI,
function initializeGame() {
  secretWord = getSecretWord().toLowerCase;
  lettersGuessed = [];
  incorrectGuess = [];
  remainingTime = 60;
  
    
  }
  
function getSecretWord() {
  const randomIndex = Math.floor(Math.random() * spaceList.length);
  return spaceList[randomIndex];
}



  //  check if 'letter' is in currentWord, handle  penalty.
  function handleGuess(letter) {
    
    //  (timer). -10 sec
  }
  
  function checkWinCondition() {
      //  if all letters are revealed, declare victory.
      
  }
  
  function checkLoseCondition() {
    //  if guessesRemaining <= 0 or the timer hits 0.
  }

/*----------- Event Listeners ----------*/