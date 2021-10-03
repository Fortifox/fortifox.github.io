// const arrOfPersons = [
//   {name: 'Alex', age: 30, family: [
//     {name: 'Vova', age: 29}, 
//     {name: 'Vova', age: 20},
//     {name: 'Vova', age: 30},
//   ]}, 
//   {name: 'Lera', age: 22, family: [
//     {name: 'Vova', age: 23}, 
//     {name: 'Vova', age: 11},
//   ]},
//   {name: 'Maks', age: 24, family: [
//     {name: 'Vova', age: 23}, 
//     {name: 'Vova', age: 34},
//     {name: 'Vova', age: 21},
//   ]}, 
//   {name: 'Roma', age: 28, family: [
//     {name: 'Vova', age: 45}, 
//     {name: 'Vova', age: 35},
//     {name: 'Vova', age: 45},
//     {name: 'Vova', age: 15},
//   ]}, 
// ];

// const result = [];

// arrOfPersons.forEach((item, index) => {
//   result.push({name: item.name, age: item.age})
//   let sum = 0;
//   item.family.forEach((el) => {
//     sum += el.age;
//   })
//   result[index].family = sum;
// });
// console.log(result);

const block = {
  heigth: 100,
  weigth: 300,
  color: {
    bg: 'black',
    text: 'red',
  },
};

console.log(Object.keys(block));