// exercise1
const arr1 = [1, 8, -3, 4];
const exercise1 = (arrArr1) => {
  for (let i = 0; i < 100; i++) {
    arr1.push(0);
  };
};
exercise1(1);
console.log(arr1);

// exercise2
const arr2 = [1, 8, -3, 4];
const exercise2 = (arrArr2) => {
  arr2.length = 100;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2.el != 0) {
      arr2.push(0);
    }
  };
};
exercise2(1);
console.log(arr2);

// exercise3
const arr3 = [1, 8, -3, 4];
const exercise3 = (arrArr3) => {
  for(let i = 0; i < 100; i++){    
     arr3.unshift(0);
    };
};
exercise3(0);
console.log(arr3);

// exercise4
const arr4 = [1, 8, -3, 4];
arr4.length = 100;
const exercise4 = (arrArr4) => {
  for(let i = 0; i <= arr4.length; i++){    
     arr4.unshift(0);
    };
};
exercise4(0);
console.log(arr4);
