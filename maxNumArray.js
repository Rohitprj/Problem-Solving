function maxNum(arr) {
  if (arr.length < 1) {
    throw new Error("Empty array !");
  }
  let biggestNum = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > biggestNum) {
      biggestNum = arr[i];
    }
  }
  console.log(arr, biggestNum);
}
maxNum([8, -2, -56, 12, 1]);
