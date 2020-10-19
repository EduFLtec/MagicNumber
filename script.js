// Variables
let guessNumber = targetRandomNumber(1, 100);
let isNumberFound = false;

let guess;
let guesses = 0;

function targetRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//Guess tracking and win state
while (isNumberFound === false){
guess = prompt ("I'm thinking of a number between 1 and 100");
	if (guess < 0 || guess > 100 || guess == "") {
		alert("Please enter a valid number between 1 and 100");
	} else if (guess == guessNumber) {
		isNumberFound = true;
		let stats = "You took " + guesses + " guesses to find the magic number!";
		alert(guessNumber + " is the magic number! You win! " + stats);
	} else {
		guesses = guesses + 1;
		if (guess < guessNumber) {
			alert("It's higher than " + guess);
		} else if (guess > guessNumber) {
			alert("It's lower than " + guess);
		}
	}
	
}







