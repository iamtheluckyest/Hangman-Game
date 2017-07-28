var wins = 0;
var losses = 0;
var start;
var usedWords = [];
var parks = ["Zion", "Canyonlands", "Everglades", "Gettysburg"];
var remainingWords = parks;



function startGame() {
	document.onkeyup = function(event){
		start = event.key;

		if 	(start==' '){
			playHangman();
		}
	}
}

startGame();
function playHangman() {

	var guessesLeft = 8;
	var lettersUsed = [];
	var randWord = chooseRandWord();
	var blanks = "";

	
	//Set up text on page
	document.getElementById("instructions").textContent = "Guess a letter!";
	document.getElementById("guesses-left").textContent = "You have " + guessesLeft + " guesses left.";
	document.getElementById("wins").textContent = wins;
	document.getElementById("losses").textContent = losses;
	document.getElementById("incorrect-letters-used").innerHTML = "Incorrect letters used:&nbsp;<br>&nbsp;"
	document.getElementById("hangman-img").src = "assets/images/hangman"+ guessesLeft +".png"

	//Computer chooses word

	function chooseRandWord() {
		if (typeof remainingWords[0] === 'undefined'){
			setTimeout(function() {
				alert("You used up all the words! Refresh the browser to play again.")
			},1);
		} 
		else { 
			var chosenWord = "";
			console.log(remainingWords);
			chosenWord = remainingWords[Math.floor(Math.random()*remainingWords.length)];
			remainingWords.splice(parks.indexOf(chosenWord), 1)
			console.log(remainingWords);
			return chosenWord;	
		}
	}

	//Set up blanks
	for (i = 0; i < randWord.length; i++) {
		if (randWord[i] === " ") {
			blanks += " ";
		}
		else {
		blanks += "_";
		}
	}

	//Print blanks
	printBlanks();

	function printBlanks() {
		var printBlanks = ""
		for (k=0; k < blanks.length; k++) {
			printBlanks += blanks[k] + "&nbsp;";
		}
		document.getElementById("blanks").innerHTML = printBlanks;
	}


	//Listen to keystrokes
	document.onkeyup = function(event) {
		var letterChoice = event.key;
		
		// If already used, prompt to try again
		if (lettersUsed.toString().toLowerCase().search(letterChoice.toLowerCase()) > -1) { //use indexOf instead
			document.getElementById("instructions").textContent = "You've already used that letter. Try again!"
		}
		
		// If valid character, check if it is found in the word
		else if (letterChoice == letterChoice.match(/[a-z]/i)) {
			document.getElementById("instructions").textContent = "Guess another letter!"
			blanks = checkLetter(letterChoice);
			printBlanks();

			//Inform of loss
			if (guessesLeft == 0) {
				losses++;
				document.getElementById("instructions").innerHTML = "You lost!<br>Press the spacebar to start a new game.";
				startGame();
			} //end inform of loss

			//Inform of win
			if (blanks.search("_") === -1) {
				wins++;
				document.getElementById("hangman-img").src = "assets/images/hangman-win.png";
				document.getElementById("instructions").innerHTML = "You won!<br>Press the spacebar to start a new game.";
				startGame();
			} //end inform of win
		}
		// If not a valid character, prompt to try again
		else {
			document.getElementById("instructions").textContent = "That's not a valid letter. Try again!"
		}

	} // end Listen to keystrokes


	function checkLetter(letterChoice){
		var fillIn = "";
		// Check if letter chosen is in the hangman word and recreate the blanks
		for (j = 0; j < randWord.length; j++) {
			if (letterChoice.toLowerCase() == randWord[j].toLowerCase()) {
				fillIn += randWord[j];
			}
			else {
				fillIn += blanks[j];
			}
		}
		// Add incorrect letter to list and reduce guesses
		if (fillIn == blanks) {
			guessesLeft--;
			document.getElementById("hangman-img").src = "assets/images/hangman"+ guessesLeft +".png"
			document.getElementById("guesses-left").textContent = "You have " + guessesLeft + " guesses left.";
			document.getElementById("incorrect-letters-used").textContent += " " + letterChoice;
		}
		lettersUsed.push(letterChoice);
		
		return fillIn;
	}
}