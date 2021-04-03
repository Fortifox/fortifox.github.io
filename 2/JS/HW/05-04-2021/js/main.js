let elName = document.querySelector('.name');
let elLast = document.querySelector('.last');
let elFather = document.querySelector('.father');
let elSend = document.querySelector('.send');

let elRes1 = document.querySelector('.res1');
let elRes2 = document.querySelector('.res2');
let elRes3 = document.querySelector('.res3');

console.log(elName, elLast, elFather, elSend, elRes1, elRes2, elRes3);

elSend.addEventListener('click', (ev) => {
  let name =String(elName.value);
  let last =String(elLast.value);
  let father =String(elFather.value);

  let res1 = name;
  elRes1.innerHTML = res1;
  let res2 = last;
  elRes2.innerHTML = res2;
  let res3 = father;
  elRes3.innerHTML = res3;
});