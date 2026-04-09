/*

Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

------------------------------------------------------------------------------------------------------------------------------------

Asynchronous
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.

Example :-
Synchronous
function myDisplayer(some) {
 console.log(some)
}

myDisplayer("A");
myDisplayer("B");
myDisplayer("C");

------------------------------------------------------------------------------------------------------------------------------------

Example :-
Asynchronous
function myDisplayer(some) {
 console.log(some)
}

myDisplayer("A");

setTimeout(function() {
  myDisplayer("B");
}, 1000);

myDisplayer("C");

*/

// function getProducts() {
//   console.log("Loading products...");

//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Products:", data);
//     })
//     .catch((err) => {
//       console.log("Failed to load products", err);
//     });
// }

// getProducts();

// --------------------------------------------------------------------------------------------------------------------

// async function getProducts() {
//   console.log("Loading products...");

//   try {
//     let res = await fetch("https://api.example.com/products");
//     let data = await res.json();

//     console.log("Products:", data);
//     // yaha UI me products show karte hain

//   } catch (err) {
//     console.log("Failed to load products", err);
//   }
// }

// getProducts();

// let a = 0;

// let b = setInterval(() => {
//   console.log(a);
//   a++;
//   if (a > 10) {
//     clearInterval(b);
//   }
// }, 1000);

// async function getProducts() {
//   console.time();
//   console.log("Loading products...");

//   try {
//     // let res = await fetch("https://dummyjson.com/products").then((res) =>
//     //   res.json(),
//     // );
//     let res = await fetch("https://dummyjson.com/products");

//     let data = await res.json();

//     console.log("Products:", data);
//   } catch (err) {
//     console.log("Failed to load products", err);
//   }

//   console.timeEnd();
// }

// getProducts();

// --------------------------------------------------------------------------------------------------------------------

// async function getProd() {
//   try {
//     let res = await fetch("https://dummyjson.com/products");
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// }

// getProd();
