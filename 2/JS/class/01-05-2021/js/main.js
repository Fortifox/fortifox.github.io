// const person = {name: 'Alex', lastname: 'Litv'};

// const Person = function(data) {
//   this.name = data.name;
//   this.lastname = data.lastname;

//   this.fullname = () => {
//     const fullname = `${this.name} ${this.lastname}`;
//     return fullname;
//   }
// };

// const user = new Person(person);
// console.log(user);

// const TimeNow = function() {

//   this.now = () => {
//     const date = new Date;
//     const time = date.toISOString();
//     return time;
//   }
// }

// const time = new TimeNow();
// console.log(this.now())

const elCheck = document.querySelector('.check')
const elBtn = document.querySelector('.btn')
const elRes = document.querySelector('.res')

const person = [
  {name: 'Жанна Кальман', birthday: '21 февраля 1875', age: '122 года, 164 дня'},
  {name: 'Мария Луиза Мейёр', birthday: '29 августа 1880', age: '117 лет, 230 дней '},
  {name: 'Вайолет Браун', birthday: '10 марта 1900', age: '117 лет, 189 дней'},
  {name: 'Эмма Морано', birthday: '29 ноября 1899', age: '117 лет, 137 дней'},
  {name: 'Тиё Мияко', birthday: '2 мая 1901', age: '117 лет, 81 день'},
  {name: 'Франциска Селса душ Сантуш', birthday: '21 октября 1904', age: '116 лет 192 дня '},
];
console.log(person);

elBtn.addEventListener('click', (ev) => {
  let check = Number(elCheck.value);
  
  elRes.innerHTML = check;
});

const Person = function(data) {
  this.name = data.name;
  this.birthday = data.birthday;
  this.age = data.age;

  this.fullname = () => {
    const fullname = `${this.name} ${this.birthday} ${this.age}`;
    return fullname;
  }
}