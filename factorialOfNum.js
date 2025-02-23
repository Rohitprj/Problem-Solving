// write a function that calculates factorial of a number
// 5! = 5 x 4 x 3 x 2 x 1

function factorial(num) {
  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp = temp * i;
  }
  console.log(temp);
}
factorial(6);
