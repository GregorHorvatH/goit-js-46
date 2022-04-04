'use strict';

console.log('module 5.1');

// const peter = {
//   name: 'Peter',
//   age: 20,
// };

// const bobby = {
//   name: 'Bobby',
//   age: 15,
// };

// const chris = {
//   name: 'Chris',
//   age: 25,
// };

// function sayHello(a = 0, b = 0) {
//   // console.log(this); // undefined - use strict
//   // console.log(this); // Window - NOT use strict
//   console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
//   console.log(a + b);
// }

// console.log(obj);

// peter.sayHello();
// bobby.sayHello();
// chris.sayHello(10, 1);

// sayHello.call(peter, 1, 10);
// sayHello.apply(bobby, [1, 20]);

// const bindedFunction = sayHello.bind(chris);
// const copy2 = bindedFunction;

// bindedFunction(30, 40);
// copy2(1, 1);

// ======== bind ========
// const bobby = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
//   },
// };

// const peter = {
//   name: 'Peter',
//   age: 20,
// };

// bobby.sayHello.call(peter);

// const newFunction = bobby.sayHello.bind(bobby);

// newFunction();

// setTimeout(bobby.sayHello.bind(peter), 2000);

// ====== this in arrow function ======
// const bobby = {
//   name: 'Bobby',
//   age: 15,

//   fn() {
//     const sayHello = () => {
//       console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
//     };

//     // sayHello();
//     setTimeout(sayHello, 2000);
//   },
// };

// bobby.fn();

// ======================================
// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.
// const chopShop = {
//   stones: [
//     { id: 1, name: 'Emerald', price: 1300, quantity: 4 },
//     { id: 2, name: 'Diamond', price: 2700, quantity: 3 },
//     { id: 3, name: 'Sapphire', price: 1400, quantity: 7 },
//     { id: 4, name: 'Ruby', price: 800, quantity: 2 }, // 1600
//     { id: 5, name: 'Ruby', price: 400, quantity: 21 }, // !1600
//   ],

//   calcTotalPrice(stoneId) {
//     const { price, quantity } = this.stones.find(({ id }) => id === stoneId);

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice(1)); // 5200
// console.log(chopShop.calcTotalPrice(2)); // 8100
// console.log(chopShop.calcTotalPrice(3)); // 9800
// console.log(chopShop.calcTotalPrice(4)); // 1600
// console.log(chopShop.calcTotalPrice(5)); // 1600

// ======================================
// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.table(phonebook.contacts);

// ======================================
// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 2);

// console.log('calculator:', calculator);
// console.log('sum:', calculator.add());
// console.log('mult:', calculator.mult());
