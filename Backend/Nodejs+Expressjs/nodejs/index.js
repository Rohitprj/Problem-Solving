// const cat = require("cat-me");
// import cat from "cat-me";

// console.log(cat());

import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello my name is Rohit");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
