const add = function(a, b) {
  console.log(arguments);
};

add(11, 22, 33, 44);

// this will work because 'this 'binds
const car = {
  color: 'Red',
  getSummary: function() {
    return `the car is ${this.color}`;
  },
};

// this will not work because 'this' does NOT bind
const anotherCar = {
  color: 'Red',
  getSummary: () => {
    return `the car is ${this.color}`;
  },
};

// this will work
const oneMoreCar = {
  color: 'Red',
  getSummary() {
    return `th ecar is ${this.color}`;
  },
};
