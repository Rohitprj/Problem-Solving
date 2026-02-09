/* 

---------------------------OPERATORS---------------------------------

---------------------------Arithmetic Operators---------------------------------
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	    Description
+	            Addition
-	            Subtraction
*	            Multiplication
**	            Exponentiation (ES2016)
/	            Division
%	            Modulus (Remainder)
++	            Increment
--	            Decrement


*/

/*
---------------------------Assignment Operators---------------------------------

Assignment operators assign values to JavaScript variables.

Given that x = 10 and y = 5, the table below explains the assignment operators:

Operator	Example	    Same As	      Result
=	        x = y	    x = y	          x = 5
+=	        x += y	    x = x + y	      x = 15
-=	        x -= y	    x = x - y	      x = 5
*=	        x *= y	    x = x * y	      x = 50
**=	        x **= y	    x = x ** y	      x = 100000
/=	        x /= y	    x = x / y	      x = 2
%=	        x %= y	    x = x % y	      x = 0
:	        x: 45	    size.x = 45	      x = 45

*/

/*
---------------------------Comparison Operators---------------------------------

Comparison operators are used to compare two values.

Comparison operators always return true or false.

Given that x = 5, the table below explains the comparison operators:    

| Operator | Description                           | Comparing   | Returns |
| -------: | ------------------------------------- | ----------- | ------- |
|     `==` | Equal to                              | `x == 8`    | false   |
|          |                                       | `x == 5`    | true    |
|          |                                       | `x == "5"`  | true    |
|    `===` | Equal value **and** equal type        | `x === 5`   | true    |
|          |                                       | `x === "5"` | false   |
|     `!=` | Not equal                             | `x != 8`    | true    |
|    `!==` | Not equal value **or** not equal type | `x !== 5`   | false   |
|          |                                       | `x !== "5"` | true    |
|          |                                       | `x !== 8`   | true    |
|      `>` | Greater than                          | `x > 8`     | false   |
|      `<` | Less than                             | `x < 8`     | true    |
|     `>=` | Greater than or equal to              | `x >= 8`    | false   |
|     `<=` | Less than or equal to                 | `x <= 8`    | true    |



*/

/*

---------------------------Logical Operators---------------------------------

| Operator | Description | Example             | Returns    |          |   |          |       |
| -------: | ----------- | ------------------- | ---------- | -------- | - | -------- | ----- |
|     `&&` | Logical AND | `(x < 10 && y > 1)` | true       |          |   |          |       |
|     `&&` | Logical AND | `(x < 10 && y < 1)` | false      |          |   |          |       |
|        ` |             | `                   | Logical OR | `(x == 5 |   | y == 5)` | true  |
|        ` |             | `                   | Logical OR | `(x == 5 |   | y == 8)` | true  |
|        ` |             | `                   | Logical OR | `(x == 8 |   | y == 8)` | false |
|      `!` | Logical NOT | `!(x == y)`         | true       |          |   |          |       |


*/

/*
 ---------------------------Ternary Operator---------------------------------

The ternary operator is the only JavaScript operator that takes three operands.

The syntax is as follows:   condition ? expressionIfTrue : expressionIfFalse;

The condition is evaluated once. If the condition is true, the expressionIfTrue is evaluated; otherwise, the expressionIfFalse is evaluated.

let x = 9;
let y = 8;
let z = x > y ? x : y;
console.log(z);

*/

/*
 ---------------------------Nullish Coalescing Operator---------------------------------    

The nullish coalescing operator (??) returns its right operand when its left operand is null or undefined; otherwise, it returns its left operand.

*/

// let x = null;
// let y = 8;
// let z = x ?? y;
// console.log(z);

// function greet(name) {
//   const finalName = name ?? "Guest";
//   console.log(`Hello, ${finalName}`);
// }

// greet("Ajay");
// greet();

/*
 ---------------------------Optional Chaining---------------------------------

Optional chaining is a feature of JavaScript that allows you to access nested properties of an object without needing to check if the object exists.

*/

// let user = { name: "John", address: { street: "123 Main St" } };
// console.log(user?.address?.street);  // Output: 123 Main St

//==============================================================================================================================

/*

Falsy values in JS

   false
   0
   -0
   0n        // BigInt zero
   ""        // empty string
   null
   undefined
   NaN

Truthy values

   true
   "0"
   "false"
   []
   {}
   function () {}
   42
   -1
   Infinity

*/

//==============================================================================================================================

/* 
    CONDITIONAL STATEMENTS

    Types of Conditional Statements
    
    1. if Statement
    2. if-else Statement
    3. else if Statement
    4. Using Switch Statement
    5. Nested if...else


      ## Example ##  
const marks = 85;
let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);


    ######## Example ########

let weather = "sunny";
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
};


*/

/*

Operators :-  
  Write a program to add, subtract, multiply, and divide two numbers.
  Write a program to check whether two numbers are equal or not.
  Use logical operators to check if a number is between 10 and 20.

Conditional Statements :-
  Write a program to check whether a person is eligible to vote.
  Write a program to find the greatest of two numbers using if...else.  


*/

/*

OPERATORS – Practice Questions

Basic Operators

Write a program to add two numbers.

Subtract one number from another.

Multiply two numbers.

Divide two numbers and print the result.

Find the remainder when one number is divided by another.
----------------------------------------------------------------------
Comparison Operators

Check if two numbers are equal.

Check which number is greater between two numbers.

Check if a number is greater than or equal to 10.

Compare two numbers and print the larger one.

Check if a number is less than 100.
----------------------------------------------------------------------
Logical Operators

Check if a number is greater than 10 and less than 50.

Check if a number is even and positive.

Check if a number is negative or zero.

Check if a person is eligible to vote (age ≥ 18).

Check if a user can login (username AND password correct).
----------------------------------------------------------------------
CONDITIONAL STATEMENTS – Practice Questions
If Statement

Check if a number is positive.

Check if a number is even.

Check if a student has passed (marks ≥ 40).

Check if a person is eligible for driving license (age ≥ 18).

Print “Hello” if a number is greater than 5.
----------------------------------------------------------------------
If–Else Statement

Check whether a number is even or odd.

Check whether a number is positive or negative.

Check whether a student passed or failed.

Find the greater number between two numbers.

Check if a number is divisible by 5.
----------------------------------------------------------------------
If–Else If Ladder

Print grade based on marks:

≥90 → A

≥75 → B

≥60 → C

<60 → Fail

Print day name based on number (1–7).

Check age category:

<13 → Child

13–19 → Teen

≥20 → Adult

Check temperature:

<10 → Cold

10–25 → Normal

25 → Hot

Electricity bill calculation using slabs.
----------------------------------------------------------------------
ARRAYS – Practice Questions
Basic Array

Create an array of 5 numbers and print it.

Print the first element of an array.

Print the last element of an array.

Find the length of an array.

Print all elements of an array using loop.

*/

// let arr = [6,5,7,6,87,9,6,7,4,5,3,4,3,6,7,6,87,9,8,2,4,5,6,7,78,77,6,54,4,3,3,22,1,1];

// for(let i = 0; i < arr.length; i++){

//    if(arr[i] % 2 === 0){

//    console.log(arr[i]);

//    }

// }
