// Datatypes in Javascript

// Primitive Datatypes
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Non-Primitive Datatypes
// 1. Object
// 2. Array
// 3. Function

// Primitive Data Type
// Primitive data types in JavaScript represent simple, immutable values stored directly in memory,
// ensuring efficiency in both memory usage and performance.

// 1. Number
// The Number data type in JavaScript includes both integers and floating-point numbers.
// Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors,
// respectively.

// let n1 = 2;
// console.log(n1);

// let n2 = 1.3;
// console.log(typeof n2);

// let n3 = Infinity;
// console.log(n3);

// let n4 = "something here too" / 2;
// console.log(n4);

// --------------------------------------------------------------------------------------------------------

// 2. String
// A String in JavaScript is a series of characters that are surrounded by quotes.
// There are three types of quotes in JavaScript.

// let s1 = "Hello There";
// console.log(s1);

// let s2 = 'Single quotes work fine';
// console.log(s2);

// let s3 = `can embed ${s1}`;
// console.log(s3);

// --------------------------------------------------------------------------------------------------------

// 3. Boolean
// The boolean type has only two values i.e. true and false.

// let b1 = true;
// console.log(b1);

// let b2 = false;
// console.log(b2);

// --------------------------------------------------------------------------------------------------------

// 4. Null
// The special null value does not belong to any of the default data types.
// It forms a separate type of its own which contains only the null value.

// The 'null' data type defines a special value that represents nothing, or empty value.

// let age = null;
// console.log(age)

// 5. Undefined
// A variable that has been declared but not initialized with a value is automatically assigned
// the undefined value. It means the variable exists, but it has no value assigned to it.

// let a;
// console.log(a);

// --------------------------------------------------------------------------------------------------------

// 6. Symbol (Introduced in ES6)
// Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for
// object properties. They help create unique keys in objects, preventing conflicts with other properties.

// let s1 = Symbol("Geeks");
// let s2 = Symbol("Geeks");
// console.log(s1);
// console.log(s1 == s2);

// --------------------------------------------------------------------------------------------------------

// 7. BigInt (Introduced in ES2020)
// BigInt is a built-in object that provides a way to represent whole numbers greater than 253.
// The largest number that JavaScript can reliably represent with the Number primitive is 253,
// which is represented by the MAX_SAFE_INTEGER constant.

// let b = BigInt("0b1010101001010101001111111111111111");
// console.log(b);

// let x = 1234567890123456789012345n;
// console.log(x);
// let y = BigInt(1234567890123456789012345);
// console.log(y);

/*
Non-Primitive Data Types
The data types that are derived from primitive data types are known as non-primitive data types.
It is also known as derived data types or reference data types.
*/

// 1. Object
// JavaScript objects are key-value pairs used to store data, created with {} or the new keyword.
// They are fundamental as nearly everything in JavaScript is an object.

// let gfg = {
//     type: "Company",
//     location: "Noida"
// }
// console.log(gfg.type)

// --------------------------------------------------------------------------------------------------------

// 2. Arrays
// An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.

// let a1 = [1, 2, 3, 4, 5];
// console.log(a1);

// let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
// console.log(a2);

// --------------------------------------------------------------------------------------------------------

// 3. Function
// A function in JavaScript is a block of reusable code designed to perform a specific task when called.

// Defining a function to greet a user

// function greet(name) {
// return "Hello, " + name + "!";
//}

// Calling the function
// console.log(greet("Ajay"));

// --------------------------------------------------------------------------------------------------------

// 4. Date Object
// The Date object in JavaScript is used to work with dates and times, allowing for date creation,
// manipulation, and formatting.

// let currentDate = new Date();
// console.log(currentDate);

// --------------------------------------------------------------------------------------------------------

// 5. Regular Expression
// A RegExp (Regular Expression) in JavaScript is an object used to define search patterns
// for matching text in strings.

// Creating a regular expression to match the word "hello"
// let pattern = /hello/;

// let result1 = pattern.test("Hello, world!");
// let result2 = pattern.test("hello");

// console.log(result1);
// console.log(result2);

// let students = {
//   name: "Shivu",
//   course: "BCA",
//   enroll: 1234,
//   isCompleted: false,
//   books: ["web", "backend"],
//   nest: {
//     title: "1",
//     song: "Bollywood",
//   },
// };

// console.log("Whole Object", students);
// console.log("Object keys", Object.values(students));

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr);

// let a2 = [1, "two", { name: "Object" }, [3, 4, 5], true];

// console.log(a2);

// function abc() {
//   console.log("Hello I am function !");
// }

// abc();

// function sum(a, b) {
//   return a + b;
// }
// const a = sum(2, 2);
// console.log(a);

function sum(a, b) {
  console.log(a + b);
}
sum(5, 6);

/*

Object :-
  Create an object called person with properties name, age, and city. Print the object.
  WAP to print keys of last created object.
  Create an object car with properties brand and model. Access and print the brand.
  Write a program that prints all values of an object using console.log().

Array :-
  Create an array of 5 numbers and print it.
  Print the first and last element of an array.  
  Find the length of an array.

Function :-
  Write a function that prints “Hello World”.
  Write a function that takes two numbers and prints their sum.
  Write a function that returns the square of a number.  
  Write a function that takes a name as a parameter and prints a welcome message.
  
*/
