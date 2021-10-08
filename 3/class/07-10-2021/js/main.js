// const btn = document.querySelector('button');
// const mainBox = document.querySelector('.main');
// let count = 0;

// // btn.onclick = () => {
// //   count++;
// //   console.log('go', `${count}`);
// // };

// btn.addEventListener('click', () => {
//   count++
//   console.log('go', `${count}`);
//   mainBox.innerHTML = `
//   <div class="test">
//     ${count}
//   </div>
//   `;
// });


const btnYes = document.querySelector('.btn-yes');
const resultYes = document.querySelector('.result-yes');

const btnNo = document.querySelector('.btn-no');
const resultNo = document.querySelector('.result-no');
let count = 0;

btnYes.addEventListener('click', () => {
  count++
  console.log(`${count}`);
  resultYes.innerHTML = btnYes;
});