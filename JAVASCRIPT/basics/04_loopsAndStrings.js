/*
Loops in JS

## for loop

for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

WAP to print 1 to 10
WAP to print 10 to 1
WAP to print sum of 1 to 10

## Practice Set
WAP to print 2 to 20
WAP to print 20 to 2

## while loop

let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}


## do-while loop

let i = 0;
do {
    console.log("Number:", i);
    i++;
} while (i < 3);

*/

// console.time();
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// console.timeEnd();

// let i = 0;
// do {
//   console.log("Number:", i);
//   i++; // increment
//   console.log(i);
// } while (i < 3);

/*

PS

WAP to print 1 to 10
WAP to print 10 to 1
WAP to print table of 2
Make that table of 2 in this format ( 2 x 1 = 2, 2 X 2 = 4 )
WAP to print odd num in 1 to 100
WAP to print even num in 1 to 100

*/

// --------------------------------------------------------------------------------------------------------------------

/*

Strings in JS

create a string
let name = "Asha learnlogy";

string length
name.length

string indices
name[0], name[1], name[2]

Template literals ( In which we can add expressions and variables into our strings. In some other words we can say string Interpolation.)
let specialString = `We are a student of web development in ${name}`

Escape characterstices

\n ( for next line )
console.lo("Asha \n learnlogy")

\t ( for tab space )
console.log("Asha \t learnlogy")


String methods in JS :-

let str = Asha Learnlogy;

str.toUpperCase();          to uppercase all string
str.toLowerCase();          to lowercase all string
str.trim();                 to trim spaces b/w strings
str.slice(start, end);      to slice string from start to end -1
str.concat();               to concat string
str.replace();              to replace first selected char from a string
str.replaceAll();           to replace all selected char from a string
str.charAt()                to search char based in its index

*/

// let str = "Asha Learnlogy";
let str = "Yellow";

const x = str.replace("Y", "H");
const y = str.replaceAll();
const z = str.charAt(5);

console.log(x);

/*

🔹 toUpperCase() – Practice Questions

Convert the string "hello" to uppercase.

Convert a user’s name into uppercase.

Convert the sentence "welcome to coding" into uppercase.

Take a string and print it in uppercase without changing the original string.

Convert only the word "india" to uppercase in the sentence "i love india".

--------------------------------------------------------------------------------------------------------------------

🔹 toLowerCase() – Practice Questions

Convert the string "HELLO" to lowercase.

Convert "WELCOME To JAVA" into lowercase.

Take a string and print it in lowercase.

Convert a username to lowercase before saving it.

Convert "ApPlE" into lowercase.

--------------------------------------------------------------------------------------------------------------------

🔹 trim() – Practice Questions

Remove extra spaces from " hello ".

Remove leading spaces from a string.

Remove trailing spaces from a string.

Check the length of a string before and after using trim().

Clean user input by removing extra spaces.

--------------------------------------------------------------------------------------------------------------------

🔹 slice(start, end) – Practice Questions

Extract "world" from "hello world".

Extract first 5 characters from "JavaScript".

Extract last 3 characters from "coding".

Slice "frontend" from index 0 to 5.

Extract "Native" from "React Native Developer".

--------------------------------------------------------------------------------------------------------------------

🔹 concat() – Practice Questions

Join "Hello" and "World" using concat().

Join first name and last name.

Join "Good" + " Morning" using concat().

Create a full name by concatenating two strings.

Join three strings: "I", "Love", "Coding".

--------------------------------------------------------------------------------------------------------------------

🔹 replace() – Practice Questions

Replace "Java" with "JavaScript" in "I love Java".

Replace "dog" with "cat" in "The dog is friendly".

Replace the first "a" with "@" in "banana".

Replace "2023" with "2024" in "Year is 2023".

Replace "blue" with "red" in a sentence.

--------------------------------------------------------------------------------------------------------------------

🔹 replaceAll() – Practice Questions

Replace all spaces with "-" in "hello world welcome".

Replace all "a" with "@" in "banana".

Replace all commas with semicolons.

Replace all "is" with "was" in a sentence.

Replace all spaces with empty string (remove spaces).

--------------------------------------------------------------------------------------------------------------------

🔹 charAt() – Practice Questions

Print the first character of "Hello".

Print the last character of "Coding".

Print the character at index 2 of "JavaScript".

Get the first letter of a user’s name.

Print each character of a string using charAt() and loop.

*/
