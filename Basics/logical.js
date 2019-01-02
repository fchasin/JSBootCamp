let temp = 65;

if (temp <= 65 && temp >= 32) {
    console.log("not too balmy...")
}

let isGuestOneVegan = true;
let isGuestTwoVegan =true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("offer only vegan")
} else if (isGuestOneVegan || isGuestOneVegan) {
    console.log("offer vegan options");
} else {
    console.log("offer anything on menu")
}