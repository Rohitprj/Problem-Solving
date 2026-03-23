/*
Functions are Code Blocks
Functions are reusable code blocks designed to perform a particular task.

Functions are executed when they are called or invoked.

Functions are fundamental in all programming languages.

 ------------------------------------------------------------------------------------------------------------------------------------

 What Does a Function Look Like?

 function sayHello() {
  return "Hello World";
}

Note
The function above does not do anything.

It has to be called first.

------------------------------------------------------------------------------------------------------------------------------------

A Function Can Be Used Many Times
A big benefit is that you can call the same function whenever you need it.

function add(a, b) {
  return a + b;
}

let sum1 = add(5, 5);
let sum2 = add(50, 50);

------------------------------------------------------------------------------------------------------------------------------------

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

------------------------------------------------------------------------------------------------------------------------------------

Why Functions?
Functions enable better code organization and efficiency.

With functions you can reuse the same code many times.

The same code, with different input, can produce different results.

------------------------------------------------------------------------------------------------------------------------------------

Function Input and Output
The most useful functions work like this:

Parameters - some values are sent to the function
Arguments - some values are received by the function
Function Code - some work is done inside the function
Return Output - some value is returned from the function

*/

/*

Invoking JavaScript Functions

Calling a Function
A JavaScript function runs when it is called.

To call a function, write the name followed by parentheses like name().

Function Invocation
The code inside a function is NOT executed when the function is defined.

The code inside a function will execute when "something" invokes the function:

When it is called from JavaScript code
When an event occurs (a user clicks a button)
Automatically (self invoked)
It is common to use the term invoke, because a function can be invoked without being called.

It is also common to use say:

call a function
call upon a function
start a function
execute a function

------------------------------------------------------------------------------------------------------------------------------------

Examples
The function below returns the text "Hello World".

But it will not run before you call it.

Example
function sayHello() {
  return "Hello World";
}

------------------------------------------------------------------------------------------------------------------------------------

The code below calls the function.

But it does not use the result.

Example
function sayHello() {
  return "Hello World";
}

sayHello();

------------------------------------------------------------------------------------------------------------------------------------

Calling a Function Many Times
You can call the same function whenever you need it.

Example
function sayHello() {
  return "Hello World";
}

let a = sayHello();
let b = sayHello();
let c = sayHello();

*/

/*

JavaScript Function Parameters

Parameters (Function Input)
Parameters allow you to pass (send) values to a function.

Parameters are listed inside the parentheses in the function definition.

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);

------------------------------------------------------------

Functions with One Parameter
A function can have one parameter.

Examples
function sayHello(name) {
  return "Hello " + name;
}

let greeting = sayHello("John");

------------------------------------------------------------

Functions with Multiple Parameters
You can add as many parameters as you want, separated by commas.

Example
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("John", "Doe");

------------------------------------------------------------

Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:

Parameters are the names listed in the function definition.

Arguments are the real values passed to, and received by the function.

------------------------------------------------------------

Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the arguments.

JavaScript functions do not check the number of arguments received.

------------------------------------------------------------

Incorrect Parameters
Accessing a function with an incorrect parameter can return an incorrect answer:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();

----------------------------------------------------------------

Default Parameter Values
ECMAScript 2015 allows function parameters to have default values.

The default value is used if no argument is provided.

Example
If y is not passed or undefined, then y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);

----------------------------------------------------------------

JavaScript Function Return

Returning Values from Functions
A function can return a value back to the code that called it.

The return statement is used to send a value out of a function.

----------------------------------------------------------------

The return Statement
When a function reaches a return statement, the function stops executing.

The value after the return keyword is sent back to the caller.

Example
function sayHello() {
  return "Hello World";
}

let message = sayHello();

Note :- The variable message now contains "Hello World".

----------------------------------------------------------------

Returning a Calculated Value
Most functions return the result of a calculation or an operation.

Example
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);

----------------------------------------------------------------

Return Statements Stop Execution
Code written after a return statement will NOT be executed.

Example
function multiply(a, b) {
  return "Done";
  // Next line will never run
  return a * b;
}

let result = multiply(4, 3);

----------------------------------------------------------------

Functions Without return
If a function does not return a value, the return value will be undefined.

Example
function multiply(a, b) {
  let x = a * b;
}

let result = multiply(4, 3);

*/

/*

JavaScript Function Arguments

Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:

Parameters are the names listed in the function definition.

Arguments are the real values passed to, and received by the function.

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);

In the example above:

a and b are parameters
4 and 5 are arguments

The argument 4 is assigned to the parameter a.

The argument 5 is assigned to the parameter b.

----------------------------------------------------------------

Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

Example
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

*/

/*
JavaScript Arrow Functions

Arrow Functions allow a shorter syntax for function expressions.

You can skip the function keyword, the return keyword, and the curly brackets:

const multiply = (a, b) => a * b;

----------------------------------------------------------------

Arrow Function Syntax
An arrow function uses the => symbol.

An arrow function is always written as a function expression.

const add = (a, b) => {
  return a + b;
};

----------------------------------------------------------------

Arrow Functions Return Value by Default

If the function has only one statement that returns a value:

You can remove the brackets and the return keyword:

const hello = () => "Hello World!";

Note :- This works only if the function has only one statement.

----------------------------------------------------------------

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// This will return undefined
const myFunction = (x, y) => { x * y };

// This will return undefined
const myFunction = (x, y) => return x * y;

// This will return the expected result
const myFunction = (x, y) => { return x * y };

*/

/*

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const abc = arr.forEach(value => console.log(value)); // not return any value


const abc1 = arr.map((value,indx) => {return indx}); // return value

console.log(abc1)

*/
