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
