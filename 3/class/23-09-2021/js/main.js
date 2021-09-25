// const arr = [1, 6, 3, 88, 23, -11];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr);
// }

// arr.forEach(element => {
//   console.log(element);
// })

// arr.push(12);
// // let lastElem = arr.pop();
// console.log(arr);

// const arr1 = [56, 6, 3, 88, 23, -11];
// let e = arr1[2];
// let r = arr1[3];
// arr1.push(e, r);
// console.log(arr1);

// const arr2 = [56, 6, 3, 88, 23, -11];
// arr2.shift();
// arr2.shift();
// console.log(arr2);

// const arr3 = [56, 6, 3, 88, 23, -11];
// arr3.unshift(23);
// console.log(arr3);

// const arr4 = [56, 6, 3, 88, 23, -11];
// let a = arr4[4];
// let b = arr4[5];
// arr4.pop();
// arr4.pop();
// arr4.unshift(a, b);
// console.log(arr4);

// const arr = [56, 6, 3, 88, 23, -11];

// const calcElement = (param) => { // параметры или аргументы
//   let elem = arr[param] * 2;
//   console.log(elem);
// }
// console.log(calcElement);
// // let elem2 = arr[1] * 2;
// // console.log(elem2);
// // let elem5 = arr[4] * 2;
// // console.log(elem5);
// // let elem3 = arr[2] * 2;
// // console.log(elem3);

// calcElement(1)
// calcElement(4)
// calcElement(2)

const arr = [56, 6, 3, 88, 23, -11];

const changeSign = (arrIndex) => {
  let elem1 = arr[arrIndex] - arr[arrIndex]*2;
  console.log(elem1);
};

changeSign(0)
changeSign(1)
changeSign(2)
changeSign(3)
changeSign(4)
changeSign(5)