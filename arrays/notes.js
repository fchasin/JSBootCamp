const notes = [{
    title: 'My first trip',
    body: 'I would like to go to spain'
}, {
    title: 'Things i need to do',
    body: 'Work out'
}, {
    title: 'Office mod',
    body: 'get a new chair'
}];

// find method
const findNote = function (notes, noteTitle) {
    return notes.find( function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const findNotes = function(notes, query) {
    return notes.filter( function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch
    })
}

// will modify whatever we're calling it on
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        // a should come first
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else return 0
    })
}

sortNotes(notes);
console.log(notes)

// console.log(findNotes(notes, "first"));

// const note = findNote(notes, "Office mod");
// console.log(note);






















// findIndex()
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex( function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index];
// }

// console.log(notes);
// console.log(notes[notes.length - 1]);

// // findIndex works with arrays of objects, calls a func for each of the elements in array
//     // returns index for the first found, else returns -1
// const index = notes.findIndex(function(note) {
//     return note.title === 'My first trip'
// })

// console.log(index);







// // push/pop
// notes.push('my new note');
// console.log(notes);
// let dropped = notes.pop();

// //shift/unshift
// console.log(notes.shift()); // prints Note 1
// notes.unshift('new first')


// // splice + destructuring
// let args = [1, 2, 3]
// notes.splice(1, 1, ...args);




// // indexOf method
// console.log(notes.indexOf('Note 2') ); // will return the position of the first item in the array, or -1 if isn't in the array

// // comparing two objects
// console.log({} === {}); // will print false

// // comapring the same objects
// let someObject = {};
// let otherObject = someObject;
// console.log(someObject === otherObject);