// const arr = [56, 6, 3, 88, 23, -11];
// console.log(arr);

// const changeSign = (arrIndex1, arrIndex2) => {
//   let elem = arr[arrIndex1];
//   arr[arrIndex1] = arr[arrIndex2];
//   arr[arrIndex2] = elem;

//   console.log(arr);
// };

// const shiftElement = (i, ahead) => {
//   const leftEdge = 0;
//   const rightEdge = arr.length - 1;
//   const leftIndex = i-1;
//   const rightIndex = i+1;

//   if (ahead === 'left' && !(leftIndex < leftEdge)) {
//     changeSign(i, leftIndex);
//   }
//   if (ahead === 'right' && !(rightIndex < rightEdge)) {
//     changeSign(i, rightIndex);
//   }
// }
// shiftElement(1, 'left');

// const calc = (num) => {
//   let temp = 2 + num * 2;
//   return temp;
// };

// let a = 2+3*2;
// let b = calc(4);
// let c = calc(77);
// let d = calc(calc(2));

// console.log(a, b, c, d);

// const calc = (a, b) => {
//   let temp = (a/100*b)*3;
//   return temp;
// };

// let percent = calc(1000, 2.5);
// console.log(percent);

// const discr = (a, b, c) => {
//   let D = Math.pow(b, 2)-4*a*c
//   return D;
// };

// const kvUravn = (a, b, c) => {
//   const d = discr(a, b, c);
//   let x1;
//   let x2;
//   // 
//   if (d > 0) {
//     //
//     x1 = (((b*-1) + Math.sqrt(D)) / (2*a));
//     x2 = (((b*-1) - Math.sqrt(D)) / (2*a));
//   } else if (d === 0 ) {
//     //
//     x1 = (b*-1)/(2*a);
//     x2 = x1;
//   } else {
//     return null;
//   };
//   return [x1, x2];
// }

// console.log(kvUravn(12, 56, -10));

const arrArr = [
  [1, 5 ,6], 
  [4, 6, 7],
  [9, 6, 3,],
  [3, 7, 4 ,2 ,6],
  [3, 55]
];
const outArr = [];

arrArr.forEach(elArr => {
  elArr.forEach(el => {
    outArr.push(el);
  })
});

// console.log(outArr);

// const arrArr1 = [1, 5 ,6];
// let a = 0;
// let b = 0;
// arrArr1.push(a, b);
// console.log(arrArr1);

const arrArr1 = [1, 5];
for (let i = 0; i < 5; i++) {
  if (arrArr1[i] > 0) {
  } else {
    arrArr1.push(0)
  }
}
console.log(arrArr1);
