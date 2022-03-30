console.log('module 4.2');

// allFriends.filter((friend, index) =>
//   allFriends.indexOf(friend) === index); // (без параметра array)

// allFriends.filter((friend, index, array) => {
//   allFriends[index] === 5;

//   console.log(allFriends[index]); // new
//   console.log(array[index]); // old
// })

// ===== question ======
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція вернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ==== question =====
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, idx, arr) => {
//   numbers[idx] = item * 2;

//   console.log(numbers[idx]);
//   console.log(arr[idx]);
// });

// ====== map ======
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

console.log(students.map((obj) => obj.name));
console.log(
  students.map((obj) => ({
    ...obj,
    score: obj.score + 100,
    id: 1,
  })),
);
