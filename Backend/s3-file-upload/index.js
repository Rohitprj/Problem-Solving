const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const multer = require("multer");
const multerS3 = require("multer-s3");
const cors = require("cors");

const app = express();

const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    key: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
}).single("file");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the S3 File Upload API" });
});

app.post("/upload", upload, (req, res) => {
  res.send(`File uploaded successfully. ${req.file.location}`);
});

app.listen(3000, () => {
  console.log("Server is up on http://localhost:3000");
});
