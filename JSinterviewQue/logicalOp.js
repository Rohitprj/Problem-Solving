// Que 1
// let a = 10;
// let b = 10;
// let c = a === 10 ? "yes" : "No";
// console.log(c);

// // if (a || b) {
// //   console.log("Yes");
// // } else {
// //   console.log("No");
// // }

// Que 2
// person = { name: "John", age: 30, city: "Delhi" };
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Que 3
// let date = new Date();
// console.log(date);

// Que 4
// const person = new Object();
// person.name = "Rohit";
// person.age = "Alice";
// console.log(person.age);

// Que 5

// function palindrome(name) {
//   let j = name.length - 1;
//   for (let i = 0; i < name.length / 2; i++) {
//     if (name[i] != name[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }
// let result = palindrome("wow");
// console.log(result);

// Que 6
// console.log(a.split("").reverse().join(""));
let a = "Rohit";
let b = "";
for (let i = a.length - 1; i >= 0; i--) {
  b = b + a[i];
}
console.log(b);
