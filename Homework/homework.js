//! 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   let gradeStudent = students.map((student) => {
//     let gradeBall;

//     if (student.percent >= 85) {
//       gradeBall = 5;
//     } else if (student.percent >= 75 && student.percent <= 85) {
//       gradeBall = 4;
//     } else if (student.percent >= 65 && student.percent <= 70) {
//       gradeBall = 3;
//     } else {
//       gradeBall = null;
//     }

//     return { ...student, grade: gradeBall };
//   });

//   let filterGrade = gradeStudent.filter((student) => student.grade === grade);

//   return filterGrade.map((student) => student.name);
// }

// let res = getNamesByGrade(students, 4);
// console.log(res);

// Output

// const students = [
//   { name: "Quincy", percent: 96, grade: 5 },
//   { name: "Jason", percent: 84, grade: 4 },
//   { name: "Alexis", percent: 100, grade: 5 },
//   { name: "Sam", percent: 65, grade: 3 },
//   { name: "Katie", percent: 90, grade: 5 },
//   { name: "Anna", percent: 75, grade: 4 },
// ];

// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']
// !2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {
//     dog: 2,
//     chicken: 3,
//     cat: 1,
//     rabbit: 1
//  }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// let res = animals.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el]++;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});

// console.log(res);

//! 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// let arr = [1, 2, 3, 4, 5];

// let res = arr.map((el) => {
//   return el * el;
// });

// console.log(res);

//! 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)

// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42
// let num = [1, -4, 12, 0, -3, 29, -150];
// let filterNum = num.filter((el) => el > 0);

// let res = filterNum.reduce((acc, el) => (acc += el), 0);
// console.log(res);

//! 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'
// let str = "George Raymond Richard Martin";
// let splitStr = str.split(" ");

// let mapStr = splitStr.map((el) => {
//   return el[0];
// });

// console.log(mapStr.join(""));
//! 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54
// let arr = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// arr.sort((a, b) => a.age - b.age);

// console.log(arr[arr.length - 1].age - arr[0].age);

//! 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)
// let arr = [1, 4, 9, 16, 25];

// let oddNum = arr.filter((a) => a % 2);
// let evenNum = arr.filter((a) => !(a % 2));

// console.log(oddNum, evenNum);

//! 8.  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

let uniqueAnimals = animals.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }

  return acc;
}, []);

console.log(uniqueAnimals);

//! 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// products.sort((a, b) => a.id - b.id);
// products.sort((a, b) => a.name - b.name);
// products.sort((a, b) => a.price - b.price);
// products.sort((a, b) => a.rating - b.rating);
// products.sort((a, b) => a.discount - b.discount);

// console.log(products);
//! 10. Rating bo'yicha eng kuchli product topilsin. (sort)
// products.sort((a, b) => b.rating - a.rating);
// console.log(products[0].rating);
//! 11. Narxi eng past bo'lgan product topilsin. (sort)
// products.sort((a, b) => b.price - a.price);
// console.log(products[products.length - 1].rating);
//! 12. Barcha products narxlari yig'indisi topilsin. (reduce)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sumProdact = products.reduce((acc, product) => (acc += product.price), 0);

// console.log(sumProdact);

//! 13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let nameProdact = products.map((product) => {
//   return product.name;
// });

// console.log(nameProdact);

//! 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let findProduct = products.find((el) => el.id === 5);

// console.log(findProduct);

//! 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let deleteProdunt = products.filter((product) => product.id !== 4);
// console.log(deleteProdunt);

//! 16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)
// let checkString = "AzizbekAbduhakimov"; // Faqat harflardan iborat
// let checkString = "Azizbek Abduhakimov 12312"; // Boshqa belgilar yoki raqamlar mavjud bo'lgan satr

// let splitString = checkString.split("");

// let everyString = splitString.every((el) => {
//   let charCode = el.charCodeAt(0); // Belgining ASCII qiymatini oladi
//   return (
//     (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
//   );
// });

// console.log(everyString); // Natija: true yoki false

// let checkString = "AzizbekAbduhakimov"; // Harflardan iborat satr
// // let checkString = "Azizbek Abduhakimov 12312"; // Boshqa belgilar yoki raqamlar bor satr uchun

// let splitString = checkString.split("");

// let everyString = splitString.every((el) => {
//   return /^[a-zA-Z]$/.test(el); // faqat harflarni tekshiradi
// });

// console.log(everyString); // Natija: true yoki false

//! 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input:let arr =  [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}
// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//   let truthyEl = arr.filter((el) => Boolean(el));
//   let falsyEl = arr.filter((el) => !Boolean(el));

//   return {
//     truthy: truthyEl,
//     falsy: falsyEl,
//   };
// }

// let res = getTruthyFalsy(arr);

// console.log(res);

//! 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]
// let str = "Men Abdulaziz Programmerman";
// let splitStr = str.split(" ");

// let res = splitStr.map((a) => {
//   return a.length;
// });

// console.log(res);

//! 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
// Input:let str =  "Men Abdulaziz Programmerman"
// Output: true
// let str = "Men Abdulaziz Programmerman";

// let splitStr = str.split("");
// console.log(splitStr);

// let res = splitStr.some((a) => a === " ");

// console.log(res);

//! 20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join)

// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
// let obj = { a: 2, b: 5, c: 7 };

// let objArr = Object.entries(obj);

// let res = objArr.map((a) => {
//   return a.join("");
// });

// console.log(res);

//! 21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum() funksiya yozing. (rekursiv funksiya)
// function digitSum(n) {
//   // Bazaviy holat: Agar son 0 bo'lsa, 0 ni qaytaradi.
//   if (n === 0) {
//     return 0;
//   }
//   // Rekursiv chaqiruv: oxirgi raqamni oladi va qolgan qismini qayta chaqiradi.

//   console.log((n % 10) + "Qoldiq");
//   console.log(digitSum(Math.floor(n / 10)) + " 10ga bo'lish");

//   return (n % 10) + digitSum(Math.floor(n / 10));
// }

// console.log(digitSum(12345)); // Natija: 15

//! 22. Quyidagi pupils massividagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping. (reduce)
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let sum = 0;
// let middleProtcent = pupils.reduce((acc, el) => {
//   if (el.protcent) {
//     sum++;
//   }

//   return (acc += el.protcent);
// }, 0);

// console.log(middleProtcent / sum);

// Pupils massividagi ojectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring. (map)

//! 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)
const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

//! 24. isPassed propertyga protcent 70 dan o'tsa true, aks holda false qiymat o'zlashtirilsin. (map)

//! 25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce)

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
