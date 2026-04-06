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
