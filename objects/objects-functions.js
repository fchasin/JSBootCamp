let myBook = {
    title: "1984",
    author: "Orwell",
    pageCount: 386
}

let anotherBook = {
    title: "Bros Karamazov",
    author: "Dostoyevsky"
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

// Challenge Area
let tempConverter = (farenheit) => {
    return {
        celcius: ( (farenheit - 32) * (5/9) ),
        kelvin: ( ( (farenheit - 32) * (5/9) ) + 273.15)
    }
}

console.log(tempConverter(32).celcius + " degrees C")
console.log( `${tempConverter(32).kelvin} degrees K`)