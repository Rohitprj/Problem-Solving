// Given the following array, how would you transform it to an array
// of names using map, and filter out the users who are under 18 using filter?
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "rox", age: 30 },
  { name: "george", age: 16 },
  { name: "karl", age: 30 },
  { name: "mark", age: 12 },
];

const newArr = users
  .filter((item) => item.age < 18)
  .map((data) => {
    return data.name;
  });
console.log(newArr);
