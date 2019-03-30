function Letter(letter) {
    this.letter = letter,
        //sets the initial guess to false
        this.guessed = false,
        this.toString = function () {
            //if the the letter is a space 
            if (this.letter === ' ') {
                //make the guess true
                this.guessed === true;
                //return a space 
                return ' ';
            } else {
                //makes the space equal to underscore
                if (this.guessed === false) {
                    return '_';
                } else {
                    //return the letter
                    return this.letter;
                }
            }
        },
        this.guess = function (guess) {
            //if the guess is the letter
            if (guess === this.letter) {
                //makes the guess 
                this.guessed = true;
            }
        }

}
module.exports = Letter;