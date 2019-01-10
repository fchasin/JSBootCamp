const squareLong = num => {
  return num * num;
};

const square = num => num * num;

console.log(square(5));

const people = [
  {
    name: 'FileReader',
    age: 26,
  },
  {
    name: 'Bill',
    age: 24,
  },
];

const under30 = people.filter(person => person.age < 30);
console.log(under30);

const find26 = people.find(person => person.age === 26);
console.log(find26);
