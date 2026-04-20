// let a = 10;
// let b = 10;

// console.log(a == b);

// if (a == b) {
//   console.log("Yes");
// } else if (a != b) {
//   console.log("yay");
// } else {
//   console.log("No");
// }

// let marks = 90;

// let branch;

// let studentIsPassed = true;

// switch (studentIsPassed) {
//   case marks >= 90:
//     branch = "CSE";
//     break;

//   case marks >= 80:
//     branch = "Mechanical";
//     break;

//   default:
//     branch = "Bio technology";
//     break;
// }
// console.log(`You have got a ${branch} branch`);

let weather = "rainy";
let temp = 25;

if (weather === "sunny") {
  if (temp > 30) {
    console.log("It's a hot day!");
  } else if (temp > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}
