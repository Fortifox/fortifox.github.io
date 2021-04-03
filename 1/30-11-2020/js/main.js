console.log('#1');
let arr1 = [21, 22, 23, 24, 25, 26, 27, 28, 29];

const checkSumm = (index) => {
    if (arr1[index] !== (arr1[index - 1] + arr1[index + 1])) {
        arr1[index] = arr1[index - 1] + arr1[index + 1];
    }
    return arr1[index];
}
console.log(arr1);

arr1[2] = checkSumm(2);
arr1[5] = checkSumm(5);
arr1[7] = checkSumm(7);

console.log(arr1);


console.log('#2');

const randomInt = (min, max) => {
    let rand = min + Math.random()*(max+1-min);
    return Math.floor(rand);
};

const genArr = (len, min1, max1) => {
    let arr2 = [];
    for(let i = 0; i<len; i++) {
        arr2.push(randomInt(min1, max1));
    }
    return arr2;
};

const minValue = (arr2) => {
    let min = arr2[0];
    for(let i = 1; i < arr2.length; i++) {
        if(arr2[i] < min) {
            min = arr2[i];
        }
    };
    return min;
};

const decrEl = (index, array, diff) => {
    let newArr = [];
    for(let i = 0; i , array.length; i++) {
        newArr[i] = array[i];
    }
    newArr[index] = newArr[index] - diff;
    return newArr;
};

// const arr2 = genArr(10, 1, 12);
// let min1 = minValue(arr2);
// let arr22 = decrEl(0, arr2, min1);
// let lastEl = arr2.length-1;
// arr22 = decrEl(lastEl, arr2, min1)

// console.log(arr2, arr22);


console.log('#3');

let arrNumber = [];
let randomArr = [arrNumber];

const newRandom = (min, max) => {
    return Math.floor(Math.random()*(max-min+1))+min;
};



for(let i = 0; i <= newRandom; i++) {
    randomArr[i] = newRandom(min, max);
}
console.log(randomArr);

for(let i = 0; i <= newRandom; i++) {
    randomArr2[i] = randomArr[i]*3-5;
}
console.log(randomArr2);