// const sqGroup = (qty,sideA,sideB) => qty*sideA*sideB;
// let sum = sqGroup(3,10,15)+sqGroup(4,20,20)+sqGroup(1,100,20);

// console.log(sum);

// let number = '';

// for(let i=7; i<100; i+=7) {
//     number = `${number} ${i}`
// }
// console.log(number);

// const (number) => (number % 2);
// let sum = 

// let sum = 0;
// let count = 0;
// for (let i = 7; i <= 100; i = i + 7) {
//     sum = sum + i ** 2;
//     count += 1;
// }
// console.log(count, sum);


const checkNum = (num, start, end) => {
    if (start < end) {
        let temp = end;
        end = start;
        start = end;
    }
    if (num > start && num < end) {
        return true;
    } else {
        return false
    }
};
console.log(checkNum(10, 3, 11));


// const arr = [];

// for (let i=0; i<arr; i++) {
//     arr1[i] = arr1[i] * 10;
//     arr.push(i);
// }

// console.log (arr);
// console.log (arr.length);


const arr = [];

for (let i = 0; i < 4; i++) {
    for (let k =0; k < 5; k++) {

    }
} 

console.log(arr);