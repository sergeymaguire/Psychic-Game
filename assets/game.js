"use strict";
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var guessesCounter = 0;

function setWins(value) {
    document.getElementById("wins").innerText = value;
}

function setLosses(value) {
    document.getElementById("losses").innerText = value;
}

function setGuesses(value) {
    document.getElementById("guesses").innerText = value;
}

function setGuessesLeft(value) {
    document.getElementById("guessesleft").innerText = value;
}

function setGuessesSoFar(value) {
    guessesCounter++;
    if (guessesCounter < 10) {
        var s = document.getElementById("guesses").innerText;
        s = s + value + ",";
        document.getElementById("guesses").innerText = s;
    }
    else {
        setGuesses("");
        guessesCounter = 0;
    }
}

//Intialize Game Value
setWins(0);
setLosses(0);
setGuesses("");
setGuessesLeft(9);


document.addEventListener('keydown', function (event) {
    if ((event.keyCode >= 97 && event.keyCode <= 122) ||
        (event.keyCode >= 65 && event.keyCode <= 90)) {
        // alert('A letter was pressed');
        setGuessesSoFar(event.key);

    }
});