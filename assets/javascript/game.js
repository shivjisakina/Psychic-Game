//variables

var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// testing]s = ("l", "s", "f", "t"),



var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);
    console.log("random letter " + computerGuess)

var wins = 0,
    losses = 0,
    guessesLeft = 10;


    document.onkeyup = function (event) {


    var userGuess = event.key;










    /*
    document.getElementById("#wins").innerHTML += wins;
    document.getElementById("#losses").innerHTML += losses;
    document.getElementById("#guessesleft").innerHTML += guessesLeft;
    document.getElementById("#userguess").innerHTML += userGuess; */


//if else statements

    if (userGuess === alphabet) {
        wins++
    }


}