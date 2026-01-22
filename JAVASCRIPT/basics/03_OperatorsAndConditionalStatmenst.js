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
