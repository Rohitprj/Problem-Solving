import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB/db.js";

dotenv.config();

connectDB();

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
  res.status(200).json({ message: "Note Created Successfully" });
});

app.get("/notes", (req, res) => {
  res
    .status(200)
    .json({ message: "Notes Fetched Successfully", data: getNotes });
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  delete getNotes[id];
  res
    .status(200)
    .send({ message: "Note Deleted Successfully", data: getNotes });
});

app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body.desc;
  getNotes[id].desc = data;
  res
    .status(200)
    .send({ message: "Note Updated Successfully", data: getNotes });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
