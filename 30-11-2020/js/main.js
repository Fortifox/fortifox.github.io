let arr = [21, 22, 23, 24, 25, 26, 27, 28, 29];

const checkSumm = (index) => {
    if (arr[index] !== (arr[index - 1] + arr[index + 1])) {
        arr[index] = arr[index - 1] + arr[index + 1];
    }
    return arr[index];
}
console.log(arr);

arr[1] = checkSumm(1);
arr[4] = checkSumm(4);
arr[6] = checkSumm(6);

console.log(arr);