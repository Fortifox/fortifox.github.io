// const btnLeft = document.querySelector('.left');
// const btnRight = document.querySelector('.right');
// const box = document.querySelector('.box');

// btnLeft.addEventListener('mousedown', () => {
  //   box.classList.toggle('.move-left')
  // })
  // btnRight.addEventListener('mouseup', () => {
  // const box = document.querySelector('.box');
//   box.classList.toggle('.move-right')
// })


const box = document.querySelector('.circle');
document.addEventListener('keydown', (ev) => {
  if (ev.key === ' ') {
    box.classList.add('.change-size')
  }
})
document.addEventListener('keyup', (ev) => {
  if (ev.key === ' ') {
    box.classList.remove('.change-size')
  }
})