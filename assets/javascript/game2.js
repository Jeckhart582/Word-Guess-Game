var randomWords = [ "banana", "orange", "kiwi", "pineapple", "apple", "cantaloupe", "honeydew", "watermelon",
];





var userGuessedLetters = [];
var selectedWordIndex;
var builtWord = [];



function restartGame() {
    selectedWordIndex = Math.floor(Math.random() * (randomWords.length));
    
    userGuessedLetters = [];
    builtWord= [];

    for (var i = 0; i < randomWords[selectedWordIndex].length; i++) {
        builtWord.push("_");
    }
};

function refreshDisplay() {
    var builtWordText = "";
    for (var i = 0; i < builtWord.length; i++) {
        builtWordText += builtWord[i];
    }
    
    document.getElementById("answer").innerText= builtWord;
    document.getElementById("userGuessedLetters").innerText = userGuessedLetters;

};

function checkGuess(letter) {
    var positions = [];
    
    for (var i = 0; i < randomWords[selectedWordIndex].length; i++){
        if(randomWords[selectedWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <=0) {
        remainingGuesses--;
    } else {
        for (var i =0; i <positions.length; i++) {
            builtWord[positions[i]] = letter;
        }
    }
};

function makeGuess(letter) {
    if (userGuessedLetters.indexOf(letter) === -1) {
        userGuessedLetters.push(letter);
        checkGuess(letter);
    }
};

document.onkeydown = function(event) {
    if(event.keyCode >= 65 && event.keyCode <=90) {
        makeGuess(event.key.toLowerCase());
        refreshDisplay();
    }
};


