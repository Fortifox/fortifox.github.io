// const num = 9;
// const str = 'JavaScript';

// const boolTrue = true;
// const boolFalse = false;

// const und = undefined;

// const nul = null;

// const bigNum = 654641351611516;

// const sym = Symbol('test');

// const obj = {
//     name: 'Alex'
// };

// let x
// console.log(num);
// console.log(str);
// console.log(typeof(num));
// console.log(typeof(str));


// let strJS = 'JavaScript';
// let strLove = 'I love';

// let result = strLove + strJS;
// console.log(result);

// let answer = prompt('Кто виноват и что делать', '');
// let str = 'Все дело в ...';
// let result = `${str} => ${answer}`; // интраполяция
// alert(result);

// let result = 20 + '10'; // 2010
// result = 20 - '10'; // 10
// result = '20' - 10; // 10
// result = '20' +10; // 2010

// let str = '123';
// let result = Number(str);
// alert(typeof(result));

// let str = 10;
// if (str > 10) {
//     alert (`Число ${str} больше 10`);
// } 

let a = prompt('Введите число A', '');
let c = prompt('Введите число C', '');
let d = prompt('Введите число D', '');

let x = (d-a)/(c*2);
let result = `X = ${x}`;

if (x > 0) {
    alert(`X со знаком + и равен ${x}`);
} else if (x < 0) {
    alert(`X со знаком - и равен ${x}`);
} else {
    alert(`wasted X равен ${x}`);
}
alert(result);