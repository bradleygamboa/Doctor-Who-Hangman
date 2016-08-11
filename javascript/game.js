// Sets the Starting Word
var wordList = ['hartnell', 'troughton', 'pertwee', 'tbaker', 'davison', 'cbaker', 'mccoy',
    'mcgann', 'ereccleston', 'tennant', 'smith', 'capaldi'
]

// This sets the starting word randomly.
function startingWord(word){
var rand = wordList[Math.floor(Math.random() * wordList.length)];
}

// Wins, Losses, and Guesses left
var wins = 0;
var guessesLeft = 10;

// When the user presses the key it records the keypress and then sets it to letterGuessed
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    showToPage(letterGuessed);

    // Places the selecgted letters into the game
    function showToPage(letterGuessed) {
        document.querySelector('#game').innerHTML = letterGuessed;
    }

    if (letterGuessed) {
        guessesLeft--;
    }

    
    if (guessesLeft === 0) {
        alert("Exterminate!")
        location.reload();
    }

    // Taking the tallies and displaying them in HTML
    var html = "<h3><p>Wins: " + wins + "</p>" +

        "<p>Guesses Left: " + guessesLeft + "</p></h3>";

    document.querySelector('#counter').innerHTML = html;

}
