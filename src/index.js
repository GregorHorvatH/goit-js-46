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
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.log(students.map((obj) => obj.name));
// console.log(
//   students.map((obj) => ({
//     ...obj,
//     score: obj.score + 100,
//   })),
// );

// ===== filter as remove ======
// const arr = ['физика', 'информатика', 'математика', 'биология'];
// const newArr1 = arr.filter((item) => item !== 'биология');
// const newArr2 = newArr1.filter((item) => item !== 'физика');

// console.log(arr);
// console.log(newArr1);
// console.log(newArr2);

// ====== every ====
// const numbers = [1, -2, 3]; // every > 0

// if (numbers[0] > 0 && numbers[1] > 0 && numbers[2] > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ====== some ====
// const numbers = [1, -2, 3]; // every > 0

// if (numbers[0] > 0 || numbers[1] > 0 || numbers[2] > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ===== reduce =====
// const numbers = [1, 4, 4, 3, 3, 3, 3, 3];

// // let sum = 0;

// // for (const number of numbers) {
// //   sum += number;
// // }

// const sum = numbers.reduce((acc, item) => acc + item);

// console.log(sum);

// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// const sum = users.reduce((acc, item) => acc + item.age, 0);

// console.log(sum);

// ===== map vs reduce ======
// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// const userNames1 = users.map(({ name }) => name);
// const userNames2 = users.reduce((acc, { name }) => [...acc, name], []);

// console.log(userNames1);
// console.log(userNames2);

// ==== sort 1 ====
// const numbers = [3, 5, 10, 2, 4, 1];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);
// const sortedNumbers = [...numbers].sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;

//   return 0;
// });

// console.log(numbers);
// console.log(sortedNumbers);

// ==== sort 2 ====
// const fruits = ['orange', 'apple', 'ape', 'Orange'];
// const sortedFruits = [...fruits].sort((a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) return 1;
//   if (a.toLowerCase() < b.toLowerCase()) return -1;

//   return 0;
// });

// console.log(fruits);
// console.log(sortedFruits);

// ======= examples =======
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// ====================================
// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

// ====================================
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ====================================
// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ====================================
// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.
// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// ====================================
// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.
// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// ====================================
// Example 6 - Метод find
// const getCarByModel = (cars, carModel) =>
//   cars.find(({ model }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ====================================
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.
// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// const sortByDescendingAmount = (cars) =>
//   [...cars].sort((a, b) => b.amount - a.amount);

// console.table(sortByDescendingAmount(cars));

// ====================================
// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.
// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// ====================================
// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.
// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case 'asc':
//         return a.model.localeCompare(b.model);

//       case 'desc':
//         return b.model.localeCompare(a.model);

//       default:
//         return 0;
//     }
//   });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ====================================
// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).
// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// ====================================
// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.
// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

// ====================================
// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.
// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// ===== question =======
// const bookShelf1 = {
//   books: ['Kingdom 1'],
// };
// const bookShelf2 = {
//   books: ['Kingdom 2'],
// };
// const bookShelf3 = {
//   books: ['Kingdom 3'],
// };

// function getBooks() {
//   console.log(this.books);
// }

// getBooks.call(bookShelf1);
// getBooks.call(bookShelf2);
// getBooks.call(bookShelf3);

// ====== question - reduce =========
// const str = 'abrakadabra';
// // { a: 5, b: 2, r: 2, k: 1, d: 1 }

// const res = str.split('').reduce(
//   (acc, letter) => ({
//     ...acc,
//     [letter]: acc[letter] ? acc[letter] + 1 : 1,
//   }),
//   {},
// );

// console.log(res);

// const obj = {
//   a: 3,
//   b: 1,
// };

// const letter = 'b';
// const newObj = {
//   ...obj,
//   [letter]: obj[letter] + 10,
// };

// console.log(newObj);
