// Prototypal inheritance

//es6 syntactical sugar for cosntructors
//have to set constructor in es6 stuyle, not in es5, consttrucotr: function() style
//no commas in between methods
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;

    this.likes.forEach(like => {
      bio = bio + `${this.firstName} likes ${like}`;
    });

    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(' '); // split the name on a space
    this.firstName = names[0];
    this.lastName = names[1];
  }
}
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing';
    return `${this.name} is ${this.status}`;
  }
  updateGrade(points) {
    this.grade += points;
  }
}

const newPerson = new Person('Fred', 'Chasin', 24);
// ES5 Classification
// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// };

// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}`;

//   // this works here to bind to getBio because arrow functions don't bind at call site, they bind at parent function
//   this.likes.forEach(like => {
//     bio = bio + `${this.firstName} likes ${like}`;
//   });
//   return bio;
// };

// Person.prototype.setName = function(fullName) {
//   const names = fullName.split(' '); // split the name on a space
//   this.firstName = names[0];
//   this.lastName = names[1];
// };

// const me = new Person('Fred');

// const person2 = new Person('Bob', 'Mortimer', 24);

// '11234'.split(''); // this splits between each character, giving an array with each character as a n element
