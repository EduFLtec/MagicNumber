//Game Variables
let min = 1;
let max = 10;
let winningNumber = winningRandomNumber(min, max);
let isNumberFound = false;
let guesses = 0;

// UI Variables
const minNum = document.querySelector('.min-num'),
 maxNum = document.querySelector('.max-num'),
 guessInput = document.querySelector("#guess-input"),
 guessBtn = document.querySelector("#guess-btn"),
 message = document.querySelector('.message'),
 higherHint = document.querySelector("#higer-hint"),
 lowerHint = document.querySelector("#lower-hint"),
 guessesCounter = document.querySelector("#guess-counter"),
 gameCard = document.querySelector('#game-card');


 // Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Play again option after a win, needs fix
gameCard.addEventListener('mousedown', function(e){
	if(e.target.value === 'Play Again'){
	  window.location.reload();
	}
  });

// Generate winning number
function winningRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


guessBtn.addEventListener('click', function () {
	let guess = parseInt(guessInput.value);
	guessInput.value = '';
	
	// Validation
	if (isNumberFound === false) {
		if (isNaN(guess) || guess < min || guess > max || guess === "") {
			setMessage(`Please enter a valid number between ${min} and ${max}`, 'warning');
		// Win state and replay option
		} else if (guess === winningNumber) {
			isNumberFound = true;
			let stats = `You took ${guesses} guesses to find the magic number!`;
			setMessage(`${winningNumber} is the magic number! You win! ${stats}`, 'success');
			guessBtn.value = 'Play Again';
			gameCard.classList.remove('border-danger');
			gameCard.classList.add('border-success');
		// Hint information
		} else {
			guesses = guesses + 1;
			setGuessCounter();
				gameCard.classList.add('border-danger');
			    if (winningNumber > guess) {
					setHighHint(`It's higher than: ${guess}`);
				} else {
					setLowerHint(`It's lower than: ${guess}`);
				}
			}

		
	}
});
	

// Higher hint
	function setHighHint(msg) {
		higherHint.textContent = msg;
	};
	
	
// Lower hint 
	function setLowerHint(msg) {
		lowerHint.textContent = msg;
	};

// Guess counter
	function setGuessCounter() {
		guessesCounter.textContent = `Guess Attempt: ${guesses}`;
	};

// Game warning, win or loss message 
	function setMessage(msg, color) {
		message.classList.toggle(`text-${color}`);
		message.textContent = msg;
	};
