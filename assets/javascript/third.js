
// Declaring all of the variables in the array
var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

// Declaring the wins, losses, and guessesLeft variables
    wins = 0,
    losses = 0;
var guessesLeft = 10;


// This makes the computer generate a random alphabet and logs it in the console
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// When the user presses a key, its runs the function(game)
document.onkeyup = function(game) {

    // The key that has been pressed will show up here
    var userGuess = game.key;
    console.log("user guess", userGuess, "computer alphabet", computerGuess);


    // If the users guess is the same value and type as the computer generated letter, the wins increase by 1
    if (userGuess === computerGuess) {
        wins++;
        initateGuess();
    }

    // if the users guess doesn't = the computers guess and they've used all of their guesses, they get a loss
    else if (userGuess !== computerGuess) {
        if (guessesLeft !== 0) {
            guessesLeft--;
            console.log("guesses left ", guessesLeft);


        }
        // Losses increase if all 10 guesses are wrong
        else if (guessesLeft === 0) {
            losses++;
            console.log("guessesleft equal to 0", guessesLeft);
            initateGuess();
        }

    }
    /* this changed the losses everytime instead of every 10 times
     else (userGuess !== computerGuess); {

     losses++;

     }
     */


    // This combines the html and js variables that will show up on the page
    var html = "<h1>The Psychic Game</h1>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + userGuess + "</p>";

    // Using innerHTML so declare the variable values in the game.
    document.querySelector("#game").innerHTML = html;


}
    // this makes it easier to reset the value without having to put it in every if/else statement
    function initateGuess(){
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 10;
        console.log("New guess begins", computerGuess);

}