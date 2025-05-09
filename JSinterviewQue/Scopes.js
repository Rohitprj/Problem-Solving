// There are 3 types of scopes in js
// Global - Function - Block

// Global :- var let const all are used for global scope
var name = "Rohit";
let age = 24;
const add = "Delhi";
// These values we can use from every where we want in this file
console.log(name, age, add);

if (true) {
  console.log(name, age, add);
}
function print() {
  console.log(name, age, add);
}
print();

// ------------------------------------------------------------------------------------

// Function scope :- var let const only access by funScope function only in function scope

function funScope(params) {
  var name = "Rohit";
  let age = 24;
  const add = "Delhi";
  console.log(name, age, add);
}
funScope();
console.log(name, age, add);

// Block scope :- In this let and const are block scope (cannot access outside block) and var can be access outside the block.
{
  var name = "Rohit";
  let age = 24;
  const add = "Delhi";
  console.log(name, age, add);
}
console.log(name); // can access
// console.log(age);   // cannot access
// console.log(add);   // cannot access
