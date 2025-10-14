const express = require("express");
const app = express();

// Route handling
// 1-get -read all HTTP methods
// 2-post -create data
// 3-put -update data
// 4-delete -delete data
// 5-patch -partially update data
// 6-all -handles all HTTP methods
//Take 2 args:
// 1-path
// 2-callback function -req, res
app.all("/", (req, res) => {
  res.send("Hello from Express");
});
app.get("/", (req, res) => {
  res.send("Hello from Express Get!!!!!!");
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
