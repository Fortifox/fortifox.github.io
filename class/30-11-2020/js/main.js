const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const genArr = (lem, min1, max1) => {
  let arr = [];
  for(let i=0; i<lem; i++) {
    arr.push(randomInt(min1, max1));
  }
  return arr;
};

const minValue = (arr) => {
  let min = arr[0];
  for(let i=1; i<arr.lenght; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  };
  return min;
};

const decrElem = (index, array, diff) => {
  array[index] = array[index] - diff;
  return array;
}


let arr = genArr(6, 1, 6);
let min1 = minValue(arr);
arr1 = decrElem(0, arr. min1);
let lastEl = arr.length - 1;
arr = decrElem(lastEl, arr, min1);

console.log(arr, min);




