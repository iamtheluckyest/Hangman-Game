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
				fact: "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/800px-Delicatearch1.jpg"
			}
		},
		birds : {
			hoopoe : {
				fact: "The Hoopoe, a colorful bird that is found across Afro-Eurasia, is notable for its distinctive 'crown' of feathers. It is the only extant species in the family Upupidae. One insular species, the Giant Hoopoe of Saint Helena, is extinct, and the Madagascar subspecies of the Hoopoe is sometimes elevated to a full species. Like the Latin name upupa, the English name is an onomatopoetic form which imitates the cry of the bird.",
				img: "http://www.oddee.com/_media/imgs/articles2/a98487_b4.jpg"
			},
			quetzal : {
				fact: "The resplendent quetzal is an aptly named bird that many consider among the world's most beautiful. These vibrantly colored animals live in the mountainous, tropical forests of Central America where they eat fruit, insects, lizards, and other small creatures.",
				img:"https://s-media-cache-ak0.pinimg.com/736x/ca/d6/36/cad636cb50384fe866a45b9b1c3bfa88--beautiful-birds-bucket-list.jpg"
			},
			'bird of paradise' : {
				fact: "The Birds of Paradise are members of the family Paradisaeidae of the order Passeriformes. The majority of species in this family are found on the island of New Guinea and its satellites, with a few species occurring in the Moluccas and eastern Australia. It's likely that you will only see them on film, though, because they mostly live in inaccessible, dense rainforest habitats.",
				img: "http://www.oddee.com/_media/imgs/articles2/a98487_b5.jpg"
			},
			peacock : {
				fact: "Peacocks are large, colorful pheasants (typically blue and green) known for their iridescent tails. These tail feathers, or coverts, spread out in a distinctive train that is more than 60 percent of the bird's total body length and boast colorful 'eye' markings of blue, gold, red, and other hues. The large train is used in mating rituals and courtship displays. It can be arched into a magnificent fan that reaches across the bird's back and touches the ground on either side. Females are believed to choose their mates according to the size, color, and quality of these outrageous feather trains.",
				img: "http://www.oddee.com/_media/imgs/articles2/a98487_b9.jpg"
			}
		},
		books : {
			'Harry Potter' : {
				fact: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and muggles, a reference term that means non-magical people.",
				img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
			}, 
			Twilight: {
				fact: "Twilight is a series of four vampire-themed fantasy romance novels by American author Stephenie Meyer. Released annually from 2005 through 2008, the four books chart the later teen years of Isabella 'Bella' Swan, a girl who moves to Forks, Washington, and falls in love with a 104-year-old vampire named Edward Cullen. The series is told primarily from Bella's point of view, with the epilogue of Eclipse and Part II of Breaking Dawn being told from the viewpoint of character Jacob Black, a werewolf.",
				img:"https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg"
			},
			'The Hunger Games' : {
				fact: "The Hunger Games is a trilogy of young adult dystopian novels written by American novelist Suzanne Collins. The Hunger Games universe is a dystopia set in Panem, a country consisting of the wealthy Capitol and 12 districts in varying states of poverty. Every year, children from the districts are selected to participate in a compulsory annual televised death match called The Hunger Games.",
				img:"https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg"
			},
			'Lord of the Rings' : {
				fact: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
				img: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/f0f72953-7f64-4530-9c8a-c24f3a2f4fee.jpg._CB304080866__SL300__.jpg"
			},
			'Chronicles of Narnia' : {
				fact: "The Chronicles of Narnia is a series of seven fantasy novels by C. S. Lewis. It is considered a classic of children's literature and is the author's best-known work, having sold over 100 million copies in 47 languages. Written by Lewis, illustrated by Pauline Baynes, and originally published in London between 1950 and 1956, The Chronicles of Narnia has been adapted several times, complete or in part, for radio, television, the stage, and film.",
				img: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg"
			}	
		},
		stars : {
			Orion : {
				fact: "Orion was named after a hunter in Greek mythology. The earliest depiction that has been linked to the constellation of Orion is a prehistoric (Aurignacian) mammoth ivory carving found in a cave in the Ach valley in West Germany in 1979. Archaeologists have estimated it to have been fashioned approximately 32,000 to 38,000 years ago. The distinctive pattern of Orion has been recognized in numerous cultures around the world, and many myths have been associated with it.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Orion_3008_huge.jpg/800px-Orion_3008_huge.jpg"
			}, 
			Sagittarius: {
				fact: "Sagittarius is one of the constellations of the zodiac. Its name is Latin for 'the archer.' The center of the Milky Way lies in the westernmost part of Sagittarius (pictured).",
				img:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Sagittarius_region_.jpg"
			},
			Scorpio : {
				fact: "In Greek mythology, the myths associated with Scorpio almost invariably also contain a reference to Orion. According to one of these myths it is written that Orion boasted to goddess Artemis and her mother, Leto, that he would kill every animal on the Earth. Although Artemis was known to be a hunter herself she offered protection to all creatures. Artemis and her mother Leto sent a scorpion to deal with Orion. The pair battled and the scorpion killed Orion. However, the contest was apparently a lively one that caught the attention of the king of the gods Zeus, who later raised the scorpion to heaven and afterwards, at the request of Artemis, did the same for Orion to serve as a reminder for mortals to curb their excessive pride.",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sidney_Hall_-_Urania%27s_Mirror_-_Scorpio.jpg/800px-Sidney_Hall_-_Urania%27s_Mirror_-_Scorpio.jpg"
			},
			Hydra : {
				fact: "Hydra is the largest of the 88 modern constellations, and is commonly represented as a water snake.",
				img: "https://upload.wikimedia.org/wikipedia/commons/1/18/HydraCC.jpg"
			}
		}
	}
	var theme;
	var chooseTheme;
	var remainingWords;
$(document).ready(function() {

	$("button").on("click", function(){
		chooseTheme = $(this).attr("id");
		document.getElementById("theme-css").href = "assets/css/" + chooseTheme + ".css";
		theme = Object.keys(wordCollection[chooseTheme]);
		remainingWords = theme;
		$("#game-theme").html($(this).html());
		console.log("remainingWords inside click");
		document.getElementById(chooseTheme).blur();
		$("#instructions").html("Press the spacebar to start a new game.");
		$("#blanks").empty();
		$("#incorrect-letters-used").html("Incorrect letters used:");
		startGame();
	});
});

	 

	function startGame() {
		document.onkeyup = function(event){
			var start = event.key;
			if 	(start==' '){
				$("#win-fact").empty();
				$("#win-img").attr("src", "")
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
		$("#instructions").html("Guess a letter!");
		$("#guesses-left").html("You have " + guessesLeft + " guesses left.");
		$("#wins").text = wins;
		$("#losses").text = losses;
		$("#incorrect-letters-used").html = "Incorrect letters used:&nbsp;<br>&nbsp;"
		$("hangman-img").attr("src", "assets/images/hangman"+ guessesLeft +".png")


		//Computer chooses word

		function chooseRandWord() {
			if (typeof remainingWords[0] === 'undefined'){
				$("#instructions").html("You used up all the words! Choose a new topic.");
			} 
			else { 
				var chosenWord = "";
				chosenWord = remainingWords[Math.floor(Math.random()*remainingWords.length)];
				remainingWords.splice(theme.indexOf(chosenWord), 1);
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
				$("#instructions").text = "Guess another letter!"
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
				$("#hangman-img").src = "assets/images/hangman"+ guessesLeft +".png"
				$("#guesses-left").text = "You have " + guessesLeft + " guesses left.";
				$("incorrect-letters-used").text += " " + letterChoice;
			}
			lettersUsed.push(letterChoice);
			
			return fillIn;
		}
	}
