const main = document.querySelector('.main');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
// console.log(input)

// btn.addEventListener('click', () => {
//   let k = 0;
//   const showSec = () => {
//     main.innerHTML = k;
//     // console.log(k);
//     k++
//     if (k === 10) {
//       console.log('stop');
//       clearInterval(timer);
//     }
//   };

//   const timer = setInterval(showSec, 1000);
// });


// btn.addEventListener('click', () => {
//   let k = 60;
//   const showSec = () => {
//     main.innerHTML = k;
//     k--
//     if (k < 0) {
//       console.log('stop');
//       clearInterval(timer);
//     }
//   };
//   const timer = setInterval(showSec, 1000);
// });

btn.addEventListener('click', () => {
  let ins = parseInt(input.value);
  // if (input.value > 3600) {
  //   alert('значение больше 60 минут')
  // } else {
  //   console.log(input.value);
  // };

  const showSec = () => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    if (input.value > 3600) {
      console.log('stop');
      clearInterval(timer);
      input--
    }
  };
  const timer = setInterval(showSec, 1000);
});