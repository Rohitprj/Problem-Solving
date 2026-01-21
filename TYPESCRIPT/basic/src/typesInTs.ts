// 1. Type Annotation (you tell TypeScript the type)

let age: number = 25;
let name: string = "Alice";
let isAdmin: boolean = false;

function add(a: number, b: number): number {
  return a + b;
}

// 2. Type Inference (TypeScript figures it out)

let age1 = 25; // You don’t need to write : number.

// Function return inference
function multiply(a: number, b: number) {
  return a * b;
}

// 3. Annotation vs Inference (Side-by-Side)

// Annotation
// let score: number = 100;

// Inference
// let score = 100;

// 4. When Annotation Is Required

// function greet(name) {
//       Parameter 'name' implicitly has an 'any' type
//   return "Hello " + name;
// }

// Correct
// function greet(name: string) {
//   return "Hello " + name;
// }
