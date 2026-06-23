import fs from "fs";

// console.log("start");
// fs.writeFileSync("new0.txt", "Hello i am web developer");
// console.log("end");

console.log("start");
fs.writeFile("new1.txt", "Hello i am web developer", () => {
  console.log("Executing");
});
console.log("end");
