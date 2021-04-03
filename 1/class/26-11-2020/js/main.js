// let numbers = '';


// function getString(a1, a2, a3) {    // let a1; let a2; let a3;
const getString = (str, a1, a2, a3) => { 
     // let a1; let a2; let a3;
    for (let i = a1; i <= a2; i = i + a3) {
        str = `${str} ${i}`;    // тело функции
    };
    return str;
};

let numbers1 = getString('', 2, 14, 2);
let numbers2 = getString(numbers1, 9991999, 9992011, 2);

console.log(numbers2)



// const func = b1 => console.log(b1 + 1);
// func(4);

// numbers = getString(2, 14, 2);
// numbers = getString(9991999, 9992011, 2);
// numbers = getString(10002223335, 10002223350, 5);


// for(let i = 2; i <= 14; i += 2) {
//     numbers = `${numbers} ${i}`;
//   }
// for(let i = 9991999; i <= 9992001; i += 2) {
//   numbers = `${numbers} ${i}`;
// }
// for(let i = 9992001; i <= 9992011; i += 2) {
//   numbers = `${numbers} ${i}`;
// }
// for(let i = 10002223335 ; i <= 10002223350; i += 5) {
//   numbers = `${numbers} ${i}`;
// }
// console.log(a, b, numbers);

// const func = b1 => console.log(b1 + 1);
// func(4);