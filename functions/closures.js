// creating private variables thru closure
const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder
const createAdder = a => {
  return b => {
    return a + b;
  };
};
const add10 = createAdder(10);
const add20 = createAdder(20);

// create tipper
const createTipper = tip => {
  return bill => {
    return bill * tip;
  };
};

const twenty = createTipper(0.2);
const twentyFive = createTipper(0.25);

console.log(twenty(100));
