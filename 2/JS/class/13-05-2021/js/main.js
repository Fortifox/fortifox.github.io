const test = () => {
  const ingred = [
    {id: '1', name: 'картошка', alergen: false},
    {id: '2', name: 'лук', alergen: true},
    {id: '3', name: 'шкварки', alergen: false},
    {id: '4', name: 'бульйон', alergen: false},
    {id: '5', name: 'морковка', alergen: false},
    {id: '6', name: 'масло', alergen: false},
  ];
  const result = {
    status: 'ok',
    ingred,
  }
  return result;
}

// const { status } = test();
// console.log(status);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e'];
const arr3 = ['g', ...arr1, ...arr2, 'f'];

console.log(arr3);
const arr3 = [...arr1];