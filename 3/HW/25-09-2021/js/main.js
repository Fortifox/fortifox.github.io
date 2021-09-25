const arr = [56, 6, 3, 88, 23, -11];
console.log(arr);

const changeSign = (arrIndex1, arrIndex2) => {
  let elem = arr[arrIndex1];
  arr[arrIndex1] = arr[arrIndex2];
  arr[arrIndex2] = elem;

  console.log(arr);
};

changeSign(0, 1);