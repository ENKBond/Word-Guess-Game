var currentWord = [
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

var word = currentWord[Math.floor(Math.random()*currentWord.length)];

var answer = [];
for (var i = 0, i < word.length; i++) {
    answer[i] = "_";
}

var remainingLetters = word.length;