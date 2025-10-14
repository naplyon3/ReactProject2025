//native path module to handle and transform file paths
const path = require("path");
const express = require("express");
const app = express();
// app.all("/", (req, res) => {
//   res.send("Hello from Express");
// });

/// server up static files! only 1 line ...Take the nodejs
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send(`<h1>Hello from Express Get!!!!!!</h1>`);
// });
app.all("/", (req, res) => {
  console.log("path", path.join(__dirname + "/node.html"));
  res.sendFile(path.join(__dirname + "/node.html"));
});

app.post("/", (req, res) => {
  res.send("Post request to homepage");
});

app.put("/", (req, res) => {
  res.send("Put request to homepage");
});
app.delete("/", (req, res) => {
  res.send("Delete request to homepage");
});
app.patch("/", (req, res) => {
  res.send("Patch request to homepage");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
