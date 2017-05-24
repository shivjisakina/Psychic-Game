
// Our array of possible computer choices.
var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for tracking our wins, losses and ties. They begin at 0.
wins = 0,
losses = 0,
guessesLeft = 10;

// When the user presses a key, it will run the following function...
document.onkeyup = function(game) {

    // Determine which key was pressed
    var userGuess = game.key;

    // Sets the computerGuess variable equal to a random choice from the computerChoice array.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("user guess", userGuess, "computer alphabet", computerGuess);

    if (userGuess === computerGuess) {
        wins++;
    }

    else if (userGuess != computerGuess) {
        if (guessesLeft > 0) {
            guessesLeft--;
        else (userGuess != computerGuess); {
                losses++;
            }

        }



        // Here we create the HTML that will be injected into our div and displayed on the page.
        var html = "<p>Clck on any key to begin</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + userGuess + "</p>";

        // Injecting the HTML we just created into our div and updating the game information on our page.
        document.querySelector("#game").innerHTML = html;

    };
};


