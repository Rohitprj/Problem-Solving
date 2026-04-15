// let student = {
//   name: "Nitin",
//   course: "BCA",
//   marks: 70,
//   isPassed: true,
//   isCompleted: null,
//   books: {
//     sem1: "Yes",
//     isClear: false,
//     mca: {
//       isMCAStu: false,
//       course: "MCA",
//     },
//   },
// };

// console.log(Object.values(student));

// let value = [1, 2, 3, 4, 5];

// let a = [
//   1,
//   "two",
//   { name: "MERN", course: "BCA", marks: [1, 2, 3] },
//   [3, 4, 5],
// ];

// console.log(a[2]);

// function hello() {
//   console.log("Hello");
// }
// hello();

// function send() {
//   return "Hello";
// }

// console.log(send());

function add(a, b) {
  console.log("Addition of a and b is : ", a + b);
}

add(5, 2);

function add(a, b) {
  return `Addition of a and b is : ${a + b}`;
}

console.log(add(5, 2));
