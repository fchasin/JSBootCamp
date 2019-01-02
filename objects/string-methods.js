let name = " Fred Chasin  ";

// length prop
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// includes method - 
let password = "password123";
console.log(password.includes("password")); // will return bool of true

// Trim method
console.log(name.trim()) // removes the whitespace before and after the string

// Challenge

let isValidPassword = (password) => {
    return (password.length >8 && !(password.includes("password")) )
}

let notValid = "hello";
let alsoNot = "longenoughbutpassword";
let valid = "thisisvalid";

// testing 
console.log(isValidPassword(notValid)); // false
console.log(isValidPassword(alsoNot)); // false
console.log(isValidPassword(valid)); // true