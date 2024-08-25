let numbers = [10, 5, 7, 105, 30];

// let check = numbers.every((el) => el > 0);
// let check = numbers.every((el) => el % 2 === 0);

// console.log(check);

let students = [
  { name: "Murodjon", age: 30 },
  { name: "Yulduz", age: 25 },
  { name: "Husan", age: 15 },
  { name: "Ismoil", age: 10 },
  { name: "Husan", age: 40 },
];

// let check = students.every((el) => el.age >= 20);
// let check = students.every((el) => el.age >= 5);

let check = students.every((el) => el.name[0] === el.name[0].toUpperCase());

console.log(check);
