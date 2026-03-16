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

--------------------------------------------------------------------------------------------------------------------------------

In JavaScript Strings are Immutable and Arrays are Mutable  

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[1] = "Kiwi"

console.log(fruits);
console.log(fruits.toString());

const a = "Apple";

let b = a[1] = "k";

console.log(a);

*/

/*

JavaScript Array Methods :-

1. Array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;

console.log(size);

Output :- 4

--------------------------------------------------------------------------------------------------------------------------------

2. Array toString()

Converts an array into a comma separated string.

let fruits = ["apple", "banana", "mango"];

console.log(fruits.toString());

Output :- apple,banana,mango

--------------------------------------------------------------------------------------------------------------------------------

3. Array at()

Returns element at a specific index.

let fruits = ["apple", "banana", "mango"];

console.log(fruits.at(1));

Output :- banana

--------------------------------------------------------------------------------------------------------------------------------

4. Array join()

The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator :-

let fruits = ["apple", "banana", "mango"];

console.log(fruits.join(" - "));

Output :- apple - banana - mango

--------------------------------------------------------------------------------------------------------------------------------

5. Array pop()

Removes the last element of an array.

let fruits = ["apple", "banana", "mango"];

fruits.pop();

console.log(fruits);

Output :- ["apple", "banana"]

--------------------------------------------------------------------------------------------------------------------------------

6. Array push()

Adds an element to the end of the array.

let fruits = ["apple", "banana"];

fruits.push("mango");

console.log(fruits);

Output :- ["apple", "banana", "mango"]

--------------------------------------------------------------------------------------------------------------------------------

7. Array shift()

Removes the first element from the array.

let fruits = ["apple", "banana", "mango"];

fruits.shift();

console.log(fruits);

Output :- ["banana", "mango"]

--------------------------------------------------------------------------------------------------------------------------------

8. Array unshift()

Adds elements to the beginning of the array.

let fruits = ["banana", "mango"];

fruits.unshift("apple");

console.log(fruits);

Output :- ["apple", "banana", "mango"]

--------------------------------------------------------------------------------------------------------------------------------

9. Array.isArray()

Checks if a variable is an array.

let fruits = ["apple", "banana"];
let num = 10;

console.log(Array.isArray(fruits));
console.log(Array.isArray(num));

Output :- true
       :-false

--------------------------------------------------------------------------------------------------------------------------------

10. delete (Array delete)

Deletes an element but keeps empty slot.

let fruits = ["apple", "banana", "mango"];

delete fruits[1];

console.log(fruits);

Output :- ["apple", empty, "mango"]

⚠️ Not recommended usually.

--------------------------------------------------------------------------------------------------------------------------------

11. Array concat()

Combines two or more arrays.

let arr1 = [1,2];
let arr2 = [3,4];

let result = arr1.concat(arr2);

console.log(result);

Output :- [1,2,3,4]

--------------------------------------------------------------------------------------------------------------------------------

12. Array slice()

Returns a new array from selected elements.

let fruits = ["apple","banana","mango","orange"];

let result = fruits.slice(1,3);

console.log(result);

Output :- ["banana","mango"]

--------------------------------------------------------------------------------------------------------------------------------

13. Array splice()

The splice() method can be used to add new items to an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
Output :- ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

*/

let fruits = ["apple", "banana", "mango", "orange"];

let a = fruits.slice(0, 2);

console.log(a);
