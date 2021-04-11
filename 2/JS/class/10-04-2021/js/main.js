const elOn = document.querySelector('.on');
const elOpen = document.querySelector('.open');
const elRes = document.querySelector('.res');

let onAlarm = false;
let doorOpen = false;

let isAlarm = false;

const detect = () => {
  if (onAlarm && doorOpen === true) {
    elRes.innerHTML = 'тревога - сигн. выкл + дв. открыта';
  } 
  else if ((onAlarm === true) && (doorOpen  === false)) {
    elRes.innerHTML = 'сигн. выкл.';
  } 
  else if (onAlarm  === false && (doorOpen === true || doorOpen === false)) {
    elRes.innerHTML = 'все ок - сигн. вкл + дв. закрыта';
  }
};
console.log(onAlarm)


elOn.addEventListener('click', (ev) => {
  onAlarm = !onAlarm;

  if(onAlarm) {
    elOn.classList.add('red');
    elOn.classList.remove('green');
    elOn.innerHTML = 'Выкл';
  } 
  else {
    elOn.classList.add('green');
    elOn.classList.remove('red');
    elOn.innerHTML = 'Вкл';
  }
  detect();
});

elOpen.addEventListener('click', (ev) => {
  doorOpen = !doorOpen;

  if(doorOpen) {
    elOpen.classList.add('red');
    elOpen.classList.remove('green');
    elOpen.innerHTML = 'Открыто';
  } 
  else {
    elOpen.classList.add('green');
    elOpen.classList.remove('red');
    elOpen.innerHTML = 'Закрыто';
  }
  detect();
});