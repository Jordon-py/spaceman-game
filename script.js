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
const guessInput = document.getElementById('guessField');

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

const secretWord = spaceList; 



console.log(spaceList);
console.log(secretWord);
console.log(guessInput);


/*---------- Variables (state) ---------*/
let lettersGuessed = []
let timer = ''
let remainingTime = ''
let player = ''




/*----- Cached Element References  -----*/


  /*-------------- Functions -------------*/

// reset guesses, update UI,
function initializeGame() {
    
  let timer = ''
  let lettersGuessed = []
  let incorrectGuess = null
  let remainingTime = ''
  let player = ''
    
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