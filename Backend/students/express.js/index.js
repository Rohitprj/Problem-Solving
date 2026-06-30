import express from "express";

const app = express();

app.use(express.json());

const PORT = 3001;

const getNotes = [];

app.get("/my-self", (req, res) => {
  res.send("My name is Rohit Kumar");
});

app.post("/notes", (req, res) => {
  const data = req.body;
  getNotes.push(data);
  console.log(data);
  res.status(200).send("Note Created Successfully");
});

app.get("/notes", (req, res) => {
  res.send(getNotes);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
