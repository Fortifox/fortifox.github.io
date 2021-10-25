const btn = document.querySelector('.btn');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const field = document.querySelector('.field');
console.log(btn, timer, score, field);

// let div = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let inside = document.createElement('box');
  inside.className = 'box';
  field.appendChild(inside);
};
// field.innerHTML = inside;

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btn.addEventListener('click', () => {
  // const insideField = document.querySelectorAll('.field');
  const insideField = document.querySelectorAll('.box');
  console.log(insideField);

  numberBox = randomInteger(0,insideField.length);
  console.log(numberBox);
  insideField[numberBox].classList.add('blue');
});