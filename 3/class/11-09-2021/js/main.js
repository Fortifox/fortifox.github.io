// переменные и константы
// let x =10;
// x = 50;
// x = 20;
// console.log(x);
// x = 799;
// console.log(x);
// const y = 777;
// console.log(y);

let x = 10;
let y = x + 50;
console.log('sum', y);

x= 15;
y = x - 5;
console.log('min', y);

x = 5;
y = x * 5;
console.log('total', y);

x = 100;
y = x / 2;
console.log('total2', y);
// деление по модулю
x = 5;
y = 2;
let z = x % y;
console.log('modul', z);
// степень
x = 2;
let n = 3;
let r = x ** n;
console.log('step', r);

let q = 10;
let w = 5;
let e = 2;
let t = 4;
let u = 5;
let result = q+w*e-t*u;
console.log('result', result);

// инкремент

x = 1;
y = ++x; // пресуфиксальный
console.log(y);

x = 1;
y = --x; // пресуфиксальный
console.log(y);

let l = 5;
l = l + 5; // 10
l += 5; // 10 присвоение и сложение

l = 5;
l = 1 - 5; // 0
l -= 5; // 0 присвоение и вычитание

l = 5;
l = l * 5; // 25
l *= 5; // 25 присвоение и умножение

k = 4;
// k = k ** 2;
k **= 2;
console.log(k)

k = 4;
// k = k / 2;
k /= 2;
console.log(k)