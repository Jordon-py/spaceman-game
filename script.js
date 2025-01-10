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
const startTimerButton = document.getElementById('timer');

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
let timeInterval= '';




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
    currentWord.appendChild(i)
    
  });
    
  }
  
function getSecretWord() {
  const randomIndex = Math.floor(Math.random() * spaceList.length);
  return secretWord[randomIndex].toLowerCase()};



  //  check if 'letter' is in currentWord, handle  penalty.
function handleGuess() {
  
  let guessedLettersDiv = guessInput.value.toLowerCase()     // console.log(guessedLetter);
  if (lettersGuessed.includes(guessedLettersDiv)) {
    alert('Already used letter!')
    return
  }

  if (secretWord.includes(guessedLettersDiv)) {
    // Reaveal letter in currentWord
    secretWord.forEach((letter, i) =>  {
      let currentWord = document.getElementById(i)
      if(letter == guessedLetter) currentWord.innerText = letter
    })
    
    feedbackDiv.textContent = `You guessed "${guessedLetter}"`;
  }
  
  else {
    lettersGuessed.push(guessedLettersDiv);    // push guessedLetter into letters guessed
    let timerDisplay
    console.log(lettersGuessed);
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

  function startTimer() {
    timeInterval = setInterval(() => {
        remainingTime--;
        timerDisplay.textContent = remainingTime;
        
        if (remainingTime <= 0) {
            clearInterval(timeInterval);
            endGame(false); // Player loses
        }
    }, 1000);
}




let endgame = null


/*----------- Event Listeners ----------*/
submitButton.addEventListener('click', handleGuess); 

resetButton.addEventListener('click', initializeGame);

startTimerButton.addEventListener('click', startTimer); 

