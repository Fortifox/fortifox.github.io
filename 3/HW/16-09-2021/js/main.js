// задача №1
let num1 = prompt('Укажите первое число');
let num2 = prompt('Укажите второе число');
const result = (num1-num2);

if (result > 0) {
  alert(`Значение больше нуля и равно ${result}`);
} 
else if (result < 0) {
  alert(`Значение меньше нуля и равно ${result}`);
} 
else {
  alert(`Значение равно ${result}`);
}

// задача №2
let money = prompt('Введите сумму вклада на 6 месяцев');
let percent = prompt('Ведите годовой процент');

let result = (money/100*percent)/2;
alert(`Полученный доход по депозитному вкладу на 6 ме. составит ${result}`);


// задача №4
let placeEL = prompt('Задайте количество участков');    // количество участков
let place = prompt('Задайте площадь участка');    // площадь участка
let sideEl = 4;     // сторон в участке
let side = Math.sqrt(place);    // длина одной стороны участка
console.log(side);

let inSide = sideEl-1; // вычетание внетренних перегородок
console.log(inSide);

let summ = (placeEL*sideEl*side)-(inSide*side);
alert(`Длина забора составит ${summ}`);