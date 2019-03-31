//import inquirer
let inquire = require('inquirer');
//import word.js
let Word = require('./word.js');
//make a list of words 
const words = [
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
    "pokemon",
    "sailor moon",
    "cowboy bebop"
];
//make the letters only alphabet. no special characters
let letters = 'abcdefghijklmnopqrstuvwxyz';
//make a number of guesses
let numberGuess = 10;
//checks the letter
let lettersChecked = [];
//checks for wrong
let wrong = [];
//checks for correct
let correct = [];
//sets word variable
let word;
//sets a counter for correct guesses
let counter = 0;

function wordGrab() {
    word = words[Math.floor(Math.random() * words.length)];
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
        //sets the needs new word back to false
        needsNewWord === false;

    }
    if ((numberGuess > 0) || (counter < wordGuess.length)) {
        console.log(`${numberGuess} Guesses Left!`);
        //makes the word show with the letter in place
        newWord.log();
        inquire.prompt([

            {
                name: 'guess',
                message: 'Guess a letter between a & z!',
                type: 'input'
            },

        ]).then(function (ans) {
            //if the letter has shown up in the guesses
            if (!letters.includes(ans.guess) || ans.guess.length > 1) {
                console.log('\n Please Try Again \n');
                startGame();
            } else if (lettersChecked.includes(ans.guess) || ans.guess === '') {
                console.log('\n You already entered that and/or You entered nothing.\n Please Try again. \n');
                startGame();
            }
            //check to see if the letter is correct or incorrect
            else {
                lettersChecked.push(ans.guess);
                //puts the letter to the word function
                newWord.whetherUserGuessed(ans.guess);
                //checks to see if the letter is in the random word
                if (!wordGuess.includes(ans.guess)) {
                    numberGuess--;
                    wrong.push(ans.guess);
                    console.log('\n Wrong! Sorry! Try Again! \n');

                } else {
                    counter++;
                    correct.push(ans.guess);
                    console.log('\n Yay! You got one! \n');
                }
                console.log(`Letters Guessed: ${wrong.join(' ')}`);


                if (numberGuess > 0) {
                    startGame();
                } else {
                    console.log(`Sorry! The word was ${wordGuess}!! You Lose!! \n`);
                    restartGame();
                }

            }

        })
    } else {
        console.log(`\n Congratulations! You Win!!! \n`);
        restartGame();
    }


}

function restartGame() {
    inquire.prompt({
        name: 'restart',
        message: 'Would you like to play again?',
        choices: ["Play Again", 'Exit'],
        type: 'list'
    }).then(function (ans) {
        if (ans.restart === 'Play Again') {
            numberGuess = 10;
            lettersChecked = [];
            counter = 0;
            wrong = [];
            needsNewWord = true;
            startGame();
        } else {
            return;
        }
    })
}