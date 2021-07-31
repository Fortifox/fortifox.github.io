const ingred = [
  {id: '1', name: 'картошка', alergen: false},
  {id: '2', name: 'лук', alergen: true},
  {id: '3', name: 'шкварки', alergen: false},
  {id: '4', name: 'бульйон', alergen: false},
  {id: '5', name: 'морковка', alergen: false},
  {id: '6', name: 'масло', alergen: false},
];

const menu = [
  {id: '468dsjfmn589001', name: 'салат', ingred: ['1', '2', '3'] },
  {id: '468dsjfmn589002', name: 'суп', ingred: ['1', '4', '5'] },
  {id: '468dsjfmn589003', name: 'луковый салат', ingred: ['2', '6'] },
];

const el = document.querySelector('.ind');
let selectHtml = '';
ingred.forEach(ingredient => {
  const optionHtml = `<option val="${ingredient.id}">${ingredient.name}</option>`;
  selectHtml = `${selectHtml}${optionHtml}`;
});
el.innerHTML = selectHtml;

el.addEventListener('change', (ev) => {
  const id = ev.target.value;
  console.log('id:', id);

  const filtrMenu = menu.filter(dish => {
    console.log(dish);
    const result = dish.ingred.includes(id);
    console.log(result);
    return result;
  });
  console.log('filtrMenu', result);
});