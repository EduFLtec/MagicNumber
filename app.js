//Game Variables
let min = 1;
let max = 10;
let winningNumber = winningRandomNumber(min, max);
let isNumberFound = false;
let guesses = 0;

// UI Variables
const  gameWrapper = document.querySelector('.game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector('.message');
const higherHint = document.querySelector("#higer-hint");
const lowerHint = document.querySelector("#lower-hint");
const guessesCounter = document.querySelector("#guess-counter");

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;



// Generate winning number
function winningRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


guessBtn.addEventListener('click', function () {
	let guess = parseInt(guessInput.value);
	
	// Validation
	if (isNumberFound === false) {
		if (isNaN(guess) || guess < min || guess > max || guess == "") {
			setMessage(`Please enter a valid number between ${min} and ${max}`, 'warning');
		} else if (guess == winningNumber) {
			isNumberFound = true;
			let stats = `You took ${guesses} guesses to find the magic number!`;
			setMessage(`${winningNumber} is the magic number! You win! ${stats}`, 'success');
		} else {
			guesses = guesses + 1;
			setGuessCounter();
			    if (guess < winningNumber) {
					setHighHint(`It's higher than: ${guess}`);
				} else if (guess > winningNumber) {
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
