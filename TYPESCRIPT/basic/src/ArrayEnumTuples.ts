// 1. Array in TypeScript
// Array matlab ek list jisme same type ke elements hote hain.

let numbers: number[] = [1, 2, 3, 4];

let numbers1: Array<number> = [1, 2, 3];

let names: string[] = ["Aman", "Riya", "Rahul"];

names.push("Neha"); // valid
// names.push(10); // ❌ error (kyunki number allowed nahi hai)

// string[] → sirf strings allowed
// number[] → sirf numbers allowed

// --------------------------------------------------------------------------------------------------------------------------------

// 2. Tuple in TypeScript

// Tuple ek special type ka array hota hai jisme:

// fixed length hoti hai
// har index ka type fixed hota hai

let person: [string, number] = ["Aman", 22];

let user: [string, number, boolean];

user = ["Riya", 25, true]; // ✅ correct
// user = ["Riya", true, 25]; // ❌ wrong order

// Order matter karta hai
// Length bhi fixed hoti hai

// --------------------------------------------------------------------------------------------------------------------------------

// 3. Enum in TypeScript

// Syntax:
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Example:
enum Status {
  Success,
  Error,
  Loading,
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // 0

// Custom values:
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let myRole: Role = Role.Admin;

// Default enum numbers se start hota hai (0,1,2…)
// Tum custom values bhi de sakte ho (string ya number)

// Quick Comparison :-
// | Feature  | Array              | Tuple               | Enum               |
// | -------- | ------------------ | ------------------- | ------------------ |
// | Type     | Same type elements | Fixed types + order | Fixed named values |
// | Length   | Flexible           | Fixed               | Fixed              |
// | Use case | List of items      | Structured data     | Constants          |

// Real-life Example:
// Array
let marks: number[] = [90, 85, 88];

// Tuple
let student: [string, number] = ["Aman", 90];

// Enum
enum Grade {
  A = "Excellent",
  B = "Good",
  C = "Average",
}

let result: Grade = Grade.A;
