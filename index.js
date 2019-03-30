//import inquirer
var inquire = require('inquirer');
//import word.js
var Word = require('./word.js');
//make a list of words 
var words = [
    "spiderman",
    "inuyasha",
    "naruto",
    "wolverine",
    "batman",
    "dragonball",
    "rogue",
    "thor",
    "storm",
    "cyclops",
    "gambit",
    "flash",
    "natsu",
    "jostar",
    "superman",
    "xena",
    "pokemon"
];
//make a number of guesses
let numberGuess = 15;
//checks the letter
let lettersChecked = [];
let word;

function wordGrab() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
}
wordGrab();
//store the word before making it blank
let wordGuess = word;
console.log(wordGuess);
//pass it to the Word Constructor 
let newWord = new Word(word);
let needsNewWord = false;

//start the game
startGame();

function startGame() {
    if (needsNewWord === true) {
        //grabs the word
        wordGrab();
        //makes the wordGuess = word
        wordGuess = word;
        //sends the word to the word constructor
        newWord = new Word(word);
        needsNewWord === false;

    }

    console.log(`${numberGuess} Guesses Left!`);
    inquire.prompt([

        {
            name: 'guess',
            message: 'Guess a letter between a & z!',
            type: 'input'
        },

    ]).then(function (ans) {

    })
}