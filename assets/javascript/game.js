//main words to guess
var selectWord = [
    "shakespeare",
    "austen",
    "to kill a mockingbird",
    "the great gatsby",
    "frankenstein",
    "dickens",
    "wilde",
    "anna karenina",
    "steinbeck",
    "hemingway",
];

var hints = [
    "The Bard",
    "Author of Pride and Prejudice",
    "Features the character Scout",
    "Set in West Egg",
    "Monster by Mary Shelley",
    "Author of The Pickwick Papers",
    "He could resist everything except temptation",
    "Every unhappy family is unhappy in their own way",
    "Author of The Grapes of Wrath",
    "Papa",
];

//10 tries set
const maxTries = 10;

//variables
var guessedLetters = [];
var currentWord;

var remainingGuesses = 0;
var gameStart = false;
var gameEnd = false;
var wins = 0;
var loss = 0;

//press any key to start the game
function play () {
    document.onkeyup = function(event) {
        remainingGuesses = maxTries;
//select a random word
    var word = selectWord[Math.floor(Math.random()*(selectWord.length))];
}
    var guessingWord = [];
        for (var i = 0; i < selectWord.length; i++); {
        guessingWord[i] = "_";
        document.getElementById("guessTheWord").innerText = "";
        document.getElementById("numberLeft").innerText = remainingGuesses;
        document.getElementById("numberWins").innerText = wins;
        document.getElementById("numberLost").innerText = loss;
}
    var remainingLetters = selectWord.length;
}