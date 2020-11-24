// let perem = null;
// let str = '';
// let str2 = '';
// let strOut = '';
// let a = 5;
// let b = 4;

// peram = a + b;

// str = String(a);
// str2 = 'qwerty';
// str = Number(str);
// str2 = Number(str2);

// strOut = `${str} ksksks ${str2}`;

// // strOut = '<div class="su">hi</div><div>day</div>'

// let secondEl = document.querySelector('.second');
// secondEl.innerHTML = strOut;

// // console.log(secondEl);

// // console.log(perem)
// console.log(str2)
// // console.dir(document);


// let summ = null;
// let a = 1;
// let b = 2;
// let c = 4;
// let d = 7;
// let e = 12;
// let f = 8;
// let g = 3;

// summ = (a/d)+(b/d)+(c/d)-e-(f*g);
// console.log(summ);
// let testEl = document.querySelector('.test');
// testEl.innerHTML = summ;

// 'sdf' //строка
// true false // булевые типы
// a = (5 > 5) //false
// null //пустое значение
// undefined //значение не определено
// NaN //не Номер
// Infinity // бесконечность

let mainEl = document.querySelector('.main');
let a = 94;
if (a < 0) {
  mainEl.innerHTML = 'а меньше нуля';
} 
else if (a === 0) {
  mainEl.innerHTML = 'а равно нулю';
}
else if (a < 100) {
  mainEl.innerHTML = 'а меньше ста';
} 