// let a = 10;
// let b = 20;

// // b = a
// [a,b]=[b,a];

// console.log(b);
// console.log(a);

// function printNumbersRecursive(n) {
//   if (n === 0) {
//     return; // Base case to stop the recursion
//   }
//   printNumbersRecursive(n - 1); // Recursive call for the previous number
//   console.log(n); // Print the current number after the recursive call returns
// }

// printNumbersRecursive(50);

num(1);

function num(n) {
  if (n > 10) return;
  console.log(n);
  num(n + 1);
}

// function printCount(a){

//     printCount(a + 50);

//     console.log(a)
// }
// printCount(1)
