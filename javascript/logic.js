//Global Variables
//---------------------------------

//Arrays and Variables for holding data
	var wordOptions = ['tardis', 'doctorwho', 'rose', 'jack', 'tennant', 'smith', 'amy',
	'rory', 'river', 'daleks', 'sontarin', 'cybermen', 'master', 'mickey', 'donna',
	'mickey', 'martha', 'time'];
	var selectedWord = "";
	var lettersInWords = [];
	var numBlanks = 0;
	var blanksAndSuccesses = [];
	var wrongLetters = [];

//Counter
	var winCount = 0;
	var lossCount = 0;
	var guessesLeft = 9;

//Functions
//---------------------------------

function startGame (){
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWords = selectedWord.split("");
	numBlanks = lettersInWords.length;
	
	//reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//populate
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	//change html to show word and blanks
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = lossCount;

}

function checkLetters(letter){
	//check if letter exists in code
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}
	//check where in the word the letter exists and populate it
if (isLetterInWord){
			for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
		}
	}
}
else {

	wrongLetters.push(letter);
	guessesLeft--
}

}

function roundComplete(){

	//update HTML in real time
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
		document.getElementById('wrongGuesses').innerHTML = wrongLetters.join(" ");

	//check if user won
	if (lettersInWords.toString() == blanksAndSuccesses.toString()){
		winCount++
		alert("You are the Greatest! You have defeated the Daleks")

		//update HTML
		document.getElementById('winCounter').innerHTML = winCount;

		startGame(); 
	}
	//check if user lost
	else if (guessesLeft == 0){
		lossCount++
		alert("Exterminate!")

		//update HTML
		document.getElementById('lossCounter').innerHTML = lossCount;

		startGame();
	}
}

//Logic
//---------------------------------

//starts initial process
startGame();

//register keyclicks
	document.onkeyup = function(event){
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		checkLetters(letterGuessed);
		roundComplete();

	}