const ingridients = [
  { id: 'e88', name: 'картошка', alergen: false, kkal: 100, weight: 200 },
  { id: '08a', name: 'лук', alergen: true, kkal: 200, weight: 200 },
  { id: 'a0b', name: 'шкварки', alergen: false, kkal: 300, weight: 200 },
  { id: '0dd', name: 'бульйон', alergen: false, kkal: 400, weight: 200 },
  { id: 'd12', name: 'морковка', alergen: false, kkal: 500, weight: 200 },
  { id: '8a1', name: 'оливковая олия', alergen: false, kkal: 600, weight: 200 }
];

const ing = {
  id: 'e88', 
  name: 'картошка', 
  alergen: false, 
  kkal: 100, 
  weight: 200,
  _birthday: 1988,

  get comonKal() {
    const val = (this.weight /100)* this.kkal;
    return this._birthday;
  },

  set comonKal(val) {
    throw new Error('Not')
  }

};

console.log(ing.comonKal);