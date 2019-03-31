//requires letter
const Letter = require('./letter.js');
//passes the word from word
function Word(word) {
    //splits the word
    let wordStart = word.split('');
    //store the letters in an array
    this.letterLog = [];
    for (let i = 0; i < wordStart.length; i++) {
        //sends each letter to letter function
        let letter = new Letter(wordStart[i]);
        this.letterLog.push(letter);
    }
    this.log = function () {
        //make a space
        let answerSpace = '';
        //make the space order
        for (let i = 0; i < this.letterLog.length; i++) {
            answerSpace += this.letterLog[i] + ' ';
        }
        console.log(answerSpace + '\n');
    }
    //takes the letters that was guessed 
    this.whetherUserGuessed = function (letterGuess) {
        for (let i = 0; i < this.letterLog.length; i++) {
            //passes the letterGuess to the guess function in letter.js
            this.letterLog[i].guess(letterGuess);
        }
    }

}
module.exports = Word;