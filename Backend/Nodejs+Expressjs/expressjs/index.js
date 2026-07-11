const express = require("express");
const Notes = require("./schema/notes");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

const PORT = 3001;

app.get("/health", (req, res) => {
  res.send("hello world");
});

app.post("/notes", async (req, res) => {
  const note = req.body;
  const result = await Notes.create({
    title: note.title,
    desc: note.desc,
  });
  console.log("DATA", result);
  res.status(200).json({ message: "note created successfully" });
});

app.get("/notes", async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
});

// get note by id

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  delete notes[id];
  res.status(200).json({ message: "note deleted successfully", data: notes });
});

app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = req.body;
  notes[id] = note;
  res.status(200).json({ message: "note updated successfully", data: notes });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

/*

Level 1 - Basic Route Creation
Question 1

Create a route:

/about

Response:

Welcome to About Page
Answer
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});
Question 2

Create a route:

/contact

Response:

Contact Us
Answer
app.get("/contact", (req, res) => {
  res.send("Contact Us");
});
Question 3

Create a route:

/services

Response:

Our Services
Answer
app.get("/services", (req, res) => {
  res.send("Our Services");
});
Level 2 - Multiple Routes
Question 4

Create 3 routes:

/
/about
/contact

Expected responses:

Home Page
About Page
Contact Page
Answer
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
Level 3 - Sending Different Responses
Question 5

Create a route:

/student

Response:

Rohit Kumar
Answer
app.get("/student", (req, res) => {
  res.send("Rohit Kumar");
});
Question 6

Create route:

/course

Response:

Node.js Backend Course
Answer
app.get("/course", (req, res) => {
  res.send("Node.js Backend Course");
});
Level 4 - JSON Response
Question 7

Create route:

/user

Response:

{
  "name": "Rohit",
  "age": 22
}
Answer
app.get("/user", (req, res) => {
  res.json({
    name: "Rohit",
    age: 22,
  });
});
Question 8

Create route:

/product

Response:

{
  "name": "Laptop",
  "price": 50000
}
Answer
app.get("/product", (req, res) => {
  res.json({
    name: "Laptop",
    price: 50000,
  });
});
Level 5 - Array Response
Question 9

Create route:

/students

Response:

[
  "Rohit",
  "Amit",
  "Priya"
]
Answer
app.get("/students", (req, res) => {
  res.json([
    "Rohit",
    "Amit",
    "Priya"
  ]);
});
Question 10

Create route:

/courses

Response:

[
  "MERN",
  "Java",
  "Python"
]
Answer
app.get("/courses", (req, res) => {
  res.json([
    "MERN",
    "Java",
    "Python"
  ]);
});
Level 6 - Array of Objects
Question 11

Create route:

/employees

Response:

[
  {
    "name": "Rohit",
    "salary": 50000
  },
  {
    "name": "Amit",
    "salary": 45000
  }
]
Answer
app.get("/employees", (req, res) => {
  res.json([
    {
      name: "Rohit",
      salary: 50000
    },
    {
      name: "Amit",
      salary: 45000
    }
  ]);
});

*/
