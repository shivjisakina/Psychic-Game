/* this was my second attempt


//Declare array with alphabets and wins & losses variables
    var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    wins = 0,
    losses = 0,
    guessesLeft = 10;

    document.onkeyup = function (game) {

    //for loop
        for (var i = 0; i < alphabet.length; i++)

    // Declare guessesLeft and userGuess that identifies the keystroke

        var userGuess = game.key;

    // Make computer randomize the alphabet and choose one
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


    // ifelse statements

    // if the users guess and the random computer generated letter are the same, they win
        if (userGuess === computerGuess) {
         wins++;
        }

    // if the users guess doesnt = the computers guess and theyve used all of their guesses, they get a loss
        else if (userGuess != computerGuess) {
            if (guessesLeft != 0) {
            guessesLeft--;
            }

            else if (guessesLeft === 0) {
            losses++;
            }
        }




    //
    document.getElementById("#wins").innerHTML = wins;
    document.getElementById("#losses").innerHTML = losses;
    document.getElementById("#guessesleft").innerHTML = guessesLeft;
    document.getElementById("#userguess").innerHTML = userGuess;






}
