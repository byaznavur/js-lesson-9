let numbers = [10, 5, 7, 105, 30];

// let doubleNumbers = numbers.map((el, i, arr) => {
//   return el * 2;
// });

// let doubleNumbers = numbers.map((el) => el * 2);

// let newNumbers = numbers.map((el) => {
//   if (el % 2 === 0) {
//     return el / 2
//   } else {
//     return el * 2
//   }
// })

// let newNumbers = numbers.map((el) => (el % 2 ? el * 2 : el / 2));

// console.log(newNumbers);

let students = [
  { name: "Murodjon", age: 30 },
  { name: "Yulduz", age: 25 },
  { name: "Husan", age: 15 },
  { name: "Ismoil", age: 10 },
  { name: "Husan", age: 40 },
];

// let newStudents = students.map((el) => {
//   if (el.age >= 20) {
//     el.isPuberty = true;
//   } else {
//     el.isPuberty = false;
//   }
//   return el;
// });

let newStudents = students.map((el) => {
  el.isPuberty = el.age >= 20;
  return el;
});

console.log(newStudents);
