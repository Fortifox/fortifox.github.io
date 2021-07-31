const moment = require('moment');

const myBirth = '06-11-1987';

let my = moment(myBirth, "DD-MM-YYYY");
let ageYears = moment().diff(my, 'years');
let ageMonth = moment().diff(my.add(ageYears, 'years'), 'months');
let ageDays = moment().diff(my.add(ageMonth, 'months'), 'days');

console.log(ageYears + ' years, ' + ageMonth + ' months, ' + ageDays + ' days');