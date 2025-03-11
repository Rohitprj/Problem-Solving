const data = ["Ajay", "Vijay", "Ram", "Shyam", "Bharat"];
const array = data.filter(
  (item) => item === "Ajay" || item === "Shyam" || item === "Bharat"
);
console.log(array);
const newData = data.filter((item) => item === "Vijay" || item === "Ram");
console.log(newData);
