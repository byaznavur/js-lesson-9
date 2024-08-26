// let numbers = [10, 5, 7, 105, 30];

// `sort` metodi raqamlarni to'g'ri tartibda ko'rsatish uchun, comparator funksiyasini ishlatamiz
numbers.sort(function (a, b) {
  console.log(a, b); // Har bir taqqoslashda `a` va `b` qiymatlarini konsolga chiqaradi
  return a - b; // `a` va `b` ning farqiga qarab tartiblaydi (kichikdan kattaga)
});

// Qisqa yozilishi
numbers.sort((a, b) => a - b); // Kichikdan kattaga tartiblaydi

// Boshqa qisqa yozilish variantlari
numbers.sort((c, d) => c - d); // Kichikdan kattaga
numbers.sort((m, n) => m - n); // Kichikdan kattaga
numbers.sort((p, q) => p - q); // Kichikdan kattaga
numbers.sort((abdulaziz, azamat) => abdulaziz - azamat); // Kichikdan kattaga

// Teskari tartibda tartiblash
numbers.sort(function (a, b) {
  return b - a; // `b` va `a` ning farqiga qarab tartiblaydi (kattadan kichikka)
});

// Qisqa yozilishi
numbers.sort((a, b) => b - a); // Kattadan kichikka tartiblaydi

console.log(numbers); // Chiqish: [105, 30, 10, 7, 5]
let numbers = [10, 5, 7, 105, 30];

// `sort` metodi raqamlarni to'g'ri tartibda ko'rsatish uchun, comparator funksiyasini ishlatamiz
numbers.sort(function (a, b) {
  console.log(a, b); // Har bir taqqoslashda `a` va `b` qiymatlarini konsolga chiqaradi
  return a - b; // `a` va `b` ning farqiga qarab tartiblaydi (kichikdan kattaga)
});

// Qisqa yozilishi
numbers.sort((a, b) => a - b); // Kichikdan kattaga tartiblaydi

// Boshqa qisqa yozilish variantlari
numbers.sort((c, d) => c - d); // Kichikdan kattaga
numbers.sort((m, n) => m - n); // Kichikdan kattaga
numbers.sort((p, q) => p - q); // Kichikdan kattaga
numbers.sort((abdulaziz, azamat) => abdulaziz - azamat); // Kichikdan kattaga

// Teskari tartibda tartiblash
numbers.sort(function (a, b) {
  return b - a; // `b` va `a` ning farqiga qarab tartiblaydi (kattadan kichikka)
});

// Qisqa yozilishi
numbers.sort((a, b) => b - a); // Kattadan kichikka tartiblaydi

console.log(numbers); // Chiqish: [105, 30, 10, 7, 5]
