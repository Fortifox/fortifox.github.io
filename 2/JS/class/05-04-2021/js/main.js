const el = document.querySelector('.test1');
const el = document.querySelector('.test2');

el.addEventListener('click', (ev) => {
  console.log('run'),

  let a =12;
  a=20;
  console.log(a);
});

el.addEventListener('click', (ev) => {
  console.log(a);
});