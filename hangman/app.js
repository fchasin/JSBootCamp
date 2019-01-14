let another = new Hangman('an other', 6);
const puzzleEl = document.querySelector('#display-word');
const guessesEl = document.querySelector('#display-guesses');

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  another.makeGuess(guess);
  renderGame();
});

const renderGame = async () => {
  puzzleEl.textContent = another.puzzle;
  guessesEl.textContent = another.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  another = new Hangman(puzzle, 5);
  renderGame();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2')
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${error}`);
//   });

// countryRequest('MX')
//   .then(countryName => {
//     console.log(countryName);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then(response => {
//     return countryRequest(response.country);
//   })
//   .then(country => {
//     console.log(country);
//   });

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// //fetch api
// fetch('http://puzzle.mead.io/puzzle', {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('unable to fetch puzzlez');
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // Making HTTP requets

//
//
//
//
//
//
//

// HTTP (Hypertext Transfer Protocol)
// Request - what we want to do
// Response - what was actually done

// Lectures 90's
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
