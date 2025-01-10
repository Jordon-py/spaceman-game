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
const submitButton = document.getElementById('submitButton');
const guessedLettersDiv = document.getElementById('guessedLetters');
const feedbackDiv = document.getElementById('feedback');
const resetButton = document.getElementById('resetButton');
const spacemanCanvas = document.getElementById('spacemanCanvas');
const timerDisplay = document.getElementById('time');
const currentWord = document.getElementById('currentWord');
const currentWordLetters = document.querySelectorAll('.letter')



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



/*---------- Variables (state) ---------*/
let lettersGuessed = []
let secretWord = '';
let remainingTime = 120;
let timeInterval;




/*----- Cached Element References  -----*/


  /*-------------- Functions -------------*/
initializeGame()


// reset guesses, update UI,
function initializeGame() {
  secretWord = getSecretWord();
  secretWord = secretWord.split('')
  console.log(secretWord);
  
  lettersGuessed = [];
  remainingTime = 120;
  
  secretWord.forEach((letter, i) => {
    let emptyspace = document.createElement('span')
    emptyspace.setAttribute('id', i)
    emptyspace.setAttribute('class', 'letter')
    emptyspace.innerText = '_'
    currentWord.appendChild(emptyspace)
    
  });
    
  }
  
function getSecretWord() {
  const randomIndex = Math.floor(Math.random() * spaceList.length);
  return spaceList[randomIndex].toLowerCase();

}



  //  check if 'letter' is in currentWord, handle  penalty.
function handleGuess() {
  let guessedLetter = guessInput.value.toLowerCase()
  console.log(guessedLetter);


  if (lettersGuessed.includes(guessedLetter)) {
    alert('Already used letter!')
    return
  }

  if (secretWord.includes(guessedLetter)) {
    // Reaveal letter in current
    secretWord.forEach((letter, i) => {
      let emptyspace = document.getElementById(i)
      if (letter == guessedLetter) emptyspace.innerText = letter
    })
  } else {
    lettersGuessed.push(guessedLetter)
    console.log(lettersGuessed);
    // push guessedLetter into letters guessed
  }

  
  
    
    
    //  (timer). -10 sec
  }
  
  function checkWinCondition() {
      //  if all letters are revealed, declare victory.
      
  }
  
  function checkLoseCondition() {
    //  if guessesRemaining <= 0 or the timer hits 0.
  }

/*----------- Event Listeners ----------*/
// event listerners for buttons
submitButton.addEventListener('click', handleGuess)