import express from "express";

const app = express();

const PORT = 3001;

app.get("/my-self", (req, res) => {
  res.send("My name is Rohit Kumar");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
