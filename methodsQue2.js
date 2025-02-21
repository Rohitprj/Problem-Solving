const users = [
  { name: "Alice", age: 25, marks: 10 },
  { name: "Bob", age: 17, marks: 20 },
  { name: "Charlie", age: 30, marks: 22 },
  { name: "Boa", age: 15, marks: 20 },
  { name: "Chae", age: 65, marks: 22 },
];

// Expected output --
// output: {
// total: 40,
// items: [
// { name: "Bob", marks: 20 },
// { name: "Boa", marks: 20 },
// ]
// }
const filterMarks = users.filter((item) => item.age < 18);
// console.log(filterMarks);

const total = filterMarks.reduce((acc, currVal) => {
  return acc + currVal.marks;
}, 0);
// console.log(total);

const newObj = {
  total: total,
  items: filterMarks,
};
console.log(newObj);
