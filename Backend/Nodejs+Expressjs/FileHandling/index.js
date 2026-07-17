import express from "express";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const upload = multer({ storage:multer.memoryStorage() });
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/upload", upload.single("Image"), (req, res) => {
  console.log("1",req.file);
  console.log("2",req.body);
  res.json({ message: "File uploaded successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});