// An array that lists out potential words to pick (pls fix me)
var computerChoice = ["banana"];

//An array that self loops to generate blank spots for guessing letters
var answerArray = [];
for (var i = 0; i < computerWord; i++) {
    answerArray[i] = "_";
}
var computerWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Variable for how many letters are remaning
var remainingLetters = computerWord.length;

var userGuess = event.key;


// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var answerArrayText = document.getElementById("answerarray-text");
answerArrayText.textContent = answerArray;



//When the user presses a key, run this fuction

    var computerWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];


        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "n")) {
            
            userChoiceText.textContent = "You chose: " + userGuess;
            computerChoiceText.textContent = "The computer's word is: " + computerWord;
            answerArrayText.textContent = answerArray.join(" _ ");
            
                for (var j = 0; j < computerWord.length; j++) {
                    if (computerWord[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                    }
                }
             }
