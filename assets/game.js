"use strict";
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var guessesCounter = 0;
var computerChoice = "";

var wins = 0;
var losses = 0;
var guessesLeft = 9;
setComputerLetter();

function setComputerLetter() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}

function setWins(value) {
    document.getElementById("wins").innerText = value;
}

function setLosses(value) {
    document.getElementById("losses").innerText = value;
}

function setGuessesSoFar(value) {
    document.getElementById("guessessofar").innerText = value;
}

function setGuessesLeft(value) {
    document.getElementById("guessesleft").innerText = value;
}

function winner() {
    wins++;
    setWins(wins);
    guessesLeft = 9;
    setGuessesSoFar("");
    setComputerLetter();
}

function resetGame() {
    guessesLeft = 9;
    guessesCounter = 0;
    setGuessesSoFar("");
    gameLost();
    setComputerLetter();
}

function setPageGuessesSoFar(key) {
    setGuessesLeft(guessesLeft);
    var s = document.getElementById("guessessofar").innerText;
    s = s + key + ",";
    document.getElementById("guessessofar").innerText = s;
}

function gameLost() {
    setGuessesSoFar("");
    guessesCounter = 0;
    losses++;
    setLosses(losses);
    guessesLeft--;
    setGuessesLeft(guessesLeft);

}

function applyKey(key) {
    if (key === computerChoice) {
        winner();
        return;
    }

    guessesCounter++;
    guessesLeft--;

    if (guessesCounter < 10) {
        if (guessesCounter === 9) {
            resetGame();
        } else {
            setPageGuessesSoFar(key);
        }
    }
}

//Intialize Game Value
setWins(0);
setLosses(0);
setGuessesSoFar("");
setGuessesLeft(9);

function handleKey(event) {
    if (event.key >= "a" && event.key <= "z") {
        // alert('A letter was pressed');
        applyKey(event.key);
    }
};

document.addEventListener('keydown', handleKey);