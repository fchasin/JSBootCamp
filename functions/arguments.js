let getScoreText = (name = "anonymous", score = 0) => {
    console.log(name);
    console.log(score)
}

getScoreText(); //  will return: "anonymous" \n 0 \n
getScoreText("Fred", 1) // will return : "Fred" \n 0 \n
getScoreText(undefined, 99) // will return: "anonymous" default \n 99 \n

// const tipCalculator = (total, tipPercent =.2) => {
//     return total * tipPercent;
// }

// Challenge
// console.log(tipCalculator(100)); // 20

// Template Strings
let name = "Jen";

console.log(`Hey my name is ${name}!`);

const tipCalculator = (total, tipPercent =.2) => {
    return `A ${tipPercent * 100}% tip on $${total} is $${total * tipPercent}`;
}

console.log(tipCalculator(100, .25));