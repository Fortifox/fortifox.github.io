const field = document.querySelector('.body__inner_field');
const ball = document.querySelector('.body__inner_field-ball');
const btn = document.querySelector('.body__inner_menu-btn');
const result = document.querySelector('.body__inner_menu-result');
const resultField = document.querySelector('.body__inner_menu-result-field');
const difficul = document.querySelector('select');

btn.addEventListener('click', () => {
  ball.style.display = 'block';
});



// мяч меняет цвет при нажатии
ball.addEventListener('mousedown', () => {
  ball.classList.add('red');
});
ball.addEventListener('mouseup', () => {
  ball.classList.remove('red');
});

// счетчик попаданий по мячу
let score = 0;
ball.addEventListener('click', () => {
  score += 1;
  result.innerHTML = `Score: ${score}`;
  if(score >= 5) {
    result.innerHTML = 'U WIN!';
  }
});

// счетчик попаданий по полю
let scoreField = 0;
field.addEventListener('click', () => {
  scoreField += 1;
  resultField.innerHTML = `Score: ${scoreField}`;
  if(scoreField >= 5) {
    resultField.innerHTML = 'U LOOSE';
  }
});