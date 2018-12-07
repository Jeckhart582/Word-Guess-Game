// An array that lists out potential words to pick (pls fix me)
var computerChoice = ["banana", "kiwi", "apple", "cantaloupe", "watermelon", "honeydew", "berry",];

// Randomly chooses a word from the computerChoice variable
var computerWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//An array that self loops to generate blank spots for guessing letters
var answerArray = [];
for (var i = 0; i < computerWord.length; i++) {
    answerArray[i] = " _ ";
    };

// Variable for how many letters are remaning
var remainingLetters = computerWord.length;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userinput-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var answerArrayText = document.getElementById("answerarray-text");

answerArrayText.textContent = answerArray[i];

//When the user presses a key, run this fuction
document.onkeydown = function (event) {
    // Creates variable for which key the user pressed
    var userGuess = event.key;

    // If user pressed any key
    if ((userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "v")) {
        answerArrayText.textContent = answerArray.join("");

        for (var j = 0; j < computerWord.length; j++) {
            if (computerWord[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
            };
        };
    };
};
