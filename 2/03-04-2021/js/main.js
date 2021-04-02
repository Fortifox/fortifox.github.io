let elOn = document.querySelector('.on');
let elOff = document.querySelector('.off');
let elWindow = document.querySelector('.hiden');
console.log(elOn, elOff, elWindow);

elOn.addEventListener('click', (ev) => {
  elWindow.classList.remove('hiden');
  elWindow.classList.add('warning');
});

elOff.addEventListener('click', (ev) => {
  elWindow.classList.remove('warning');
  elWindow.classList.add('hiden')
});