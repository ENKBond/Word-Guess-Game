var guessedLetters = [];
var guessingWord = [];
var remainingGuesses = 10;
var wins = 0;
var loss = 0;
var maxTries = 10;
var selectWord = ["orwell", "austen", "tolstoy", "twain", "woolf","dickens", "salinger","bronte", "steinbeck", "hemingway"];
var lettersGuessed;
var lettersNoMatch;

document.onkeyup = function gameStart (event) {
    var word = selectWord[Math.floor(Math.random()*selectWord.length)];
    for (var i = 0; i < word.length; i++ ) {
        guessingWord[i] = "_";
        document.getElementById("guessTheWord").innerText = guessingWord.join(" ");
    }
    document.getElementById("numberLeft").innerText = remainingGuesses;
    document.getElementById("numberWins").innerText = wins;
    document.getElementById("numberLoss").innerText = loss;
};
