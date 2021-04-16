const fullClass = [
  {name: 'Vladislav', surname: 'Vladislav', dz: 8},
  {name: 'Александр', surname: 'Гетьманский', dz: 7},
  {name: 'Denis', surname: 'Rudik', dz: 6},
  {name: 'Andrey', surname: 'Timoshenko', dz: 8},
  {name: 'Артем', surname: 'Шевчук', dz: 4},
  {name: 'Alex', surname: 'Griko', dz: 6},
  {name: 'Im', surname: 'Table', dz: 9},
  {name: 'Nataliya', surname: 'Nataliya', dz: 7},
  {name: 'Инна', surname: 'Олещенко', dz: 5},
  {name: 'R1d', surname: 'R1d', dz: 9},
  {name: 'Николай', surname: 'Зайченко', dz: 7},
  {name: 'Andrew', surname: 'Stehni', dz: 7},
  {name: 'Вова', surname: 'Вова', dz: 6},
  {name: 'Yaroslav', surname: 'Yaroslav', dz: 5},
  {name: 'Ivanna', surname: 'Zyama', dz: 8},
];
console.log(fullClass);

const btnCheck = document.querySelector('.check');
const elRes = document.querySelector('.res');


btnCheck.addEventListener ('click', (ev) => {
  ev.preventDefault();

  for(let i of fullClass) {

    const html = `
      <div class="res">
        <p class="name">Имя: ${name}</p>
        <p class="surname">Фамилия: ${surname}</p>
        <p class="dz">Дз: ${dz}</p>
      </div>
      `
      elRes.insertAdjacentHTML('beforeend', html);
  };
});