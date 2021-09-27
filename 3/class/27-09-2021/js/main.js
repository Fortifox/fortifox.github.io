// const randomArray = ['dsa', 'fgs', 'kjfj', 'ncu', 'xiq', 'ppg'];

// for (let i = 0; i < randomArray.length; i++) {
//   console.log(randomArray[i]);
//   console.log(i);
// }
// randomArray.forEach((item, index) => {
//   console.log('item>>', item);
//   console.log('index', index);
// })

// const a = 10;
// const b = a;
// const z = b + 5;
// console.log('a', a);
// console.log('b', b);
// console.log('z', z);

// const arr = [13, 3, 71, 95];
// console.log(arr);
// const newArr = arr;
// arr[1] = 666;
// console.log(arr);
// console.log(newArr);

// if (arr == newArr) {
//   console.log('no');
// }

// const arr = [13, 3, 71, 95];
// const newArr = [];
// arr.forEach((item) => {
//   newArr.push(item)
// });
// newArr[1] = 777;
// console.log(arr);
// console.log(newArr);

const arr = [13, 3, 71, 95];
const newArr = Array.from(arr);

// newArr[1] = 777;
console.log(arr);
console.log(newArr);