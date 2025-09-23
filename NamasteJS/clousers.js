function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const add = myCounter();

console.log(add());
console.log(add());
console.log(add());
