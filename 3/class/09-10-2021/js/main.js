const btn = document.querySelector('.btn');
const main = document.querySelector('.main');

const generateBox = (event) => {
  let tempStr = '';
  event.preventDefault()
  const text = document.querySelector('.input');
  const tempArr = text.value.split('');
  for(let i = 0; i < text.value.length; i++) {
    tempStr = `
    ${tempStr}
    <div class="box">
    ${tempArr[i]}
    </div>
    `;
    // ${text.value[i]}
  }
  main.innerHTML = tempStr;
};

btn.addEventListener('click', generateBox);

// 1. сделать кнопку и импут
// 2. получить к ним доступ
// 3. создаю новый див/инпут с новым классом, назначаю ему параметры
// 4. вывожу консоль чтобы проверить работоспособность
// 5. создаю событие в котором назначаю переменную из которой извлекаю из заданного инпута
// 6. вывожу консоль чтобы проверить работоспособность
// 7. создаю цикл который перебирает значения отталкиваясь от длины "массива"
// 8. повторяю пункт 4
// 9. через "забыл как называется" addlistener добавляю созданый класс из пункта 3
// 10. 
// 11. 
// 12. 