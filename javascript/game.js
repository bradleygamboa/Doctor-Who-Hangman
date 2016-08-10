// Sets the Starting Word
var wordList = ['hartnell', 'troughton', 'pertwee', 'tbaker', 'davison', 'cbaker', 'mccoy', 
                'mcgann', 'ereccleston', 'tennant', 'smith', 'capaldi']

// Wins, Losses, and Guesses left
var wins = 0;
var guessesLeft = 10;

// When the user presses the key it records the keypress and then sets it to letterGuessed
document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  // This sets the computer guess equal to the random.
  var startingWord = wordList[Math.floor(Math.random() * wordList.length)];

  //..Rest goes here  




  //..Rest goes here
  

    // Taking the tallies and displaying them in HTML
    var html = "<p><h3>Keep going!</h3></p>" +
    
    "<h3><p>Wins: " + wins + "</p>" +
    
    "<p>Guesses Left: " + guessesLeft + "</p></h3>";

    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
  }