const elPrice = document.querySelector('.price');
const elYear = document.querySelector('.year');
const elType = document.querySelector('.test');
const elRes = document.querySelector('.res');

const form = document.forms.calkPrice;

const calcPrice = () => {
  return ((price * type) * (year / 100))
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const price = Number (elPrice.value);
  const year = (elYear.value);
  const type = (elType.value);
  const res = (elRes.value);

  res.innerHTML = calcPrice;
});