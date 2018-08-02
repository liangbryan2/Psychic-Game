var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = '';
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function randomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

var psychic = randomLetter();

document.onkeyup = function (event) {

    if (event.key === psychic) {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
        guessSoFar = "";
        psychic = randomLetter();
        guessesLeft = 9;
    } 

    else if (alphabet.includes(event.key) && guessSoFar.includes(event.key) === false) {
        guessSoFar = event.key + " " + guessSoFar;
        document.getElementById("guesses").innerHTML = guessSoFar;
        guessesLeft = guessesLeft - 1;
        document.getElementById("lives").innerHTML = guessesLeft;
        if (guessesLeft === 0) {
            losses = losses + 1;
            document.getElementById("losses").innerHTML = losses;
            guessSoFar = "";
            guessesLeft = 9;
            psychic = randomLetter();
        }
    }
}