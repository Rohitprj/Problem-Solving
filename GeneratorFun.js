// Generator function

function* generatorFun() {
  yield "hello buddy";
  yield console.log("hello 1");
  yield console.log("hello 2");
  yield console.log("hello 3");
  yield console.log("hello 4");
}

const data = generatorFun();
console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

// Normal function

// function generatorFun() {
//   console.log("hello 1");
//   console.log("hello 2");
//   console.log("hello 3");
//   console.log("hello 4");
// }

// const data = generatorFun();
// console.log(data);
