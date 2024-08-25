function func() {
  let outer = 0;
  return function () {
    console.log(outer);
  };
}

let res = func();

// let res = function () {
//   console.log(outer);
// };

res();