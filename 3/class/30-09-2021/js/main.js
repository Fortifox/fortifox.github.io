// const array = [];
// let k = 0;

// const arrPush = (num) => {
//   array.push(num);
//   k++
//   if (k === 10) {
//     return;
//   } else {
//     arrPush(k);
//   }
// };
// arrPush(k);
// console.log(array);

// const obj = {
//   name: 'Alex',
//   age: 30,
//   parantsNames: ['Rita', 'Vlad'],
//   status: true,
// };
// const person = {
//   name: 'Vlad',
//   surname: 'Gorenko',
//   age: 35,
// };
// person.age = obj.age;
// console.log(person.age);

const person = {
  name: 'Murat',
  surname: 'Hadir',
  age: 39,
  vacation: 'doctor',
  animal: {
    type: 'bird',
    name: 'Ktulkhu',
    age: 1.5,
  },
  car: {
    brand: 'Volvo',
    model: 'S80',
    typeGear: 'manual',
    price: '12000 $',
  },
};

const arrOfPersons = [
  {name: 'Vlad', age: 30},
  {name: 'Lera', age: 24},
  {name: 'Niko', age: 32},
  {name: 'Boris', age: 29},
  {name: 'Roma', age: 27},
  {name: 'Lena', age: 33},
];
// console.log(arrOfPersons[3].name);

// let sumAll = 0;
// for (let i = 0; i < arrOfPersons.length; i++) {
//   sumAll = sumAll + arrOfPersons[i].age;
// }

// arrOfPersons.forEach((item) => {
//   sumAll += item.age;
// });
// console.log(sumAll);

const sumOfAges = (array) => {
  let sumOfAge = 0;
  array.forEach((item) => {
    sumOfAge += item.age;
  });
};
sumOfAges(arrOfPersons)