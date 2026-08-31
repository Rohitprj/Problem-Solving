import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required!" });
  }
  res
    .status(200)
    .json({ message: "User registered successfully !", email, password });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

/*

Make 2 apis 
1) GET get-notes
2) POST create-notes {title, description}

// const notes = [{},{},{}];

// notes.push(data);

*/
