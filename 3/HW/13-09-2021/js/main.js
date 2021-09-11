let a = 2;
let c = 4;
let d = 6;

let x = (d-a)/(c*2);
console.log(x);

let result = document.querySelector('.result');

result.innerHTML = (x);

// забор

let placeEL = 4;    // количество участков
let place = 400;    // площадь участка
let sideEl = 4;     // сторон в участке
let side = Math.sqrt(place);    // длина одной стороны участка
console.log(side);

let inSide = sideEl-1; // вычетание внетренних перегородок
console.log(inSide);

let summ = (placeEL*sideEl*side)-(inSide*side); // 260 метров
console.log(summ);

let zabor = document.querySelector('.zabor');

zabor.innerHTML = (summ);