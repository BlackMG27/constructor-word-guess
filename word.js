//requires letter
const Letter = require('./letter.js');
//passes the word from word
function Word(word) {
    //splits the word
    let wordStart = word.split('');
    //store the letters in an array
    this.letterLog = [];
    console.log(wordStart);
    for (let i = 0; i < wordStart.length; i++) {
        let letter = new Letter(wordStart[i]);
        this.letterLog.push(letter);
    }
    console.log(this.letterLog);
    this.log = function () {
        //make a space
        let answerSpace = '';
        //make the space order
        for (let i = 0; i < this.letterLog.length; i++) {
            answerSpace += this.letterLog[i] + ' ';
        }
        console.log(answerSpace + '\n');
    }

    this.whetherUserGuessed = function (letterGuess) {
        for (let i = 0; i < this.letterLog.length; i++) {
            this.letterLog[i].guess(letterGuess);
        }
    }

}
module.exports = Word;