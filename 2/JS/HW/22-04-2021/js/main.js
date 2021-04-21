let elBtnCalc = document.querySelector('.btn-split');
let elBtnCalcs = document.querySelector('.btn-division');
let elInputA = document.querySelector('.number-a');
let elInputB = document.querySelector('.number-b');
let elRes = document.querySelector('.res');
let elRes1 = document.querySelector('.res1');

elBtnCalc.addEventListener('click', (ev) => {
  let a =Number(elInputA.value);
  let b =Number(elInputB.value);

  let result = a*b;
  elRes.innerHTML = result;
});

elBtnCalcs.addEventListener('click', (ev) => {
  let a =Number(elInputA.value);
  let b =Number(elInputB.value);

  let result = a/b;
  elRes.innerHTML = result;
});