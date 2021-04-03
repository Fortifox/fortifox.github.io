let form = document.forms.test;

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let formData = new FormData(ev.target);
});
// elBtnCalc.addEventListener('click', (ev) => {
//   let w =Number(elInputW.value);
//   let h =Number(elInputH.value);
//   let z =Number(elInputZ.value);

//   elInputW.value = 'DONE'
//   elInputH.value = 'DONE'
//   elInputZ.value = 'DONE'
  
//   let sum = w*h*z;
//   elRes.innerHTML = sum;
});