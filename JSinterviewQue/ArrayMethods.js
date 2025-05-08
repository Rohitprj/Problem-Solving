// map()
// Convert an array of strings to uppercase:
// ['a', 'b', 'c'] → ['A', 'B', 'C']
// let arr = ["a", "b", "c"];
// let newArr = arr.map((ele) => ele.toUpperCase());

// console.log(newArr);

// Multiply each element in [3, 5, 7] by its index.
// let mulArr = [3, 5, 7];
// let newData = mulArr.map((index, data) => index * data);
// console.log(newData);

//  filter()
// Filter out names shorter than 5 characters: ['John', 'Alexandra', 'Bob'] → ['Alexandra']
// const names = ["John", "Alexandra", "Bob"];
// const largestName = names.filter((name) => name.length > 5);
// console.log(largestName);

// Get only positive numbers: [-1, 0, 4, -3, 9] → [4, 9]

// const posNum = [-1, 0, 4, -3, 9];

// const getPosNum = posNum.filter((num) => num > 0);
// console.log(getPosNum);

// reduce()
// Find the product of all elements: [2, 3, 4] → 24
// const mul = [2, 3, 4];
// const newProd = mul.reduce((acc, curVal) => acc * curVal, 1);
// console.log(newProd);

// Find the longest string in an array: ['hi', 'hello', 'world'] → 'hello'

const strings = ["hi", "hello", "world"];

const longest = strings.reduce((longestSoFar, current) => {
  //   console.log("longestSoFar :", longestSoFar, " ", "cur: ", current);
  return current.length > longestSoFar.length ? current : longestSoFar;
});

console.log(longest);
