$(document).ready(function() {
	var wins = 0;
	var losses = 0;
	var usedWords = [];
	var wordCollection = {
		parks : {
			'Death Valley' : {
				fact: "Death Valley is the hottest, lowest, and driest place in the United States. Daytime temperatures have topped 130 °F (54 °C) and it is home to Badwater Basin, the lowest elevation in North America. The park contains canyons, badlands, sand dunes, and mountain ranges, while home to more than 1000 species of plants.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg/800px-Mesquite_Sand_Dunes_in_Death_Valley.jpg"
			}, 
			Denali: {
				fact: "Centered on Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, caribou, and gray wolves.",
				img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg/800px-Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg"
			},
			Everglades : {
				fact: "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee.",
				img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Everglades_National_Park_cypress.jpg/800px-Everglades_National_Park_cypress.jpg"
			},
			Yosemite : {
				fact: "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YosemitePark2_amk.jpg/1024px-YosemitePark2_amk.jpg"
			},
			Arches : {
				fact: "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch.[13] Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/800px-Delicatearch1.jpg"
			}
		},
		birds : [
			"hoopoe", "toucan", "quetzal", "bird of paradise", "peacock", "African crowned crane"],
		books : [
			"Harry Potter", "Twilight", "Lord of the Rings"],
		stars : [
			"Libra", "Orion", "Leo", "Gemini"]
	}
	var theme;
	var chooseTheme;
	var remainingWords;

	$("button").on("click", function(){
		chooseTheme = $(this).attr("id");
		document.getElementById("theme-css").href = "assets/css/" + chooseTheme + ".css";
		theme = Object.keys(wordCollection[chooseTheme]);
		remainingWords = theme;
		$("#game-theme").html($(this).html());
	});

	startGame(); 

	function startGame() {
		
		document.onkeyup = function(event){
			var start = event.key;
			if 	(start==' '){
				playHangman();
			}
		}
	}

	 
	function playHangman() {
		var guessesLeft = 8;
		var lettersUsed = [];
		var randWord = chooseRandWord();
		console.log(randWord);
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
			// console.log("reading this");
			if (typeof remainingWords[0] === 'undefined'){
				setTimeout(function() {
					alert("You used up all the words! Choose a new topic.")
				},1);
			} 
			else { 
				var chosenWord = "";
				chosenWord = remainingWords[Math.floor(Math.random()*remainingWords.length)];
				remainingWords.splice(theme.indexOf(chosenWord), 1)
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

		console.log("got here");
		//Listen to keystrokes
		document.onkeyup = function(event) {
			var letterChoice = event.key;
			console.log("listening");
			
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
					document.getElementById("win-img").src = wordCollection[chooseTheme][randWord].img;
					document.getElementById("win-fact").innerHTML = wordCollection[chooseTheme][randWord].fact;
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
});