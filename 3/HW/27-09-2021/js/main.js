// exercise 1
const arr1 = [1, 8, -3, 4];
for (let i = 0; i < 100; i++) {
  arr1.push(0);
};
console.log('№ 1', arr1);

// exercise 2
const arr2 = [1, 8, -3, 4];
for (let i = 0; i < 100; i++) {
  if (arr2[i] !== 0) {
    arr2.push(0);
  }
};
console.log('№ 2', arr2);

// exercise 3
const arr3 = [1, 8, -3, 4];
for (let i = 0; i < 100; i++) {
  arr3.unshift(0);
};
console.log('№ 3', arr3);

// exercise 4
const arr4 = [1, 8, -3, 4];
for (let i = 0; i < 100; i++) {
  if (arr4.length < 100) {
    arr4.unshift(0);
  }
};
console.log('№ 4', arr4);

// exercise 5

// exercise 6
const arr6 = [1, 8, -3, 4];
let k = arr6.length * 20;
for (let i = 0; i < k; i++) {
  arr6.push(arr6[i]);
};
console.log('№ 6', arr6);

// exercise 7
const arr7 = [1, 8, -3, 4];
let z = arr7[0] + arr7[1] + arr7[2] + arr7[3];
for (let i = 0; i < arr7.length; i++) {
  if (arr7.length < 5) {
    arr7.push(z);
  }
};
console.log('№ 7', arr7);


// exercise 8
const arr8 = [1, 8, -3, 4, 3, 1];
let a = 0;
let b = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] < 0) {
    
  } else if ( arr8[i] > 0) {
    
  }
};
// console.log('№ 8', arr8);

// exercise 9
const arr9 = [1, 8, -3, 4];
for (let i = 0; i < arr9.length; i++) {
	arr9[i] = arr9[i] * 2;
};
console.log('№ 9', arr9);

// exercise 10
const arr10 = [1, 8, -3, 4];
for (let i = 0; i < arr10.length; i++) {

};
// console.log('№ 10', arr10);