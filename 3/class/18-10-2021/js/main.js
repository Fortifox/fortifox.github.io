const timerNumberEl = document.querySelector('.timer__main-clock');
const timerInputEl = document.querySelector('.time-inp');
const palyBtnEl = document.querySelector('.play-btn');

const setTime = () => {
  let timerTime = timerInputEl.valueAsNumber;
  let currentTime = new Date();
  currentTime = (currentTime.getHours() * 60 + currentTime.getMinutes()) * 60 * 1000;
  // console.log(currentTime);
  // console.log(timerTime);
  
  timerTime = (timerInputEl.valueAsNumber - currentTime);
  
  const getTime = () => {
    let sec = Math.floor(timerTime / 1000) % 60;
    let min = Math.floor(timerTime / (1000 * 60)) % 60;
    let hour = Math.floor(timerTime / (1000 * 60 * 60)) % 24;
    console.log('sec', sec);
    console.log('min', min);
    console.log('hour', hour);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    timerNumberEl.innerHTML = `${hour}:${min}:${sec}`;
    timerTime = timerTime - 1000;
    if (timerTime === 0) {
      clearInterval(timeInt)
    }
  }
  let timeInt = setInterval(getTime, 1000);
};
palyBtnEl.addEventListener('click', setTime);