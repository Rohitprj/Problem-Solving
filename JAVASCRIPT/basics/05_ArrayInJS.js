/*

Array in JS

An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

----------------------------------------------------------------------------------------------------------------------------------------

Why Use Arrays?

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

An array can hold many values under a single name, and you can access the values by referring to an index number.

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

----------------------------------------------------------------------------------------------------------------------------------------

Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax :-  
const array_name = [item1, item2, ...];

----------------------------------------------------------------------------------------------------------------------------------------

You can also create an empty array, and provide elements later:

const myArray = [];

myArray[0] = "John";
myArray[1] = "Doe";

console.log(myArray);

----------------------------------------------------------------------------------------------------------------------------------------

Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:

Example :-
const cars = new Array("Saab", "Volvo", "BMW");

----------------------------------------------------------------------------------------------------------------------------------------

Accessing Array Elements
You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

----------------------------------------------------------------------------------------------------------------------------------------

Changing an Array Element
This statement changes the value of the first element in cars:

cars[0] = "Opel";

----------------------------------------------------------------------------------------------------------------------------------------

Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:

*/

/*

JavaScript Array Methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;

console.log(size);

*/
