
// Declaring all of the variables in the array
var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Declaring the wins, losses, and guessesLeft variables
wins = 0,
losses = 0,
guessesLeft = 10;

// When the user presses a key, its runs the function(game)
document.onkeyup = function(game) {

    // The key that has been pressed will show up here
    var userGuess = game.key;

    // This makes the computer generate a random alphabet and logs it in the console
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("user guess", userGuess, "computer alphabet", computerGuess);

    // If the users guess is the sae value and type as the computer generated letter, the wins increase by 1
    if (userGuess === computerGuess) {
        wins++;
    }

    // if the users guess doesnt = the computers guess and they've used all of their guesses, they get a loss
    else if (userGuess != computerGuess) {
        if (guessesLeft => 0) {
            guessesLeft--;
        }
        else (userGuess != computerGuess); {
                losses++;

        }



        // This combines the html and js variables that will show up on the page
        var html = "<p>Clck on any key to begin</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + userGuess + "</p>";

        // Using innerHTML so declare the variable values in the game.
        document.querySelector("#game").innerHTML = html;

    };
};


