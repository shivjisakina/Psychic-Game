//variables

var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// this wont work because it has to be random letter = ("l", "s", "f", "t"),



var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);
    console.log("random letter " + computerGuess)

var wins = 0,
    losses = 0,
    guessesLeft = 10;

var userGuess = prompt("Enter your guess here "); {
    console.log("your choice was " + userGuess)
}



document.onkeyup = function (event) {
    
};



//if else statements

    if (userGuess === alphabet) {
        wins++
}

    

