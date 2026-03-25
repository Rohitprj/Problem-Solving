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
console.dir(document.body);
