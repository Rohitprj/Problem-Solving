// Destructuring

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [a, b, c, ...rest] = arr;
let [x, , , ...all] = arr;
console.log(a, b, c, rest);
console.log(x, all);
