// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet("1");
// greet("2");
// greet("3");
// greet("4");

// function greet(count) {
//   console.log(`${count}`);
// }

// let a = () => {
//   greet("3");
// };

// greet("1");
// greet("2");
// setTimeout(a, 2000);
// greet("4");

// 1 2 4 3

// setInterval(() => {
//   console.log("This message appears every second");
// }, 1000);

// setTimeout(() => {
//   console.log("Hello World");
// }, 5000);

// function getData() {
//   let res = fetch("https://dummyjson.com/products");
//   let data = res.json();
//   console.log(data);
// }

// getData();

function getData() {
  fetch("https://dujson.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Error", err));
}

getData();
