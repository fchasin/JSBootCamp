let num = 15.234;

// toFixed method- pass an argument with the number of dceimals held
console.log(num.toFixed(2)); 

// exploring the math object
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// random numbre generation between 10 and 20
let min = 10;
let max = 20
let randomNum =  Math.floor( Math.random() * (max - min + 1) ) + min;

// challenge area guessing game
let guessGame = (guess) => {
    let min = 1;
    let max = 5;
    let randomNum =  Math.floor( Math.random() * (max - min + 1) ) + min;

    return guess === randomNum;
}

console.log(guessGame(1) )