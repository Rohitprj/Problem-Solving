// Write a function that reaverse a string ?

// solution 1
// function stringReverse(name) {
//   let rev = "";
//   for (let i = name.length - 1; i >= 0; i--) {
//     rev = rev + name[i];
//   }
//   return rev;
// }
// console.log(stringReverse("Rohit"));

// solution 2
function strReverse(name) {
  return name.split("").reverse().join("");
}
const rev = strReverse("Software");
console.log(rev);
