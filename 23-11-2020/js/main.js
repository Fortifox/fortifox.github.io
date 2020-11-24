let a = null;
let b = null;
let c = null;
let x = null;
let D = null;
let otvet = '';
let mainElem = '';

a = enterValue('a', a);
b = enterValue('b', b);
c = enterValue('c', c);
D = Math.pow(b,2)-4*a*c;
let someElem = document.querySelector('.main');

if(D < 0) {
  otvet = '<div>Данные:</div><div>a = ' + a + '</div><div>b = ' + b + '</div><div>c = ' + c + '</div><div></div><div>' + a + 'x^2 + ' + b + 'x + ' + c +',</div><div> D = ' + D + '</div><div>Нет корней</div>';
  someElem.innerHTML = otvet;
}
else if(D === 0) {
  x = (b*-1)/(2*a);
  otvet = '<div>Данные:</div><div>a = ' + a + '</div><div>b = ' + b + '</div><div>c = ' + c + '</div><div></div><div>' + a + 'x^2 + ' + b + 'x + ' + c +',</div><div>Дискриминант</div><div>D = ' + D + '</div><div>Один корень</div><div>x = ' + x + '.</div>';
  someElem.innerHTML = otvet;
}
else {
  x1 = Math.round((((b*-1) + Math.sqrt(D)) / (2*a))*2) /2;
  x2 = Math.round((((b*-1) - Math.sqrt(D)) / (2*a))*2) /2;
  otvet = '<div>Данные:</div><div>a = ' + a + '</div><div>b = ' + b + '</div><div>c = ' + c + '</div><div></div><div>' + a + 'x^2 + ' + b + 'x + ' + c +',</div><div>Дискриминант</div><div>D = ' + D + '</div><div>Два корня</div><div>x1 = ' + x1 + ',</div><div>x2 = ' + x2 + '.</div>';
  someElem.innerHTML = otvet;
}
function enterValue(name, value) {
  do {
    value = Number(prompt('Значение ' + name + ' :', ''));
    console.log('typeof(' + name + ')=', typeof(value));
    console.log(name + '=', value);
  } while(isNaN(value));
  return value;
}