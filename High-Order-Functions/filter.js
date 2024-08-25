let numbers = [10, 5, 7, 105, 30];

// let newNumbers = numbers.filter((el, i, arr) => {
//   if (el >= 10) {
//     return true;
//   } else {
//     return false;
//   }
// });

// let newNumbers = numbers.filter((el) => el >= 10);

// console.log(newNumbers);

let oddNumbers = numbers.filter((el) => el % 2);

// console.log(oddNumbers);

let evenNumbers = numbers.filter((el) => !(el % 2));

// console.log(evenNumbers);

let students = [
  { name: "Murodjon", age: 30 },
  { name: "Yulduz", age: 25 },
  { name: "Husan", age: 15 },
  { name: "Ismoil", age: 10 },
  { name: "Husan", age: 40 },
];

let newStudents = students.filter((el) => el.age >= 25);

// console.log(newStudents);
