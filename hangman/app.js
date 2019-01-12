const another = new Hangman('an other', 6);
const puzzleEl = document.querySelector('#display-word');
const guessesEl = document.querySelector('#display-guesses');

puzzleEl.textContent = another.puzzle;
guessesEl.textContent = another.status;
console.log(another.getStatus());

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  another.makeGuess(guess);
  puzzleEl.textContent = another.puzzle;
  guessesEl.textContent = another.status;
});

// console.log(puzzle.textContent);
// wordDisplayed.textContent = getPuzzle();

// guessesLeft = document.createElement('span');

// div.appendChild(wordDisplayed);

//NOTES

// product ---> Object.prototype ---> null
// if we dont find it in product ,we search object.prototype, then if not found there, we go up
// the prototypal inheritance tree,

// const product = {
//   name: 'Influence',
// };

// // hasOwnProperty

// console.log([property.hasOwnProperty('hasOwnProperty')]); // can find the value of hasOwnProperty because
// it goes up the prototype chain until it reaches object.prototype, then calls that on the product object

// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null