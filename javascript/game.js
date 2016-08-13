
    var wordList = ['HARTNELL', 'TROUGHTON', 'PERTWEE', 'TBAKER', 'DAVISON', 'CBAKER', 'MCCOY',
        'MCGANN', 'ERECCLESTON', 'TENNANT', 'SMITH', 'CAPALDI'];
    var wins = 0;
    var guessesLeft = 15;
    
    var words = wordList[Math.floor(Math.random()*wordList.length)];
    document.querySelector('#words').innerHTML = words;


// When the user presses the key it records the keypress and then sets it to letterGuessed
document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
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
    var counter = "<h3><p>Wins: " + wins + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p></h3>";
    document.querySelector('#counter').innerHTML = counter;

    var letterGuessedHeader = "<h3>Last letter guessed:</h3>";
    document.querySelector('#game-header').innerHTML = letterGuessedHeader;

}
