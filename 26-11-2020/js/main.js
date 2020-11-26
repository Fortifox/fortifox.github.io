let numbers = '';

for(let i = 1; i <= 45; i++) {
  if((i % 2 === 0 & (i >= 2 & i <= 14)) || (i % 2 === 0 & (i >= 33 & i <= 45)))  {
    numbers += i + ',';
  }
};
console.log('Четные числа от 2 до 14, нечетные от 33 до 45:', numbers);