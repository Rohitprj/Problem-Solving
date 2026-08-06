import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/user.routes.js";
import uploadFile from "./services/storage.js";

dotenv.config();

const app = express();

const upload = multer({ storage: multer.memoryStorage() });

const PORT = process.env.PORT || 3020;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Token API" });
});

app.post("/upload", upload.single("file"), async(req, res) => {
  const file = req.file;
  const data = req.body;

  const sendFile = await uploadFile(file.buffer, file.originalname);

  console.log(file);
  console.log(data);
  console.log(sendFile);

  res.json({ message: "File uploaded successfully" });
});

app.use("/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
