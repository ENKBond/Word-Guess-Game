var wordList = ["twain", "orwell", "woolf", "steinbeck", "dostoyevsky", "hemingway", "alcott", "bronte", "dickens", "fitzgerald"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var numberWins = 0;
var numberLoss = 0;
var numberLeft = 10;

function playGame() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    numberLeft = 10;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    for(var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("guessTheWord").innerText = blanksAndSuccesses.join(" ");
    document.getElementById("numberLeft").innerText = numberLeft;
    document.getElementById("numberWins").innerText = numberWins;
    document.getElementById("numberLoss").innerText = numberLoss;
    document.getElementById("guessedLetters").innerText = wrongGuesses.join(" ");
}

function checkGuess(letter) {
    var isLetterInWord = false;
    
    for (var i=0; i<numBlanks; i++) {
        if (selectedWord[i]==letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if (selectedWord[i]==letter) {
                blanksAndSuccesses[i]=letter;
            }
        }
    }
    else {
        wrongGuesses.push(letter);
        numberLeft--
    }
}

function roundComplete() {
    document.getElementById("numberLeft").innerText = numberLeft;
    document.getElementById("guessTheWord").innerText = blanksAndSuccesses.join(" ");
    document.getElementById("guessedLetters").innerText = wrongGuesses.join(" ");

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        numberWins++;
        document.getElementById("numberWins").innerText = numberWins;
        playGame();
    }
    else if (numberLeft == 0) {
        numberLoss++;
        document.getElementById("numberLoss").innerText = numberLoss;
        playGame();
    }
}



playGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(letterGuessed);
    roundComplete();
}