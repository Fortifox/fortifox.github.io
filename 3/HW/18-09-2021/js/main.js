let numbers = '';

// for (let i = 2; i <= 14; i+=2) {
//   numbers = (`${numbers} ${i}`)
// };
// for (let i = 33; i <= 45; i+=2) {
//   numbers = (`${numbers} ${i}`)
// }
// console.log(numbers);

function findNum(a1, a2, a3) {
  for (let i=a1; i<=a2; i+=a3) {
    numbers = (`${numbers} ${i}`)
  }
};
findNum(2, 14, 2);
findNum(33, 45, 2);
console.log(numbers);