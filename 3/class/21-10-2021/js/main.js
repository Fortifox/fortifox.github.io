const btn = document.querySelector('.body__inner_menu-btn');
const ball = document.querySelector('.body__inner_field-ball');
const wind = document.querySelector('.body__inner_field');
const score = document.querySelector('.body__inner_menu-result');

const resultField = document.querySelector('.body__inner_menu-result-field');
const difficul = document.querySelector('select');

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min +1);
  return Math.round(rand);
}

btn.addEventListener('click', () => {
  ball.style.display = 'block';
  const maxTop = wind.clientHeight - ball.clientHeight;
  const maxLeft = wind.clientWidth - ball.clientWidth;

  const position = setInterval(() => {
    const topPosition = randomInteger(0, maxTop);
    const leftPosition = randomInteger(0, maxLeft);

    ball.style.transform = `translate(${leftPosition}, ${topPosition})`;
  }, 1000);
});