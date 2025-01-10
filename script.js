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
const resetButton = document.getElementById('resetButton');

const guessedLettersDiv = document.getElementById('guessedLetters')

const timerDisplay = document.getElementById('time');
const currentWord = document.getElementById('currentWord');
const currentWordLetters = document.querySelectorAll('.letter')
const startTimerButton = document.getElementById('startTimer');

const feedbackDiv = document.getElementById('feedback');
const spacemanCanvas = document.getElementById('spacemanCanvas');


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
console.log(spacemanCanvas);
console.log(resetButton);
console.log(currentWordLetters);
console.log(currentWord);
console.log(submitButton);
console.log(timerDisplay);
console.log(feedbackDiv);
console.log(guessedLettersDiv);



/*---------- Variables (state) ---------*/
let lettersGuessed = []
let secretWord = '';
let remainingTime = 120;
let timeInterval= null;
currentWordLetters = []



  /*-------------- Functions -------------*/

function initializeGame() {
  secretWord = getSecretWord().split('');     // reset game variables
  lettersGuessed = [];
  remainingTime = 120;
  clearInterval(timeInterval)

  // clear Display
  
  secretWord.forEach((letter, i) => {
    let currentWord = document.createElement('span')
    currentWord.setAttribute('id', i)
    currentWord.setAttribute('class', 'letter')
    currentWord.innerText = '_'
    currentWord.appendChild(currentWord)
    
  });
    
  }
  
function getSecretWord() {
  const randomIndex = Math.floor(Math.random() * spaceList.length);
  return spaceList[randomIndex].toLowerCase();
}



  //  check if 'letter' is in currentWord, handle  penalty.
function handleGuess() {
  
  let guessedLetter = guessInput.value.toLowerCase()     // console.log(guessedLetter);
  if (lettersGuessed.includes(guessedLetter)) {
    alert('Already used letter!')
    return
  }

  if (secretWord.includes(guessedLetter)) {
    // Reaveal letter in currentWord
    secretWord.forEach((letter, i) => {
      let currentWord = document.getElementById(i)
      if (letter == guessedLetter) currentWord.innerText = letter
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
  
  function checkLoseCondition() {           //  if guessesRemaining <= 0 or the timer hits 0.
    if (remainingTime <= 0 || secretWord.includes(lettersGuessed)) {endgame == true
      
    }
  }


let endgame = null


/*----------- Event Listeners ----------*/
submitButton.addEventListener('click', handleGuess); 

resetButton.addEventListener('click', initializeGame);

startTimerButton.addEventListener('click', startTimer); 

