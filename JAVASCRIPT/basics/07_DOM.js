/*
what is dom in html and js 
I want to teach this to a student 
kitna padhana chie mujhe detail mei btao with explain 

Great question — especially since you’re teaching 👍
I’ll explain it in a teacher-friendly way, and also guide you on how much depth is enough for a student.

What is DOM (in HTML & JavaScript)?

DOM = Document Object Model

Simple definition you can tell your student:

DOM is a way for JavaScript to see and control HTML elements like objects.

Easy Analogy (very useful for teaching)

Think of a webpage like a family tree 🌳

<html> = root (grandparent)
<body> = child
<div>, <p>, <h1> = further children

This structure is called a tree structure

The browser converts HTML into this tree → called the DOM

Example
HTML:
<body>
  <h1 id="title">Hello</h1>
  <p>Welcome</p>
</body>

DOM Representation:
Document
 └── html
      └── body
           ├── h1 (id="title")
           └── p

👉 Each element becomes a node (object)

⚡ Why DOM is Important?

Because JavaScript can:

Change text
Change styles
Add/remove elements
Handle clicks (events)

👉 Without DOM, JavaScript cannot interact with HTML

💻 DOM in JavaScript (Core Concept)
1. Selecting Elements
document.getElementById("title")

Other methods:

document.querySelector("p")
document.querySelectorAll("p")
2. Changing Content
document.getElementById("title").innerText = "Hi Student"
3. Changing Style
document.getElementById("title").style.color = "red"
4. Adding Event (very important)
document.getElementById("title").onclick = function() {
  alert("Clicked!")
}
*/
// console.dir(document.body);

/*

DOM Manipulation

Selecting with id :- document.getElementById(“myId”)
Selecting with class :- document.getElementsByClassName(“myClass”)
Selecting with tag :- document.getElementsByTagName(“p”)
Selecting with query :- document.querySelector(“#myId / .myClass / tag”)        //returns first element.
Selecting with queryAll :- document.querySelectorAll(“#myId / .myClass / tag”)  //returns a NodeList.

--------------------------------------------------------------------------------------

Properties

tagName : returns tag for element nodes 
innerText : returns the text content of the element and all its children
innerHTML : returns the plain text or HTML contents in the element
textContent : returns textual content even for hidden elements

*/

// let a = document.getElementById("abc");
// console.dir(a);

// let b = document.getElementsByClassName("xyz");
// console.dir(b);

// let divs = document.getElementsByTagName("div");
// console.dir(divs);

// let firstElement = document.querySelector("p").tagName; // returns first element
// console.log("FirstElement", firstElement);
// console.dir(firstElement);

// let allElements = document.querySelectorAll("p"); // returns all elements
// console.log("AllElement", allElements);
// console.dir(allElements);

let innertxt = document.querySelector("#abc");

console.dir(document.body);

console.dir(innertxt.tagName);
console.dir(innertxt.innerText);
console.dir(innertxt.innerHTML);
console.dir(innertxt.textContent);
