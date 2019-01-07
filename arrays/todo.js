// const todos = [
//     "go to sleep",
//     "eat food",
//     "write a letter of rec for emma",
//     "take my motorcycle test",
//     "find a new place to live",
//     "meditate once a day"
// ]

// // delete the third item
// todos.splice(2, 0);

// // add new item to the end of the list
// todos.push("run and work out");

// // remove the first item from the list
// todos.shift();

// // foreach method
// todos.forEach(function (item, index) {
//     console.log(`${index+1}. ${item}`)
// })

// // for statement
// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count+1}. ${todos[count]}`)
// }

// console.log(`You have ${todos.length} things to do`);

// convert array to array of objects
const todoList = [
    {
        text: "go to sleep",
        completed: true
    }, {
        text: "eat",
        completed: true
    }, {
        text: "write a letter of rec",
        completed: true
    }, {
        text: "take moto test",
        completed: false
    }, {
        text: "find new place to live",
        completed: true
    }, {
        text: "meditate once a day",
        completed: false
    }
]

const removeTodo = (todoList, titleToMatch) => {
    const indexOfFound = todoList.indexOf( (note) => {
        return note.text.toLowerCase() === titleToMatch.toLowerCase();
    })
    if (indexOfFound > -1) {
        return todoList.splice(indexOfFound, 1);
    } else return -1
}

const toBeCompleted = todoList => {
    return todoList.filter( todo => {
        return !todo.completed
    })
}

const sortTodos = todoList => {
    todoList.sort( (a, b) => {
        // if a is complete and b is not, put b at the top
        if (a.completed && !b.completed) {
            return 1
        } else if (!a.completed && b.completed) {
            return -1
        } else return 0
    })
}

console.log(todoList)
sortTodos(todoList);
console.log(todoList)

// console.log(removeTodo(todoList, "Meditate once a day"));
// console.log(todoList);