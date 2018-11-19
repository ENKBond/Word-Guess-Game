//main words to guess
var selectWord = [
    "shakespeare",
    "austen",
    "dostoyevsky",
    "twain",
    "woolfe",
    "dickens",
    "salinger",
    "bronte",
    "steinbeck",
    "hemingway",
];

//10 tries set
var maxTries = 10;

//variables
var guessedLetters = [];
var guessingWord = [];
var remainingGuesses = 0;
var wins = 0;

//press any key to start the game

document.onkeyup = function gameStart (event) {
    var word = selectWord[Math.floor(Math.random()*selectWord.length)];
    for (var i = 0; i < word.length; i++ ) {
        guessingWord[i] = "_";
        document.getElementById("guessTheWord").innerText = guessingWord.join(" ");
    };
    document.getElementById("numberLeft").innerText = maxTries;
    document.getElementById("numberWins").innerText = wins;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("")
};

if (remainingGuesses > 0) {
    document.onkeyup = function makeGuess (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
         pickLetter(event.key.toLocaleLowerCase());
    }
        function pickLetter(letter) {
            if (guessedLetters.indexOf(letter) === -1) {
                guessedLetters.push(letter);
        }
    }
}
}
