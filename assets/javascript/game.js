var wins = 0;
var start;
var usedWords = [];


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

	var guessesLeft = 10;
	var lettersUsed = [];
	var parks = ["Zion", "Canyonlands", "Everglades", "Gettysburg"];
	var randWord = chooseRandWord();
	console.log("type of randWord is: " + typeof randWord);
	var blanks = "";

	
	//Set up text on page
	document.getElementById("instructions").textContent = "Guess a letter!";
	document.getElementById("guesses-left").textContent = guessesLeft;
	document.getElementById("incorrect-letters-used").textContent = "";
	document.getElementById("wins").textContent = wins;

	//Computer chooses word
	function chooseRandWord() {
		var chosenWord = "";
		if (usedWords.length === parks.length) {
			alert("There are no more words! Refresh the browser to play again")
			return;
		}
		else if (usedWords.indexOf(chosenWord) > -1) {
			chosenWord = parks[Math.floor(Math.random()*parks.length)];
			console.log("picked word: " + chosenWord);
			console.log("usedWords so far is: " + usedWords);
			chooseRandWord();
		}
		else {
			usedWords.push(chosenWord);
			console.log(usedWords);
			console.log("type of picked word is: " + typeof chosenWord);
			debugger;
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
		if (lettersUsed.toString().search(letterChoice) > -1) { //use indexOf instead
			document.getElementById("instructions").textContent = "You've already used that letter. Try again!"
		}
		
		// If valid character, check if it is found in the word
		else if (letterChoice == letterChoice.match(/[a-z]/i)) {
			document.getElementById("instructions").textContent = "Guess another letter!"
			blanks = checkLetter(letterChoice);
			printBlanks();

			//Inform of loss
			if (guessesLeft == 0) {
				setTimeout(function() {
					if (confirm("You lost! Start over?") === true){
					playHangman();
					} 
					else {
						document.getElementById("instructions").textContent = "Press the spacebar to start a new game.";
						startGame();
					}
				},1);
			} //end inform of loss

			//Inform of win
			if (blanks.search("_") === -1) {
				wins++;
				setTimeout(function() {
					if (confirm("You won! Start over?") === true){
						playHangman();
					}
					else {
						document.getElementById("instructions").textContent = "Press the spacebar to start a new game.";
						startGame();
					}
				},1);	
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
			document.getElementById("guesses-left").textContent = guessesLeft;
			document.getElementById("incorrect-letters-used").textContent += " " + letterChoice;
		}
		lettersUsed.push(letterChoice);
		
		return fillIn;
	}
}