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
var maxTries = 10;

//variables
var guessedLetters = [];
var guessingWord = [];
var remainingGuesses = 0;
var wins = 0;
var loss = 0;

//press any key to start the game

document.onkeyup = function (event) {
    var word = selectWord[Math.floor(Math.random()*selectWord.length)];
    for (var i = 0; i < word.length; i++ ) {
        guessingWord[i] = "_";
        document.getElementById("guessTheWord").innerText = guessingWord.join(" ");
    };
};

