const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
console.log(btn);
console.log(result);

btn.addEventListener('click', () => {
  const texts = document.querySelector('input');
  const textsArr = texts.value.split(' ');
  console.log(textsArr);

  let tempStr = '';

  for (let i = 0; i < textsArr.length; i++) {
    console.log(textsArr[i]);

    tempStr = `
      ${tempStr}
        <input type="text" value="${textsArr[i]}">
    `;
  };
  
  result.innerHTML = tempStr;
});