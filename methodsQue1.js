// Given the following array, how would you transform it to an array
// of names using map, and filter out the users who are under 18 using filter?
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
const newArr = users.map((items) => {
  const newAge = users.filter((item) => item.age <= 18);
  return { name: items.name, age: newAge };
});
console.log(newArr);
