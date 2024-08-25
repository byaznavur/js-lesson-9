let numbers = [10, 5, 7, 105, 30];

// numbers.forEach(function (el, i, arr) {
//   console.log(el, i, arr);
// })

let sum = 0;

let res = numbers.forEach((el, i, arr) => {
  // console.log(el, i, arr);
  sum += el;
});

// console.log("Sum", sum);

// console.log("Res", res);

let students = [
  { name: "Murodjon", age: 30 },
  { name: "Yulduz", age: 25 },
  { name: "Husan", age: 15 },
  { name: "Ismoil", age: 10 },
  { name: "Husan", age: 40 },
];

let sumAge = 0;

students.forEach((el) => {
  sumAge += el.age;
});

// console.log(sumAge);
