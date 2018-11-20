var guessedLetters = [];
var currentWordIndex;
var remainingGuesses = 10;
var wins = 0;
var loss = 0;
var maxTries = 10;
var word = ["orwell", "austen", "tolstoy", "twain", "woolf","dickens", "salinger","bronte", "steinbeck", "hemingway"];
var lettersGuessed = [];
var guessingWord = [];


document.onkeyup = function gameStart (event) {
    var randomWord = Math.floor(Math.random()* word.length);
    var chosenWord = word[randomWord];
    for (var i = 0; i < chosenWord.length; i++ ) {
        guessingWord.push("_");
        document.getElementById("guessTheWord").innerText = guessingWord.join(" ");
    }
    document.getElementById("numberLeft").innerText = remainingGuesses;
    document.getElementById("numberWins").innerText = wins;
    document.getElementById("numberLoss").innerText = loss;
    document.getElementById("start").style.visibility = "hidden";
};

document.addEventListener('keypress', (event) => {
    var userGuess = event.keyCode;
    var key = String.fromCharCode(userGuess);
    if (chosenWord.indexOf(key) > -1) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === key) {
                guessingWord[i] = key;
                wins++;
            }
        }

        if (chosenWord[i] !== key) {
            lettersGuessed[i] = key;
            lettersGuessed.push(key);
            remainingGuesses--;
            document.getElementById("guessedLetters").innerText = lettersGuessed;
        }

        if (remainingGuesses <= 0){

        }
        }
       
    }



