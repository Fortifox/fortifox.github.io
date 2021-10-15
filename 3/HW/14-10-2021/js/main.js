const btnUp = document.querySelector('.up');
console.log(btnUp);
const btnDown = document.querySelector('.down');
console.log(btnDown);
const btnLeft = document.querySelector('.left');
console.log(btnLeft);
const btnRight = document.querySelector('.right');
console.log(btnRight);
const square = document.querySelector('.square');

// параметры кнопки вверх
btnUp.addEventListener('mousedown', () => {
  square.classList.add('move-up');
});
btnUp.addEventListener('mouseup', () => {
  square.classList.remove('move-up');
});

// параметры кнопки вниз
btnDown.addEventListener('mousedown', () => {
  square.classList.add('move-down');
});
btnDown.addEventListener('mouseup', () => {
  square.classList.remove('move-down');
});

// параметры кнопки влево
btnLeft.addEventListener('mousedown', () => {
  square.classList.add('move-left');
});
btnLeft.addEventListener('mouseup', () => {
  square.classList.remove('move-left');
});

// параметры кнопки вправо
btnRight.addEventListener('mousedown', () => {
  square.classList.add('move-right');
});
btnRight.addEventListener('mouseup', () => {
  square.classList.remove('move-right');
});

// параметры для клавиатуры
const handleKeysDown = (event) => {
  console.log(`Кнопка ${event.key} Код ${event.keyCode}`);
  const {top, left} = square.getBoundingClientRect();
  if (event.keyCode === 38) {
    square.style.top = `${top}px`;
    square.classList.add('move-up');
  }
  if (event.keyCode === 37) {
    square.style.left = `${left}px`;
    square.classList.add('move-left');
  }
  if (event.keyCode === 40) {
    square.classList.add('move-down');
  }
  if (event.keyCode === 39) {
    square.classList.add('move-right');
  }
  if (event.keyCode === 32) {
    square.classList.add('change-size');
  }
  
};
document.addEventListener('keydown', handleKeysDown);

const handleKeysUp = (event) => {
  console.log(`Кнопка ${event.key} Код ${event.keyCode}`);
  if (event.keyCode === 38) {
    square.classList.remove('move-up');
  }
  if (event.keyCode === 37) {
    square.classList.remove('move-left');
  }
  if (event.keyCode === 40) {
    square.classList.remove('move-down');
  }
  if (event.keyCode === 39) {
    square.classList.remove('move-right');
  } 
  if (event.keyCode === 32) {
    const {width, height} = box.getBoundingClientRect();
    square.style.width = `${width}px`;
    square.style.height = `${height}px`;

    console.log(width, height);
    console.log(square.getBoundingClientRect());
    square.classList.remove('change-size');
  }

};
document.addEventListener('keyup', handleKeysUp);