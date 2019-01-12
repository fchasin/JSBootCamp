class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.guesses = guesses;
    this.status = 'playing';
  }

  get puzzle() {
    let puzzle = '';

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else puzzle += '*';
    });
    return puzzle;
  }

  makeGuess(letter) {
    letter = letter.toLowerCase();
    const isUnique = !this.guessedLetters.includes(letter);
    const isBadGuess = !this.word.includes(letter);

    if (this.status !== 'playing') {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(letter);
    }
    if (isUnique && isBadGuess) {
      this.guesses -= 1;
    }

    this.stillPlaying();

    console.log(this.status);
  }

  stillPlaying() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === ' '
    );

    if (this.guesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  get status() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.guesses}`;
    } else if (this.status === 'failed') {
      return `Nice try: the word was ${this.word.join('')}`;
    } else {
      return `Congrats! You guessed the word!`;
    }
  }
}

// ES5 SPEC

// const Hangman = function(word, guesses) {
//   this.word = word.toLowerCase().split('');
//   this.guessedLetters = [];
//   this.guesses = guesses;
//   this.status = 'playing';
// };

// Hangman.prototype.getPuzzle = function() {
//   let puzzle = '';

//   this.word.forEach(letter => {
//     if (this.guessedLetters.includes(letter) || letter === ' ') {
//       puzzle += letter;
//     } else puzzle += '*';
//   });
//   return puzzle;
// };

// Hangman.prototype.makeGuess = function(letter) {
//   letter = letter.toLowerCase();
//   const isUnique = !this.guessedLetters.includes(letter);
//   const isBadGuess = !this.word.includes(letter);

//   if (this.status !== 'playing') {
//     return;
//   }

//   if (isUnique) {
//     this.guessedLetters.push(letter);
//   }
//   if (isUnique && isBadGuess) {
//     this.guesses -= 1;
//   }

//   this.stillPlaying();

//   console.log(this.status);
// };

// Hangman.prototype.stillPlaying = function() {
//   // const lettersUnguessed = this.word.filter((letter) => {
//   //     return !this.guessedLetters.includes(letter)
//   // })
//   // const finished = lettersUnguessed.length === 0;
//   if (
//     !this.getPuzzle()
//       .split('')
//       .includes('*')
//   ) {
//     this.status = 'finished';
//   }

//   if (this.guesses < 1) {
//     this.status = 'failed';
//   } else {
//     this.status = 'playing';
//   }
// };

// Hangman.prototype.getStatus = function() {
//   if (this.status === 'playing') {
//     return `Guesses left: ${this.guesses}`;
//   } else if (this.status === 'failed') {
//     return `Nice try: the word was ${this.word.join('')}`;
//   } else {
//     return `Congrats! You guessed the word!`;
//   }
// };
