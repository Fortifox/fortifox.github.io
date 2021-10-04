// const main = document.querySelector('.main');
// const box = document.querySelector('.box');
// // const box = main.querySelector('.box');


// // console.log(main);
// // console.log('box', box);

// const items = document.querySelectorAll('.item');
// console.log(items);

// const test = document.getElementById('test');
// console.log('befor', test.innerText);
// test.innerText = 'Hallo';
// console.log(main);

const main = document.querySelector('.main');
const items = document.querySelectorAll('.item');

main.classList.add('red');

items.forEach((el) => {
  if (el.innerText === '1') {
    el.innerHTML = 'some text';
    el.classList.add('blue');
  } else if (el.innerText === '3') {
    el.classList.add('font')
  } else if (el.innerText === '2') {
    el.innerHTML = '<div></div>';
    el.style.border = '1px solid black';
    el.style.height = '100px';
    el.style.width = '100px';
  }
});