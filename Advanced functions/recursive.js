// function show() {
//   console.log("Hello");
//   return show();
// }

// show()

function faktorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * faktorial(n - 1);
}

let res = faktorial(5);

// 5 * faktorial(4)
// 5 * 4 * faktorial(3)
// 5 * 4 * 3 * faktorial(2)
// 5 * 4 * 3 * 2 * faktorial(1)
// 5 * 4 * 3 * 2 * 1

console.log(res);

// let res = faktorial(5);

// console.log(res);
