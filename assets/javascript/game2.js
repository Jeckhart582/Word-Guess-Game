var userGuessedLetters = [];



function restartGame() {
    userGuessedLetters = [];
}

function refrestDisplay() {
    document.getElementById("userGuessedLetters").innerText = userGuessedLetters;

}

function makeGuess(letter) {
    if (userGuessedLetters.indexOf(letter) === -1) {
        userGuessedLetters.push(letter);
        evaluteGuess(letter);
    }
};

document.onkeydown = function(event) {
    if(event.keyCode >= 65 && event.keyCode <=90) {
        makeGuess(event.key.toLowerCase());
        refreshDisplay();
    }
}
